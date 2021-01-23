import HttpError from './HttpError';

class AlreadyExists extends HttpError {
  constructor(name) {
    super(409, `Name "${name}" already exists`);
  }
}

export default AlreadyExists;
