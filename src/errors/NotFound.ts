import HttpError from './HttpError';

class NotFound extends HttpError {
  constructor(name) {
    super(404, `'${name}' does not exist in database`);
  }
}

export default NotFound;
