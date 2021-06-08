import { 
  eachEntityKeySync, EntityKeys, DbCollections, EntityDb 
} from '@mojule/entity-app'

import { createCollection } from './create-collection'

const initCollections = <TEntityMap>( keys: EntityKeys<TEntityMap> ) => {
  const collections: Partial<DbCollections<TEntityMap>> = {}

  eachEntityKeySync( keys, key => {
    collections[ <keyof TEntityMap>key ] =
      createCollection<TEntityMap, keyof TEntityMap>( key )
  })

  return collections as DbCollections<TEntityMap>
}

export const createApiStore = async <TEntityMap>(
  _name: string, keys: EntityKeys<TEntityMap>
) => {
  const drop = async () => { }

  const close = async () => { }

  const collections = initCollections( keys )

  const db: EntityDb<TEntityMap> = { drop, close, collections }

  return db
}
