/* eslint-disable no-unreachable */
import { cleanEnv, num, str } from 'envalid';
import Logger from './logger';

function validateEnv() {
  try {
    cleanEnv(process.env, {
      POSTGRES_HOST: str(),
      POSTGRES_PORT: num(),
      POSTGRES_PASSWORD: str(),
      POSTGRES_DB: str(),
      PORT: num(),
    });
  } catch (e) {
    Logger.error('Invalid environmental variables.', e);
  }
}

export default validateEnv;
