import { Router } from 'express';

export abstract class BaseRoutes<T> {
  protected router: Router;
  protected controller: T | undefined;

  constructor(router: Router, controller?: T) {
    this.router = router;
    this.controller = controller;
  }

  public get routes(): Router {
    return this.router;
  }
}
