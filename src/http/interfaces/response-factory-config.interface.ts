import { IModelData } from './model-response.interface';

export interface ISuccessCreateResponseConfig<T> {
  data: IModelData<T>;
  name: string;
  selfLinkOverride?: string;
}
