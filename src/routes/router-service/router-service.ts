import { Router } from 'express';

export class RouterService {
  public router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public get(params: string, fn: Function) {
    this.router.get(params, this._tryCatch(fn));
  }

  public post(params: string, fn: Function) {
    this.router.post(params, this._tryCatch(fn));
  }

  public put(params: string, fn: Function) {
    this.router.put(params, this._tryCatch(fn));
  }

  public delete(params: string, fn: Function) {
    this.router.delete(params, this._tryCatch(fn));
  }

  public use(...args: any) {
    this.router.use(...args);
  }

  public authenticate(route: string, authCallback: any) {
    this.router.route(route).post(authCallback);
  }

  private _tryCatch(fn: Function) {
    return async (...args: any) => {
      fn(...args).catch(args[2]);
    };
  }

  get routes() {
    return this.router;
  }
}
