"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decorateFormIcons = void 0;
const dom_1 = require("@mojule/dom");
const decorateFormIcons = (form) => {
    const buttons = Array.from(form.querySelectorAll('button[data-action]'));
    buttons.forEach(button => {
        const { action, iconLabel } = button.dataset;
        if (!action)
            return;
        if (iconLabel !== undefined)
            return;
        if (action.includes('delete')) {
            button.dataset.iconLabel = 'remove';
        }
        if (action.includes('add') || action.includes('create')) {
            button.dataset.iconLabel = 'create';
        }
        const { innerText } = button;
        button.innerText = '';
        button.appendChild(dom_1.span(innerText));
    });
};
exports.decorateFormIcons = decorateFormIcons;
//# sourceMappingURL=decorate-form-icons.js.map