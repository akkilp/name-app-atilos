import { Response } from 'express';

function successfullResponse(
  status: number = 200,
  message: string,
  response: Response,
  data: any
) {
  response.status(status).send({
    status,
    message,
    data,
  });
}

export default successfullResponse;
