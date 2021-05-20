require('dotenv').config();

module.exports.config = {
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || '127.0.0.1',
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: process.env.DB_NAME,
}