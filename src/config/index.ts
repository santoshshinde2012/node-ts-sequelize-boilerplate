import path from 'path';
import dotenv from 'dotenv';

dotenv.config({
    path: path.join(__dirname, '../../.env')
});

type DbConnection = {
    host: string,
    port: number,
    user: string,
    password: string,
    database: string
}

const connection: DbConnection = {
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}

export default connection;