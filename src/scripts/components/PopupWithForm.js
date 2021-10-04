import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popupElement.querySelector('.popup__form');
  };

  _getInputValues() {
    const inputs = [...this._form.querySelectorAll('.field-inputs')];
    const inputValues = {};

    inputs.forEach((input) => {
      inputValues[input.name] = input.name;
      inputValues[input.description] = input.description;
      inputValues[input.link] = input.link;
    });

    return inputValues;
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => this._submitHandler);
  };

  close() {
    super.close();
    this._form.reset();
  };
};


