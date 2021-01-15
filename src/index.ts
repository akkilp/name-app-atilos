import * as express from 'express';
import * as bodyParser from 'body-parser';
import Logger from './logger/logger';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());

function loggerMiddleware(
  request: express.Request,
  response: express.Response,
  next
) {
  Logger.request(request);
  next();
}

app.use(loggerMiddleware);

app.get('/', (request: express.Request, response: express.Response) => {
  response.send('Connected');
});

app.get('/hello', (request: express.Request, response: express.Response) => {
  response.send('Hello world!');
});

app.listen(PORT, () => {
  Logger.info(`Server connected to port ${PORT}`);
});
