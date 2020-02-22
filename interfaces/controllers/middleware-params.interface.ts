import { Request, Response, NextFunction } from 'express';
import { IBaseUser } from './base-user.interface';

export interface IReq<T extends IBaseUser = IBaseUser> extends Request {
  user: T;
}

export interface IRes extends Response {}

export interface INext extends NextFunction {}
