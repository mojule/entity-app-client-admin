import { DbItem, EntityCategories, EntityDb, EntitySchemaMap } from '@mojule/entity-app';
import { EntityTemplates } from '../../types';
import { ClientRoute } from '../types';
export declare type EntityPredicate<TEntityMap, TKey extends keyof TEntityMap = keyof TEntityMap> = (item: (TEntityMap[TKey] & DbItem), entityKey: TKey) => boolean;
export declare const createEntityListRoute: <TModelMap, TEntityMap, TTemplateMap extends TEntityMap>(db: EntityDb<TEntityMap, DbItem>, entityCategories: EntityCategories<TEntityMap>, entitySchema: import("@mojule/util").KeyValueMap<TEntityMap, import("@mojule/entity-app").IdSchema>, templates: EntityTemplates<TTemplateMap>, createEntityHeader: (...args: any[]) => HTMLElement[], headerContent?: HTMLHeadingElement, filter?: EntityPredicate<TEntityMap, keyof TEntityMap>) => ClientRoute<any>;
