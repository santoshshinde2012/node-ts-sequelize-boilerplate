import { Dialect, Sequelize } from 'sequelize'
import connection from '../config';
import logger from '../lib/logger';

const {
  database,
  user,
  password,
  host,
  dbLogging
} = connection;


const sequelizeConnection = new Sequelize(database, user, password, {
  host: host,
  logging: dbLogging,
  dialect: 'mysql' as Dialect
});

export default sequelizeConnection

