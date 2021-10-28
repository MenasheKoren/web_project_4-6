export class Card {
  constructor(
    data,
    templateCardSelector,
    handleCardClick,
    handleLikeButton,
    handleRemoveCard,
    userId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;

    this._templateCardSelector = templateCardSelector;
    this._handleCardClick = handleCardClick;
    this._handleRemoveCard = handleRemoveCard;
    this._handleLikeButton = handleLikeButton;
    this._id = data._id;

    this._userId = userId;
    this._ownerId = data.owner._id;

    this._cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".card");
  }

  isLiked() {
    return this._likes.some((person) => person._id === this._userId);
  }

  likeCard(newLikes) {
    this._likes = newLikes;
    this._cardElement.querySelector(".card__likes-count").textContent =
      this._likes.length;

    this._cardElement
      .querySelector(".card__like")
      .classList.toggle("button_filled");
    this._cardElement
      .querySelector(".card__like")
      .classList.toggle("button_empty");
  }

  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._removeButton = this._cardElement.querySelector(".card__remove");
    this._likeButton = this._cardElement.querySelector(".card__like");

    this._likeButton.addEventListener("click", () =>
      this._handleLikeButton(this._id)
    );
    this._removeButton.addEventListener("click", () =>
      this._handleRemoveCard(this._id)
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

    this._cardElement.querySelector(".card__likes-count").textContent =
      this._likes.length;

    if (this.isLiked()) {
      this.likeCard(this._likes);
    }

    this._setEventListeners();

    return this._cardElement;
  };
}
