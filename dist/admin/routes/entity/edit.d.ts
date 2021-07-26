import { EntityCategories, EntityDb, EntitySchemaMap, SchemaMap } from '@mojule/entity-app';
import { ClientRoute } from '../types';
export declare const createEntityEditRoute: <TEntityMap>(db: EntityDb<TEntityMap, import("@mojule/entity-app").DbItem>, entityCategories: EntityCategories<TEntityMap>, entityEditSchemas: import("@mojule/util").KeyValueMap<TEntityMap, import("@mojule/entity-app").IdSchema>, commonSchemas?: SchemaMap, headerContent?: HTMLHeadingElement) => ClientRoute<any>;
