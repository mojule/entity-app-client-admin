import { ClientRoute } from './types';
import { EntityCategories, EntitySchemaMap } from '@mojule/entity-app';
export declare const createRootRoute: <TEntityMap, TEntityCategories extends EntityCategories<TEntityMap>>(entityCategories: TEntityCategories) => ClientRoute<any>;
export declare const createSecondaryRoute: <TEntityMap, TEntityCategories extends EntityCategories<TEntityMap>>(entityCategories: TEntityCategories, entitySchema: import("@mojule/util").KeyValueMap<TEntityMap, import("@mojule/entity-app").IdSchema>, headerContent?: HTMLHeadingElement) => ClientRoute<any>;
