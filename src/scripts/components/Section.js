export class Section {
  constructor({ renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  renderer(data) {
    if (data.length) {
      data.forEach((item) => {
        this._renderer(item);
      });
    }
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
