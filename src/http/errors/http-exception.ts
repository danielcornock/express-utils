export class HttpException extends Error {
  public message: string;
  public statusCode: number;
  public error: string;
  constructor(message: string, statusCode: number, error?: string) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.error = error ? `${statusCode} ${error}` : `${statusCode} Error`;
  }
}
