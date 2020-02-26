export interface IModelResponse<T> {
  data: IModelData<T>;
  meta: IModelMeta;
}

export interface IModelData<T> {
  [key: string]: T;
}

export interface IModelMeta {
  links: IModelLinks;
}

export interface IModelLinks {
  self: string;
  [key: string]: string;
}

export type IModelPromise<T> = Promise<IModelResponse<T>>;
