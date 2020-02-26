import { IDocumentNames } from '../controllers/interfaces/document-names.interface';
import { IModelData, IModelMeta } from './interfaces/model-response.interface';
import { LinkBuilder } from '../controllers/link-builder';
import { IDBEntry } from '../database/interfaces/db-entry.interface';

export class ModelInstance<T extends IDBEntry> {
  public data: IModelData<T> = {};
  public meta: IModelMeta;

  static create<D extends IDBEntry>(dataObject: D, names: IDocumentNames, selfLinkOverride?: string) {
    return new ModelInstance<D>(dataObject, names, selfLinkOverride);
  }

  constructor(dataObject: T, names: IDocumentNames, selfLinkOverride: string | undefined) {
    this.data[names.singular] = dataObject;
    this.meta = {
      links: {
        self: selfLinkOverride ? selfLinkOverride : LinkBuilder.self(names.plural, dataObject.id)
      }
    };
  }
}
