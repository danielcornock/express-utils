import { Router } from 'express';

export class RouterService {
  public router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public get(params: string, fn: Function) {
    this.router.get(params, this._tryCatch(fn));
  }

  private _tryCatch(fn: Function) {
    return (...args: any) => {
      fn(...args).catch(args[2]);
    };
  }

  get routes() {
    return this.router;
  }
}
