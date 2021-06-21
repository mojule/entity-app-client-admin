import { IdSchema } from '@mojule/entity-app';
import { JSONSchema7 } from 'json-schema';
export declare const createFormEls: (schema: JSONSchema7, name?: string | undefined, value?: any) => HTMLElement;
export declare const createSchemaForm: (schema: IdSchema, title: string, value?: any) => HTMLFormElement;
