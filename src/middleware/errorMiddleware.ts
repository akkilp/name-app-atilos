import { Request, Response, NextFunction } from 'express';
import HttpError from '../errors/HttpError';

function errorMiddleware(
  error: HttpError,
  _request: Request,
  response: Response,
  // next must be defined, or the response.status does not work
  // eslint-disable-next-line no-unused-vars
  next: NextFunction
) {
  const status = error.status || 500;
  const message = error.message || 'Undefined error occurred.';
  response.status(status).send({
    status,
    message,
  });
}

export default errorMiddleware;
