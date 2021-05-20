const { MongoClient } = require('mongodb');
const { config } = require('../config/config');

const client = new MongoClient(config.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function connectToDb() {
    try {
        await client.connect()
        console.log('connected')
    }
    catch (err) {
        console.log('connectedToDb', err)
    }
}

module.exports = { connectToDb, client }