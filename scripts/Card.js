import { toggleModal, imageModal, imagePopup, captionPopup } from './utils.js';

class Card {
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

  getCardElement = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);

    const cardImage = this._cardElement.querySelector('.card__image');
    const removeButton = this._cardElement.querySelector('.card__remove');
    const likeButton = this._cardElement.querySelector('.card__like');


    title.textContent = this._name;
    image.src = this._link;
    image.alt = this._name;

    likeButton.addEventListener('click', this._handleLikeButton);
    removeButton.addEventListener('click', this._handleRemoveCard);
    cardImage.addEventListener('click', this._handlePreviewPicture);


    return this._cardElement;

  }

};

/*
const this._cardElement = templateCardItem.cloneNode(true);

  const title = this._cardElement.querySelector('.card__location');
  const image = this._cardElement.querySelector('.card__image');
  const removeButton = this._cardElement.querySelector('.card__remove');
  const likeButton = this._cardElement.querySelector('.card__like');

  title.textContent = cardData.name;
  image.src = cardData.link;
  image.alt = cardData.name;

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('button_filled');
    likeButton.classList.toggle('button_empty');
  });

  removeButton.addEventListener('click', () => {
    this._cardElement.remove();
  });

  image.addEventListener('click', () => {
    toggleModal(imageModal);
    imagePopup.src = cardData.link;
    imagePopup.alt = cardData.name;
    captionPopup.textContent = cardData.name;
  });

  return this._cardElement;
*/
