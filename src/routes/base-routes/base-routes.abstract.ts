import { Router } from 'express';

export abstract class BaseRoutes {
  protected router: Router;

  constructor() {
    this.router = Router({ mergeParams: true });
  }

  public get routes(): Router {
    return this.router;
  }
}
