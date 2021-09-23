class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
  }

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
    input.validity.valid ? this._hideError(input) : this._showError(input);
  };


  _setEventListeners = () => {
    const { inputSelector } = this._settings
    this.inputs = [...this._formElement.querySelectorAll(inputSelector)];

    this.inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkValidity(input);
        this._toggleButtonState(inputs);
      });
    });

  };

  _toggleButtonState() {

    const { submitButtonSelector } = this._settings
    const button = this._formElement.querySelector(submitButtonSelector);
    const isFormValid = this.inputs.every(input => input.validity.valid);
    isFormValid ? button.disabled = false : button.disabled = true;
  }

  resetValidation() {
    this.inputs.forEach(input => {
      this._hideError(input)
    });
  };

  enableValidation() {

    this._formElement.addEventListener('submit', (evt) => evt.preventDefault());

    this._setEventListeners(formElement, rest)
  };
};

export default FormValidator

/*
const settings = {
  inputSelector: ".field-input",
  submitButtonSelector: ".popup__save"
};

const editForm = document.querySelector('.popup__form');
const addCardForm = document.querySelector('.popup__form');

const editFormValidator = new FormValidator(setting, editForm);
const addCardFormValidator = new FormValidator(setting, addCardForm);
*/
