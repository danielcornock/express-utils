import { IRes } from '../controllers';
import { ModelInstance } from './model-instance';
import { ISuccessCreateResponseConfig } from './interfaces/response-factory-config.interface';
import { IDBEntry } from '../database';

export class ResponseFactory {
  static successCreate<T extends IDBEntry>(res: IRes, config: ISuccessCreateResponseConfig<T>): void {
    res.status(201);
    const modelInstance: ModelInstance<T> = ModelInstance.create({ data: config.data, name: config.name, selfLink: config.selfLinkOverride });
    res.json(modelInstance);
  }
}
