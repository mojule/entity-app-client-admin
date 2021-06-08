"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageFile = void 0;
const dom_1 = require("@mojule/dom");
const imageFile = (model) => {
    const { meta, name } = model;
    const { size, width, height, path } = meta;
    const node = dom_1.div({ class: 'image-file-entity' }, dom_1.css `
      .image-file-entity {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }

      .image-file-entity h1 {
        font-size: 0.9rem;
        width: 100%;
        margin-bottom: auto;
      }

      .image-file-entity img {
        background: #f0f0f0;
        display: block;
        width: 10rem;
        height: 10rem;
        object-fit: scale-down;
        object-position: 50% 50%;
        margin: 1rem auto;
      }

      .image-file-entity p {
        font-size: 0.8rem;
        margin: 0;
        padding-bottom: 0.25rem;
      }
    `, dom_1.h1({ title: name }, name), dom_1.img({ src: path }), dom_1.p(`${width.toLocaleString()} × ${height.toLocaleString()}`), dom_1.p(`${size.toLocaleString()} bytes`));
    return node;
};
exports.imageFile = imageFile;
//# sourceMappingURL=image-file.js.map