import { IModelData } from './model-response.interface';

export interface IModelInstanceConfig<TData> {
  data: IModelData<TData>;
  name: string;
  selfLink?: string;
}
