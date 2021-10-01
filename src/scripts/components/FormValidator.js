export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  };

  _showError(input) {
    const error = input.validationMessage;
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;
  };

  _hideError(input) {
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
  };


  _checkValidity(input) {
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    };
  };


  _setEventListeners = () => {
    const { inputSelector } = this._settings
    this.inputs = [...this._formElement.querySelectorAll(inputSelector)];

    this.inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkValidity(input);
        this._toggleButtonState(this.inputs);
      });
    });

  };

  _toggleButtonState() {

    const { submitButtonSelector } = this._settings
    const button = this._formElement.querySelector(submitButtonSelector);
    const isFormValid = this.inputs.every(input => input.validity.valid);
    button.disabled = !isFormValid;
  };

  resetValidation() {
    this.inputs.forEach(input => {
      this._hideError(input)
    });
  };

  enableValidation() {

    this._formElement.addEventListener('submit', (evt) => evt.preventDefault()); /* ? */

    this._setEventListeners();
  };
};



