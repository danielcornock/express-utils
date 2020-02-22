import { Router } from 'express';

export abstract class BaseRoutes {
  protected router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public get routes(): Router {
    return this.router;
  }
}
