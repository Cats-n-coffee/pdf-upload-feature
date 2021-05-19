const { client } = require('./dbConnection');
require('dotenv').config();

const DB_NAME = process.env.DB_NAME;

async function insertPDF() {
    const clientDb = await client.db(DB_NAME)
    .collection('pdf')

    return clientDb.insertOne({ name: 'cato', species: 'cat' })
        .then(res => console.log('inserted ',res.insertedCount))
        .catch(err => console.log(err))
}

module.exports = { insertPDF }