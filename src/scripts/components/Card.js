export class Card {
  constructor(
    data,
    templateCardSelector,
    handleCardClick,
    handleRemoveCard,
    userId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._templateCardSelector = templateCardSelector;
    this._handleCardClick = handleCardClick;
    this._handleRemoveCard = handleRemoveCard;
    this._id = data._id;

    this._userId = userId;
    this._ownerId = data.owner._id;

    this._cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".card");
  }

  _handleLikeButton = () => {
    this._likeButton.classList.toggle("button_filled");
    this._likeButton.classList.toggle("button_empty");
  };

  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._removeButton = this._cardElement.querySelector(".card__remove");
    this._likeButton = this._cardElement.querySelector(".card__like");

    this._likeButton.addEventListener("click", this._handleLikeButton);
    this._removeButton.addEventListener("click", () =>
      this._handleRemoveCard(this._ownerId)
    );
    this._cardImage.addEventListener("click", this._handleCardClick);
  }

  createCardElement = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardTitle = this._cardElement.querySelector(".card__location");

    this._cardImage = this._cardElement.querySelector(".card__image");

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    if (this._ownerId !== this._userId) {
      this._cardElement.querySelector(".card__remove").style.display = "none";
    }

    this._setEventListeners();

    return this._cardElement;
  };
}
