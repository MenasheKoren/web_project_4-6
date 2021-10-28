import { Popup } from "./Popup.js";
export class PopupWithAvatar extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popupElement.querySelector(".popup__form");
  }

  _getInputValue() {
    const input = this._form.querySelector(".field-input");
    const inputValue = input.value;
    return inputValue;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler(this._getInputValue());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
