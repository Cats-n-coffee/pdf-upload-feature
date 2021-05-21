const { client } = require('./dbConnection');
const { config } = require('../config/config');

async function insertPDF(pdfObj) {
    const clientDb = await client.db(config.DB_NAME)
    .collection('pdf')

    return clientDb.insertOne(pdfObj)
        .then(res => console.log('inserted ',res.insertedCount))
        .catch(err => console.log(err))
}

module.exports = { insertPDF }