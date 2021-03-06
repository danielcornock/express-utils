import { IModelData, IModelMeta } from './interfaces';
import { LinkBuilder } from '../controllers';
import { IDBEntry } from '../database/interfaces';
import { IModelInstanceConfig } from './interfaces';

export class ModelInstance<T extends IDBEntry> {
  public data: IModelData<T> = {};
  public meta: IModelMeta;

  static create<D extends IDBEntry>(config: IModelInstanceConfig<D>) {
    return new ModelInstance<D>(config);
  }

  constructor(config: IModelInstanceConfig<T>) {
    const dataObj: T = config.data[Object.keys(config.data)[0]];
    this.data[config.name] = dataObj;
    this.meta = {
      links: {
        self: config.selfLink ? config.selfLink : LinkBuilder.self(config.name, dataObj.id)
      }
    };
  }
}
