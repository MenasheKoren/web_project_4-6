export default class Section {
  constructor({data, renderer}, containerSelector) {
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderer(_items) {
    this._renderedItems.forEach((item) => {this.renderer(item)});

    const cardElement = card.createCardElement();

    this.addItem(cardElement);
  };

  addItem(element) {
    this._container.append(element);
  };
};
