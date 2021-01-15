import * as express from 'express';
import Logger from '../utils/logger';

export default function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next
) {
  Logger.request(request);
  next();
}
