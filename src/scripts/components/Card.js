export class Card {
  constructor(
    { name, link },
    templateCardSelector,
    handleCardClick,
    handleRemoveCard
  ) {
    this._name = name;
    this._link = link;
    this._templateCardSelector = templateCardSelector;
    this._handleCardClick = handleCardClick;
    this._handleRemoveCard = handleRemoveCard;

    this._cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".card");
  }

  _handleLikeButton = () => {
    this._likeButton.classList.toggle("button_filled");
    this._likeButton.classList.toggle("button_empty");
  };

  // _handleRemoveCard = () => this._cardElement.remove(null);

  _setEventListeners() {
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._removeButton = this._cardElement.querySelector(".card__remove");
    this._likeButton = this._cardElement.querySelector(".card__like");

    this._likeButton.addEventListener("click", this._handleLikeButton);
    this._removeButton.addEventListener("click", this._handleRemoveCard);
    this._cardImage.addEventListener("click", this._handleCardClick);
  }

  createCardElement = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardTitle = this._cardElement.querySelector(".card__location");

    this._cardImage = this._cardElement.querySelector(".card__image");

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();

    return this._cardElement;
  };
}
