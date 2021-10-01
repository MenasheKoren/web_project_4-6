import Card from './Card.js';

export default class Section {
  constructor({ data }, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
  }

  renderer() {
    this._renderedItems.forEach((item) => {
      const card = item

      const cardElement = card.createCardElement();

      this.addItem(cardElement)
    });
  }

  addItem(element) {
    this._container.append(element)
  }
}
