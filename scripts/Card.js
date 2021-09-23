import { toggleModal, imageModal, imagePopup, captionPopup } from './utils.js';

export class Card {
  constructor({ name, link }, templateCardSelector) {
    this._name = name;
    this._title = title;
    this._templateCardSelector = templateCardSelector;

    this._cardTemplate = document.querySelector(templateCardSelector).content.querySelector('.card')

  }

  _handlePreviewPicture = () => {
    toggleModal(imageModal);
    imagePopup.src = this._link;
    imagePopup.alt = this._name;
    captionPopup.textContent = this._name;
  };


  _handleLikeButton = () => {
    likeButton.classList.toggle('button_filled');
    likeButton.classList.toggle('button_empty');
  };


  _handleRemoveCard = () => this._cardElement.remove();


  _addEventListeners() {
    this._cardImage = this._cardElement.querySelector('.card__image');
    this._removeButton = this._cardElement.querySelector('.card__remove');
    this._likeButton = this._cardElement.querySelector('.card__like');

    likeButton.addEventListener('click', this._handleLikeButton);
    removeButton.addEventListener('click', this._handleRemoveCard);
    cardImage.addEventListener('click', this._handlePreviewPicture);

  }

  getCardElement = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);

    title.textContent = this._name;
    image.src = this._link;
    image.alt = this._name;

    this._addEventListeners();

    return this._cardElement;
  }
};


