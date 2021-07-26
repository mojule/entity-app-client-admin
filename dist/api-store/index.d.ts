import { EntityKeys, EntityDb } from '@mojule/entity-app';
export declare const createApiStore: <TEntityMap>(_name: string, keys: EntityKeys<TEntityMap>) => Promise<EntityDb<TEntityMap, import("@mojule/entity-app").DbItem>>;
