"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchemaForm = exports.createFormEls = void 0;
const dom_1 = require("@mojule/dom");
const schema_forms_1 = require("@mojule/schema-forms");
const util_1 = require("@mojule/util");
const dedupe_fieldsets_1 = require("./dedupe-fieldsets");
const decorate_form_icons_1 = require("./decorate-form-icons");
const templates = schema_forms_1.ClientFormTemplates(document, Event);
exports.createFormEls = schema_forms_1.SchemaToFormElements(templates);
const createSchemaForm = (schema, title, value) => {
    const action = value === undefined ? 'create' : 'update';
    const formEls = exports.createFormEls(schema, undefined, value);
    const submit = dom_1.button({ 'data-action': action }, `${util_1.startCase(action)} ${title}`);
    const entityForm = dom_1.form({ class: 'entity-form' }, formEls, submit);
    dedupe_fieldsets_1.dedupeFieldsets(entityForm);
    decorate_form_icons_1.decorateFormIcons(entityForm);
    entityForm.addEventListener('input', () => {
        decorate_form_icons_1.decorateFormIcons(entityForm);
    });
    return entityForm;
};
exports.createSchemaForm = createSchemaForm;
//# sourceMappingURL=schema-form.js.map