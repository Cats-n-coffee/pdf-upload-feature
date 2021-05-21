const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
require('dotenv').config();

const { connectToDb } = require('./db/dbConnection');
const router = require('./routes/appRoutes');
const { config } = require('./config/config');

const app = express();

async function bootstrap() {
    await connectToDb()

    app.use(fileUpload({
        createParentPath: true,
    }))

    app.use(cors());
    app.options('*', cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(router)

    app.listen(config.PORT, config.HOST, () => {
        console.log('listening on 3000')
    })
}

bootstrap();

// https://attacomsian.com/blog/uploading-files-nodejs-express
// https://www.npmjs.com/package/express-fileupload
// https://dev.to/taylorbeeston/you-probably-don-t-need-body-parser-in-your-express-apps-3nio