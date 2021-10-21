import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  setAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler(this._getInputValues());
      // this.close();
    });
  }
}
