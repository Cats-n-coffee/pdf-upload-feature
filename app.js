const express = require('express');
require('dotenv').config();
const { connectToDb } = require('./db/dbConnection');
const router = require('./routes/appRoutes');
const app = express();
const { config } = require('./config/config');
const parse = require('./helpers/pdfParser');

async function bootstrap() {
    await connectToDb()

    app.use(router)

    app.listen(config.PORT, config.HOST, () => {
        console.log('listening on 3000')
        parse()
    })
}

bootstrap();
