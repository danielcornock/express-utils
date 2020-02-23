import { INext } from '../../interfaces/controllers/middleware-params.interface';

export const nextStub: INext = jest.fn();

export class ResStub {
  send: jest.Mock = jest.fn();
  status: jest.Mock = jest.fn().mockReturnValue({ json: jest.fn() });
}

export class ReqStub {
  body: any = {};
  user: any = {};
}
