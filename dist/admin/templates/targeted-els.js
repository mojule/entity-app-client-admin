"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.footerEls = exports.headerEls = void 0;
const dom_1 = require("@mojule/dom");
const headerEls = (...els) => dom_1.decorateData({ target: 'header' }, ...els);
exports.headerEls = headerEls;
const footerEls = (...els) => dom_1.decorateData({ target: 'footer' }, ...els);
exports.footerEls = footerEls;
//# sourceMappingURL=targeted-els.js.map