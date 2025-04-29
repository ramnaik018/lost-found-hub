//After we installing aws-sdk/client-dynamodb and aws-sdk/lib-dynamodb 
import {DynamoDBClient} from '@aws-sdk/client-dynamodb';// this is the client of dynamodb , which is used to do CRUD on aws
import {DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb"; // this is wrapper on top of the client-dynamo whch makes communication of client to our app less clumsy.
import dotenv from 'dotenv'; // used tp store the aws client and secret saperate from code (.env file)

dotenv.config();

// dotenv.config() will load the environmental variables from .env to process.env 
// where after this we can access the variables via , process.env.VARIABLE_NAME


// the pre defiend object structure to feed into DynamoDBClient is

const client=new DynamoDBClient({
    region:process.env.region,
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY_ID!, 
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY!
    }
})

//at the end we are using ! to tell TS that key id and secret both will be sirngs at rum time.

export const dynamoDb=DynamoDBDocumentClient.from(client); // object of DynamoDBClient is wrapped around DynamoDBDocumentClient 
export const TABLE_NAME=process.env.DYNAMODB_TABLE_NAME;


//DYNAMO DB IS SCHEMA LESS