import { Router } from 'express';
import { RouterService } from './router-service/router-service';

export abstract class BaseRoutes<T> {
  protected router: RouterService;
  protected controller: T;

  constructor(router: RouterService, controller: T) {
    this.router = router;
    this.controller = controller;
  }

  public get routes(): Router {
    return this.router.routes;
  }
}
