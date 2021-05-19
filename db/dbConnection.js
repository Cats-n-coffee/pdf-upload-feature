const { MongoClient } = require('mongodb');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;
const DB_NAME = process.env.DB_NAME;

const client = new MongoClient(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function connectToDb() {
    try {
        await client.connect()
        console.log('connected')
        // const db = client.db(DB_NAME)
        // const col = db.collection(('pdf'))
        // const op = await col.insertOne({ name: 'Chichi', species: 'cat' })

    }
    catch (err) {
        console.log('connectedToDb', err)
    }
}

module.exports = { connectToDb, client }