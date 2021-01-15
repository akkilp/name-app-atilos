import * as express from 'express';
import Controller from '../controller/controller.types';
import Name from './name.types';

class NameController implements Controller {
  public path = '/names';

  public router = express.Router();

  private names: Name[] = [
    {
      name: 'Jukka',
      amount: 2,
    },
  ];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.getAllNames);
  }

  getAllNames = (_request: express.Request, response: express.Response) => {
    response.send(this.names);
  };
}

export default NameController;
