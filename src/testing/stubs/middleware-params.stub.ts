export class ResStub {
  send: jest.Mock = jest.fn();
  status: jest.Mock = jest.fn().mockReturnValue({ json: jest.fn() });
  json: jest.Mock = jest.fn();
}

export class ReqStub {
  body: any = {};
  user: any = {};
  params: any = {};
}
