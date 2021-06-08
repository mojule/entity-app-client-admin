"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linksUl = exports.linksNav = exports.link = void 0;
const dom_1 = require("@mojule/dom");
const link = ({ content, uri: href }) => href === undefined ? dom_1.span(content) : dom_1.a({ href }, content);
exports.link = link;
const linksNav = (...model) => dom_1.nav(exports.linksUl(...model));
exports.linksNav = linksNav;
const linksUl = (...model) => dom_1.ul(...model.map(l => dom_1.li(exports.link(l))));
exports.linksUl = linksUl;
//# sourceMappingURL=index.js.map