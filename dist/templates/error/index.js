"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
const dom_1 = require("@mojule/dom");
const error = (model) => dom_1.fragment(dom_1.h1(model.name || 'Error'), dom_1.p(model.message || 'Unknown error'), dom_1.pre(model.stack || ''));
exports.error = error;
//# sourceMappingURL=index.js.map