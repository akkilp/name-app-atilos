import HttpError from './HttpError';

class ConnectionProblem extends HttpError {
  constructor() {
    super(503, `Could not reach the database`);
  }
}

export default ConnectionProblem;
