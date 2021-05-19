const express = require('express');
require('dotenv').config();
const { connectToDb } = require('./db/dbConnection');
const router = require('./routes/appRoutes');
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1'

async function bootstrap() {
    await connectToDb()

    app.use(router)

    app.listen(PORT, HOST, () => {
        console.log('listening on 3000')
    })
}

bootstrap();
