const { MongoClient, ObjectId } = require('mongodb');

const url    = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'tienda_pc'

const Mdb = {
    find: async (filter, collection) => {
        await client.connect();
        const db = client.db(dbName);
        const col = db.collection(collection); // componentes
        const documents  = await col.find(filter).toArray()
        return documents
    },
    insertOne: async (document, collection) => {
        await client.connect();
        const db = client.db(dbName);
        const col = db.collection(collection);
        const response  = await col.insertOne(document)
        return response
    },
    updateOne: async (document, collection) => {
        await client.connect();
        const db = client.db(dbName);
        const col = db.collection(collection);
        // 
        const id = document._id
        delete document._id 

        const response  = await col.updateOne(
            {"_id":ObjectId(id)},
            {
                $set: document
            }
        )
        return response
    },
    findById: async (filter, collection) => {
        await client.connect();
        const db = client.db(dbName);
        const col = db.collection(collection);

        try {
            const documents  = await col.find({_id: ObjectId(filter.id)}).toArray()
            return documents
        } catch (e){
            return []
        }
    },
    deleteOne: async (id, collection) => {
        await client.connect();
        const db = client.db(dbName);
        const col = db.collection(collection);

        const response  = await col.deleteOne(
            {"_id":ObjectId(id)}
        )
        return response
    }
}

module.exports = Mdb