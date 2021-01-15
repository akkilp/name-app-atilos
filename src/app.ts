import * as express from 'express';
import * as bodyParser from 'body-parser';

import loggerMiddleware from './middleware/loggerMiddleware';
import Logger from './utils/logger';

import Controller from './controller/controller.types';

class App {
  public app: express.Application;

  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(loggerMiddleware);
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller: Controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      Logger.info(`Server connected to port ${this.port}`);
    });
  }
}

export default App;
