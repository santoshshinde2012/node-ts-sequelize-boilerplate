import { Dialect, Sequelize } from 'sequelize'
import connection from '../config';
import logger from '../lib/logger';

const {
  database,
  user,
  password,
  host
} = connection;


const sequelizeConnection = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql' as Dialect
});

async function synchronizeModels() {
  try {
    await sequelizeConnection.sync();
    logger.info('All models were synchronized successfully.');
  } catch (error) {
    logger.error('An error occurred while synchronizing models:', error);
  }
}

synchronizeModels();

export default sequelizeConnection

