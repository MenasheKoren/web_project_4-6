import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open(link, name) {
    const imageElement = this._popupElement.querySelector(".popup__image");
    const captionElement = this._popupElement.querySelector(".popup__caption");

    imageElement.src = link;
    imageElement.alt = name;
    captionElement.textContent = name;

    super.open();
    super.setEventListeners();
  }
}
