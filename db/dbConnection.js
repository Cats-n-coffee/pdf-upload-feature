const { MongoClient } = require('mongodb');
const ops = require('./dbOperations');

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

const client = new MongoClient(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('client', client)

async function connectToDb() {
    try {
        await client.connect()
        console.log('connected')
        console.log('client connected', client)
        // const db = client.db(DB_NAME)
        // const col = db.collection(('pdf'))
        // const op = await col.insertOne({ name: 'Chichi', species: 'cat' })

    }
    catch (err) {
        console.log('connectedToDb', err)
        console.log('client connected err', client)
    }
}

module.exports = { connectToDb, client }