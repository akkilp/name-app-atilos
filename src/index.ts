/* eslint-disable consistent-return */
/* eslint-disable func-names */
import * as dotenv from 'dotenv';
import 'reflect-metadata';

import App from './app';
import NameController from './names/name.controller';

import createDBConnection from './utils/createDBConnection';
import validateEnv from './utils/validateEnv';

dotenv.config({ path: `${__dirname}/src/.env` });

const PORT = process.env.PORT || 5000;

// Validate environmental variables
validateEnv();

const startServer = async () => {
  await createDBConnection();

  // Initialize server with App Class
  const app = new App([new NameController()], PORT as number);
  app.listen();
};

startServer();
