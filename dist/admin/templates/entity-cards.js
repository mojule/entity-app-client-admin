"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entityCard = exports.createActionLi = exports.entityCards = void 0;
const cards_1 = require("./cards");
const dom_1 = require("@mojule/dom");
const entityCards = (model) => {
    const { title, createEntityPath, entityCardModels } = model;
    const addEntityCard = dom_1.li(dom_1.a({
        href: createEntityPath,
        'data-icon-label': 'create',
        class: 'icon-card'
    }, dom_1.span(`New ${title}`)));
    const children = [
        addEntityCard,
        ...entityCardModels.map(exports.entityCard)
    ];
    const entityCards = dom_1.div({ class: 'entity-cards' }, cards_1.cards(...children), entityCardsStyle);
    return entityCards;
};
exports.entityCards = entityCards;
const createActionLi = (path, icon, title) => {
    if (path.trim() === '')
        return '';
    return dom_1.li(dom_1.a({
        href: path,
        'data-icon': icon
    }, title));
};
exports.createActionLi = createActionLi;
const entityCard = (model) => {
    const { id, entityView, editPath, removePath, viewPath } = model;
    const card = dom_1.li(dom_1.div({ class: 'entity card', 'data-id': id }, entityView, dom_1.input({
        type: 'checkbox',
        name: `is-selected-${id}`,
        id: `is-selected-${id}`
    }), dom_1.label({
        for: `is-selected-${id}`
    })), dom_1.nav({ class: 'actions' }, dom_1.ul(exports.createActionLi(viewPath, 'view', 'View'), exports.createActionLi(editPath, 'edit', 'Edit'), exports.createActionLi(removePath, 'remove', 'Remove'))));
    return card;
};
exports.entityCard = entityCard;
const entityCardsStyle = dom_1.css `
  .entity-cards .entity label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
  }

  .entity-cards .entity input[type="checkbox"] {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 2;
  }

  .entity-cards .entity:hover label {
    background: rgba( 51, 153, 255, 0.0625 );
  }

  .entity-cards .entity :checked ~ label {
    background: rgba( 51, 153, 255, 0.125 );
  }

  .entity-cards .actions {
    border-top: 1px solid #ddd;
  }
`;
//# sourceMappingURL=entity-cards.js.map