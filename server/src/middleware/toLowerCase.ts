import * as express from 'express';

export default function toLowerCase(
  request: express.Request,
  response: express.Response,
  next
) {
  request.params.name.toLowerCase();
  next();
}
