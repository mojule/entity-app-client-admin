import { DbCollection } from '@mojule/entity-app';
export declare const createCollection: <TEntityMap, K extends keyof TEntityMap>(key: K) => DbCollection<TEntityMap[K]>;
