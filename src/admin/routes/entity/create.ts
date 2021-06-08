import { fragment, h1 } from '@mojule/dom'
import { SpaResponse } from '@mojule/spa-router'
import { camelCase, startCase, kebabCase } from '@mojule/util'

import { 
  EntityCategories, EntityDb, EntitySchemaMap, SchemaMap, schemaResolver 
} from '@mojule/entity-app'

import { ClientRoute } from '../types'
import { defaultHeaderContent } from '../../templates/header-content'

import { createSchemaForm } from '../../../forms/schema-form'
import { entityNavigation } from '../../templates/entity-navigation'
import { headerEls } from '../../templates/targeted-els'
import { headerTitleStyle } from '../../../css/header-title'
import { entityFormStyle } from '../../../css/entity-form'
import { error } from '../../../templates/error'
import { getData } from '../../../forms/get-data'
import { OnCreateSubmit } from '../../types'

export const createEntityCreateRoute = <TEntityMap>(
  db: EntityDb<TEntityMap>,
  entityCategories: EntityCategories<TEntityMap>,
  entityCreateSchemas: EntitySchemaMap<TEntityMap>,
  commonSchemas: SchemaMap = {},
  headerContent = defaultHeaderContent,
  onCreateSubmit = createDefaultOnCreateSubmit<TEntityMap>( db )
) => {
  const route: ClientRoute = {
    method: 'get',
    path: `/create/:entityCategory/:entityType`,
    handlers: [
      async ( req, res ) => {
        if ( typeof req.params.entityType !== 'string' )
          throw Error( 'Expected "entityType" parameter to be string' )

        if ( typeof req.params.entityCategory !== 'string' )
          throw Error( 'Expected "entityCategory" parameter to be string' )

        const entityTypeSlug = req.params.entityType
        const categorySlug = req.params.entityCategory

        const entityKey = camelCase( entityTypeSlug ) as keyof TEntityMap & string
        const entityCategory = camelCase( categorySlug )

        const schema = await schemaResolver<TEntityMap>(
          db, entityKey, entityCreateSchemas, commonSchemas
        )

        const title = schema[ 'title' ] || startCase( entityKey as string )

        const entityForm = createSchemaForm( schema, title )

        entityForm.addEventListener( 'submit', async e => {
          e.preventDefault()

          await onCreateSubmit( entityForm, entityKey, categorySlug, res )
        } )

        const header: HTMLElement[] = [
          entityNavigation(
            entityCategories, headerContent, entityCreateSchemas, entityCategory
          ),
          h1( { class: 'header-title' }, `Create ${ title }` )
        ]

        const content = fragment(
          headerTitleStyle,
          entityFormStyle,
          headerEls( ...header ),
          entityForm
        )

        res.send( content )
      }
    ]
  }

  return route
}

export const createDefaultOnCreateSubmit = <TEntityMap>(
  db: EntityDb<TEntityMap>
): OnCreateSubmit<TEntityMap> => {
  const onCreateSubmit = async (
    form: HTMLFormElement, entityKey: keyof TEntityMap & string,
    categorySlug: string, res: SpaResponse<DocumentFragment>
  ) => {
    const data = getData( form )
    const collection = db.collections[ entityKey ]
    const entityTypeSlug = kebabCase( entityKey )

    try {
      await collection.create( data )
    } catch ( err ) {
      res.send( error( err ) )
      return
    }


    res.redirect( `/list/${ categorySlug }/${ entityTypeSlug }` )
  }

  return onCreateSubmit
}
