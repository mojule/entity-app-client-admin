"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCreateEntityHeader = exports.secondaryEntityNavigation = exports.primaryEntityNavigation = exports.entityNavigation = void 0;
const dom_1 = require("@mojule/dom");
const util_1 = require("@mojule/util");
const nav_1 = require("../../templates/nav");
const targeted_els_1 = require("./targeted-els");
const header_content_1 = require("./header-content");
const entityNavigation = (entityCategories, headerContent = header_content_1.defaultHeaderContent, entitySchema, entityCategory) => {
    const nodes = [];
    nodes.push(exports.primaryEntityNavigation(headerContent, entityCategories));
    if (entitySchema && entityCategory) {
        const entityCategorySlug = util_1.kebabCase(entityCategory);
        nodes.push(exports.secondaryEntityNavigation(entitySchema, entityCategorySlug, entityCategories[entityCategory].keys));
    }
    return dom_1.div(targeted_els_1.headerEls(...nodes));
};
exports.entityNavigation = entityNavigation;
const primaryEntityNavigation = (headerContent, entityCategories) => dom_1.div({
    class: 'navigation--primary'
}, dom_1.css `
      .navigation--primary {
        font-size: 1.4rem;
        border-bottom: 1px dotted #ddd;
      }

      .navigation--primary a {
        text-decoration: none;
      }

      .navigation--primary h1 {
        display: inline;
      }
    `, nav_1.linksNav({
    content: headerContent,
    uri: './'
}, {
    content: dom_1.span({ 'data-icon': 'hierarchySeparator' }, '>')
}, ...Object.keys(entityCategories).map(key => {
    const category = entityCategories[key];
    const { title } = category;
    const slug = util_1.kebabCase(key);
    return { content: title, uri: `#/${slug}` };
})));
exports.primaryEntityNavigation = primaryEntityNavigation;
const secondaryEntityNavigation = (entitySchema, entityCategorySlug, keys) => {
    const links = [];
    keys.forEach(key => {
        const schema = entitySchema[key];
        const title = schema['title'] || util_1.startCase(key);
        const typeSlug = util_1.kebabCase(key);
        links.push({
            content: title,
            uri: `#/list/${entityCategorySlug}/${typeSlug}`
        });
    });
    const nav = dom_1.div({
        class: 'navigation--secondary'
    }, dom_1.css `
      .navigation--secondary {
        font-size: 1.3rem;
      }

      .navigation--secondary a {
        text-decoration: none;
      }
    `, nav_1.linksNav(...links));
    return nav;
};
exports.secondaryEntityNavigation = secondaryEntityNavigation;
const defaultCreateEntityHeader = (entityCategories, headerContent = header_content_1.defaultHeaderContent, title, entitySchema, entityCategory) => [
    exports.entityNavigation(entityCategories, headerContent, entitySchema, entityCategory),
    dom_1.h1({ class: 'header-title' }, title, ' entities')
];
exports.defaultCreateEntityHeader = defaultCreateEntityHeader;
//# sourceMappingURL=entity-navigation.js.map