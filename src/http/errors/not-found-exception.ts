import { HttpException } from './http-exception';

export class NotFoundException extends HttpException {
  constructor(message: string) {
    const userMessage: string = message ? message : 'Item cannot be found.';
    super(userMessage, 404, 'Not Found');
  }
}
