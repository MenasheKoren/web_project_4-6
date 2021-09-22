export class Card {
  constructor(data, template) {
    this._title = data.title;
    this._link = data.link;
    this._template = template;
  }

  _getTemplate() {
    const cardItem = document
      .querySelector('.card-template').content
      .querySelector('.card')
      .cloneNode(true);

    return cardItem;
  }




}
