import { Router } from 'express';
import { RouterService } from './router-service';

export class RouterServiceFactory {
  static create(): RouterService {
    const coreRouter: Router = Router({ mergeParams: true });

    return new RouterService(coreRouter);
  }
}
