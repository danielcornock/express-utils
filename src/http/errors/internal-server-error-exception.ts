import { HttpException } from './http-exception';

export class InternalServerErrorException extends HttpException {
  constructor() {
    super('Internal server error', 500, 'Internal server error');
  }
}
