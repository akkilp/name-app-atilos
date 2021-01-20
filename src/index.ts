/* eslint-disable consistent-return */
/* eslint-disable func-names */
import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import App from './app';
import NameController from './names/name.controller';

/* TypeORM and process.env configuration */
import config from './ormconfig';

import validateEnv from './utils/validateEnv';

dotenv.config({ path: `${__dirname}/src/.env` });

const PORT = process.env.PORT || 5000;

validateEnv();

(async function () {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database\n', error);
    return error;
  }

  // Initialize server with App Class
  const app = new App([new NameController()], PORT as number);
  app.listen();
})();
