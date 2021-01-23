import 'dotenv/config';
import { createConnection } from 'typeorm';
// TypeORM config that imports configuration object based on environmental variables
import config from '../ormconfig';

const createDBConnection = async () => {
  try {
    await createConnection(config);
  } catch (e) {
    throw Error(`Database could not be reached, error:${e}`);
  }
};

export default createDBConnection;
