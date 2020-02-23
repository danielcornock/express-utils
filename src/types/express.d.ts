import { IBaseUser } from '../interfaces';

declare module 'express-serve-static-core' {
  interface Request {
    user: IBaseUser;
  }
}
