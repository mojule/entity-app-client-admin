import { button, form } from '@mojule/dom'
import { IdSchema } from '@mojule/entity-app'
import { ClientFormTemplates, SchemaToFormElements } from '@mojule/schema-forms'
import { startCase } from '@mojule/util'

import { dedupeFieldsets } from './dedupe-fieldsets'
import { decorateFormIcons } from './decorate-form-icons'
import { JSONSchema7 } from 'json-schema'

const templates = ClientFormTemplates( document, Event )

export const createFormEls = SchemaToFormElements( templates )

export const createSchemaForm = (
  schema: IdSchema,
  title: string,
  value?: any
) => {
  const action = value === undefined ? 'create' : 'update'

  const formEls = createFormEls( schema as JSONSchema7, undefined, value )

  const submit = button(
    { 'data-action': action },
    `${ startCase( action ) } ${ title }`
  )

  const entityForm = form(
    { class: 'entity-form' },
    formEls,
    submit
  )

  dedupeFieldsets( entityForm )
  decorateFormIcons( entityForm )

  entityForm.addEventListener( 'input', () => {
    decorateFormIcons( entityForm )
  } )

  return entityForm
}
