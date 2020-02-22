export class ExpressAppStub {
  public get: jest.Mock = jest.fn();
  public listen: jest.Mock = jest.fn();
  public use: jest.Mock = jest.fn();
}
