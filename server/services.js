import { ObjectId } from 'mongodb'

async function listDatabases(client){
    try{
        const dbList = await client.db().admin().listDatabases();
        // console.log(dbList);
        dbList.databases.forEach(element => {
            console.log(element.name);
        });
    }catch(err){
        console.log(err);
    }
    
}

async function insertFood(client , data){
    try{
        const result = await client.db("ContentCreator").collection("Food").insertOne(data);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

export async function insertUser(client , userData){
    try{
        const result = await client.db("ContentCreator").collection("User").insertOne(userData);
        console.log(result);
        return result;
    }catch(err){
        console.log(err);
    }
}

export async function login(client , userData){
    try{
        const result = await client.db("ContentCreator").collection("User").findOne({
            username : userData.username , 
            password : userData.password
        });
        return result;
    }catch(err){
        console.log(err);
    }
}

export async function updateCards(client , userData){
    try{
        const id = new ObjectId(userData.clientId);
        const result = await client.db("ContentCreator").collection("User").updateOne({_id:id} , {$set:{
            cards : userData.cards
        }});
        console.log(result);
        return result;
    }catch(err){
        console.log(err);
    }
}

export async function addCard(client , proData){
    try{
        const result = await client.db("ContentCreator").collection("card").insertOne(proData);
        console.log(result);
        return result;
    }catch(err){
        console.log(err);
        return err;
    }
}

export async function sendRequest(client , OrderData){
    try{
        const cursor = await client.db("ContentCreator").collection("User").findOne({
            isAdmin : true
        });
        let updatedRequest = cursor.request;
        updatedRequest.push({
            clientId : OrderData.clientId,
            name : OrderData.name,
            address : OrderData.address,
            cart : OrderData.cart
        });
        // console.log(result);
        const result = await client.db("ContentCreator").collection("User").updateOne({_id:cursor._id} , {$set:{
            request : updatedRequest
        }});
        return result;
    }catch(err){
        console.log(err);
    }
}

export async function getRequestArr(client){
    try{
        const result = await client.db("ContentCreator").collection("User").findOne({isAdmin : true});
        console.log(result);
        return result.request;
    }catch(err){
        console.log(err);
    }
}
