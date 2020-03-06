import { HttpException } from './http-exception';

export class UnauthorisedException extends HttpException {
  constructor(message?: string) {
    const userMessage = message ? message : 'You are not authorised to access this resource';
    super(userMessage, 401, 'Unauthorised');
  }
}
