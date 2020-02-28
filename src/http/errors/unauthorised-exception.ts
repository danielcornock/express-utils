import { HttpException } from './http-exception';

export class UnauthorisedException extends HttpException {
  constructor(message: string) {
    super(message, 401, 'Unauthorised');
  }
}
