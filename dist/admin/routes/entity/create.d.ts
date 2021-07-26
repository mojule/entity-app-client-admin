import { EntityCategories, EntityDb, EntitySchemaMap, SchemaMap } from '@mojule/entity-app';
import { ClientRoute } from '../types';
import { OnCreateSubmit } from '../../types';
export declare const createEntityCreateRoute: <TEntityMap>(db: EntityDb<TEntityMap, import("@mojule/entity-app").DbItem>, entityCategories: EntityCategories<TEntityMap>, entityCreateSchemas: import("@mojule/util").KeyValueMap<TEntityMap, import("@mojule/entity-app").IdSchema>, commonSchemas?: SchemaMap, headerContent?: HTMLHeadingElement, onCreateSubmit?: OnCreateSubmit<TEntityMap>) => ClientRoute<any>;
export declare const createDefaultOnCreateSubmit: <TEntityMap>(db: EntityDb<TEntityMap, import("@mojule/entity-app").DbItem>) => OnCreateSubmit<TEntityMap>;
