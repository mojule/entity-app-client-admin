import { EntityCategories, EntityDb, EntitySchemaMap, FileEntityMap, SchemaMap } from '@mojule/entity-app';
import { OnCreateSubmit } from '../../../types';
export declare const createEntityCreateRouteWithFiles: <TEntityMap extends FileEntityMap>(db: EntityDb<TEntityMap>, entityCategories: EntityCategories<TEntityMap>, entityCreateSchemas: import("@mojule/util").KeyValueMap<TEntityMap, import("@mojule/entity-app").IdSchema>, commonSchemas?: SchemaMap, headerContent?: HTMLHeadingElement, onCreateSubmit?: OnCreateSubmit<TEntityMap>) => import("../../types").ClientRoute<any>;
