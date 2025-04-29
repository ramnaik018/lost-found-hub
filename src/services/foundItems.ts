import {GetCommand,PutCommand,UpdateCommand,DeleteCommand,QueryCommand} from '@aws-sdk/lib-dynamodb';
import {dynamoDb,TABLE_NAME} from './../config/dynamoDBClient';
import {v4 as uuidv4} from 'uuid';

import {Item} from './../models/itemModel';

export class FoundItemsClass{
    async getAllFoundItems():Promise<Item[]> {
        const command=new QueryCommand({
            TableName:TABLE_NAME,
            IndexName:'status-date-index',
            KeyConditionExpression:'#statusKey=:statusVal',
            ExpressionAttributeNames:{
                '#statusKey':'status'
            },
            ExpressionAttributeValues:{
                ':statusVal':'found'
            }
        });

        const response= await dynamoDb.send(command);
        return response.Items as Item[];
    }

    async getFoundItemById(id:string):Promise<Item|undefined>{
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

    async createFoundItem(itemData: Omit<Item,'id'|'status'>){
        // Since the itemData is coming from API , we cannot expect it to have ID hardcoded, we explicitly need to populate and attach id to this new Data
        //Similarly status should also be added.
        const newItem:Item={
            'id':uuidv4(),
            ...itemData,
            'status':'found'
        }

        const command=new PutCommand({
            TableName:TABLE_NAME,
            Item:newItem  // As long as the newItem contains partition key (id) and sort key(name) , dynamo db is happy and will store newItem in its database.
        });

        await dynamoDb.send(command);
        return newItem;
    }

    async updateFoundItem(id:string,itemData :Partial<Omit<Item,'id'|'status'>>){
        const foundItem=await this.getFoundItemById(id);
        if(foundItem){
            const updateExpression :string[]=[];
            const expressionAttributeNames: Record<string,string> ={};
            const expressionAttributeValue: Record<string,any> ={};

            Object.entries(itemData).forEach(([key,val])=>{
                updateExpression.push(`#${key}=:${key}`);
                expressionAttributeNames[`#${key}`]=key;
                expressionAttributeValue[`:${key}`]=val;
            });

            const command=new UpdateCommand({
                TableName:TABLE_NAME,
                Key:{
                    id:id,
                    name:foundItem.name

                },
                UpdateExpression:`SET ${updateExpression.join(',')}`,
                ExpressionAttributeNames:expressionAttributeNames,
                ExpressionAttributeValues:expressionAttributeValue,
                ReturnValues:'ALL_NEW'
            });

            const response=await dynamoDb.send(command);
            return response.Attributes as Item; 
        }
         return undefined;
    }

    async deleteFoundItem(id:string):Promise<boolean>{
        const item=await this.getFoundItemById(id);
        if(item){
            const command=new DeleteCommand({
                TableName:TABLE_NAME,
                Key:{
                    id:id,
                    name:item.name
                },
                ReturnValues:'ALL_OLD'
            });
    
            const response=await dynamoDb.send(command);
            return !!response.Attributes;
        }
        return false;
    }

}

export const foundItemsService=new FoundItemsClass();