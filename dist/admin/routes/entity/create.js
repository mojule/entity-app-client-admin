"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultOnCreateSubmit = exports.createEntityCreateRoute = void 0;
const dom_1 = require("@mojule/dom");
const util_1 = require("@mojule/util");
const entity_app_1 = require("@mojule/entity-app");
const header_content_1 = require("../../templates/header-content");
const schema_form_1 = require("../../../forms/schema-form");
const entity_navigation_1 = require("../../templates/entity-navigation");
const targeted_els_1 = require("../../templates/targeted-els");
const header_title_1 = require("../../../css/header-title");
const entity_form_1 = require("../../../css/entity-form");
const error_1 = require("../../../templates/error");
const get_data_1 = require("../../../forms/get-data");
const createEntityCreateRoute = (db, entityCategories, entityCreateSchemas, commonSchemas = {}, headerContent = header_content_1.defaultHeaderContent, onCreateSubmit = exports.createDefaultOnCreateSubmit(db)) => {
    const route = {
        method: 'get',
        path: `/create/:entityCategory/:entityType`,
        handlers: [
            async (req, res) => {
                if (typeof req.params.entityType !== 'string')
                    throw Error('Expected "entityType" parameter to be string');
                if (typeof req.params.entityCategory !== 'string')
                    throw Error('Expected "entityCategory" parameter to be string');
                const entityTypeSlug = req.params.entityType;
                const categorySlug = req.params.entityCategory;
                const entityKey = util_1.camelCase(entityTypeSlug);
                const entityCategory = util_1.camelCase(categorySlug);
                const schema = await entity_app_1.schemaResolver(db, entityKey, entityCreateSchemas, commonSchemas);
                const title = schema['title'] || util_1.startCase(entityKey);
                const entityForm = schema_form_1.createSchemaForm(schema, title);
                entityForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    await onCreateSubmit(entityForm, entityKey, categorySlug, res);
                });
                const header = [
                    entity_navigation_1.entityNavigation(entityCategories, headerContent, entityCreateSchemas, entityCategory),
                    dom_1.h1({ class: 'header-title' }, `Create ${title}`)
                ];
                const content = dom_1.fragment(header_title_1.headerTitleStyle, entity_form_1.entityFormStyle, targeted_els_1.headerEls(...header), entityForm);
                res.send(content);
            }
        ]
    };
    return route;
};
exports.createEntityCreateRoute = createEntityCreateRoute;
const createDefaultOnCreateSubmit = (db) => {
    const onCreateSubmit = async (form, entityKey, categorySlug, res) => {
        const data = get_data_1.getData(form);
        const collection = db.collections[entityKey];
        const entityTypeSlug = util_1.kebabCase(entityKey);
        try {
            await collection.create(data);
        }
        catch (err) {
            res.send(error_1.error(err));
            return;
        }
        res.redirect(`/list/${categorySlug}/${entityTypeSlug}`);
    };
    return onCreateSubmit;
};
exports.createDefaultOnCreateSubmit = createDefaultOnCreateSubmit;
//# sourceMappingURL=create.js.map