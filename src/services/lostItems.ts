import {PutCommand,GetCommand,QueryCommand,DeleteCommand,UpdateCommand} from '@aws-sdk/lib-dynamodb';
import {dynamoDb,TABLE_NAME} from './../config/dynamoDBClient'

// To create new IDs , we need to import uuidv4 from uuid

import {v4 as uuidv4} from 'uuid';

import {Item} from './../models/itemModel';

export class LostItemService{
    async getAllLostItems():Promise<Item[]> {
        const command= new QueryCommand({
            TableName:TABLE_NAME,
            IndexName:'status-date-index', // Since we already have partition key and sort key for name and email , i created GSI for status
            KeyConditionExpression:'#statusKey= :statusVal',
            ExpressionAttributeNames:{
                '#statusKey':'status'
            },
            ExpressionAttributeValues:{
                ':statusVal':'lost'
            }
        })

        const response = await dynamoDb.send(command);
        return response.Items as Item[];
    }

    async getLostItemById(id:string) : Promise<Item|undefined> {

        //GetCommand requires both id and sort key (example: name or status) to retrieve the item directly.
        const command = new QueryCommand({
            TableName:TABLE_NAME,
            KeyConditionExpression:'#idKey= :idVal',
            ExpressionAttributeNames:{
                '#idKey':'id'
            },
            ExpressionAttributeValues:{
                ':idVal':id
            }
        });

        const response = await dynamoDb.send(command);
        if(response.Items && response.Items.length>0){
            return response.Items[0] as Item;
        }else{
            return undefined;
        }
    }
    // we use new QueryCommand() when we need multiple Items
    // we use new getCommand() when we need only one Item

    async createLostItem(itemData: Omit<Item,'id'|'status'>){
        const newItem:Item ={
            'id':uuidv4(),
            ...itemData,
            'status':'lost'
        }

        const command=new PutCommand({
            TableName:TABLE_NAME,
            Item:newItem
        });

        await dynamoDb.send(command);
        return newItem;
    }

    async updateLostItem(id:string , itemData:Partial<Omit<Item,'id'|'status'>>):Promise<Item|undefined>{
        const updateExpressions :string[]=[];
        const expressionAttributeNames :Record<string,string>= {};
        const expressionAttributeValues:Record<string,any> ={};

        Object.entries(itemData).forEach(([key,val])=>{
            updateExpressions.push(`#${key}=:${key}`);
            expressionAttributeNames[`#${key}`]=key;
            expressionAttributeValues[`:${key}`]=val;
        })
        
        const command=new UpdateCommand({
            TableName:TABLE_NAME,
            Key:{
                id:id,
                name:itemData.name
            },
            UpdateExpression:`SET ${updateExpressions.join(',')}`,
            ExpressionAttributeNames:expressionAttributeNames,
            ExpressionAttributeValues:expressionAttributeValues,
            ReturnValues:'ALL_NEW' //Return the item after the updation completes.
        });

        const response=await dynamoDb.send(command);
        return response.Attributes as Item|undefined;
    }

    async deleteLostItem(id:string):Promise<boolean>{

        const item=await this.getLostItemById(id);
        if(item){
            const command=new DeleteCommand({
                TableName:TABLE_NAME,
                Key:{
                    id:id,
                    name:item.name
                },
                ReturnValues:'ALL_OLD'  // return the item however it is before the updation
            });
            const response =await dynamoDb.send(command);
            return !!response.Attributes;
            //   !! will convert truty and falsy values into truth or false values
        }
        return false; 
    }

}


export const lostItemsService=new LostItemService();

/*
    Optional<T> , Omit<T,at1|at|..>    manipulating data which is incoming to make create and update more flexible


    Omit<t> will take in the JSON object which we received from API and omits the attributes we mention in there (eg: ID and STATUS)
    
    after omiting to make it even more flexible , Optional<T> make all the attributes of the object as optional. soo that from frontent/postman
    we can simply just provide only those attributes which needs to be fixed.

*/