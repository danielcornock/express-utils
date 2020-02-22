export class ExpressRouterStub {
  public get: jest.Mock = jest.fn();
  public use: jest.Mock = jest.fn();
  public put: jest.Mock = jest.fn();
  public delete: jest.Mock = jest.fn();
  public post: jest.Mock = jest.fn();
}
