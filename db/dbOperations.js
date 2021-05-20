const { client } = require('./dbConnection');
const { config } = require('../config/config');

async function insertPDF() {
    const clientDb = await client.db(config.DB_NAME)
    .collection('pdf')

    return clientDb.insertOne({ name: 'doggo', species: 'dog' })
        .then(res => console.log('inserted ',res.insertedCount))
        .catch(err => console.log(err))
}

module.exports = { insertPDF }