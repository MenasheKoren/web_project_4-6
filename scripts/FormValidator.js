class FormValidator {
  constructor(settings, formElement) {
    this.settings = settings;
    this.formElement = formElement;
  }

  _showError(input) {
    const error = input.validationMessage;
    const errorElement = this.formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;
  };

  _hideError(input) {
    const errorElement = this.formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
  };


  _checkValidity(input) {
    input.validity.valid ? this.hideError(input) : this.showError(input);
  };


  _setEventListeners = () => {
    const { inputSelector, submitButtonSelector } = this.settings
    const inputs = [...this.formElement.querySelectorAll(inputSelector)];

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        this.checkValidity(input);
        this.toggleButtonState(inputs);
      });
    });

  };

  _toggleButtonState(inputs) {

    const button = this.formElement.querySelector(submitButtonSelector);
    const isFormValid = inputs.every(input => input.validity.valid);
    isFormValid ? button.disabled = false : button.disabled = true;
  }


  enableValidation() {

    this.formElement.addEventListener('submit', (evt) => evt.preventDefault());

    this.setEventListeners(formElement, rest)
    // console.log(this.settings)
    // this.formElement
  };
};

const settings = {
  inputSelector: ".field-input",
  submitButtonSelector: ".popup__save"
};

const editForm = document.querySelector('.popup__form');
const addCardForm = document.querySelector('.popup__form');

const editFormValidator = new FormValidator(setting, editForm);
const addCardFormValidator = new FormValidator(setting, addCardForm);

