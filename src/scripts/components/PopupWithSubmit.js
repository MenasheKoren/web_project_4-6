import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  setAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler();
    });

    super.setEventListeners();
  }
}
