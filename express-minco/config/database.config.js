import dotenv from 'dotenv';
dotenv.config();

const DB_CONFIG = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dbname: process.env.DB_NAME,
    dialect: 'mysql' || 'postgresql'
}

export default DB_CONFIG;