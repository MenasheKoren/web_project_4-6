function checkIfFormChanged(inputSelector, addCardForm) {
  let changed = false;
  addCardForm.querySelectorAll(inputSelector).forEach(
    evt => evt.onchange = () => changed = true);
  console.log(changed);
};


function showError(input) {
  const error = input.validationMessage;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = error;
};

function hideError(input) {
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
};


function checkValidity(input) {
  !input.validity.valid ? showError(input) : hideError(input);
};

function toggleButtonState(inputs, button) {

  const isFormValid = inputs.every(input => input.validity.valid);
  !isFormValid ? button.disabled = true : button.disabled = false;
}

function enableValidation(settings) {
  const {formSelector, inputSelector, submitButtonSelector} = settings;
  const forms = [...document.querySelectorAll(formSelector)];

  forms.forEach(form => {
    form.addEventListener('submit', (evt) => evt.preventDefault());

    const inputs = [...form.querySelectorAll(inputSelector)];
    const button = form.querySelector(submitButtonSelector);

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        checkValidity(input);
        toggleButtonState(inputs, button);
        checkIfFormChanged(inputSelector, addCardForm);
      });
    });
  });
};

const config = {
  formSelector: ".popup__form",
  inputSelector: ".field-input",
  submitButtonSelector: ".popup__save"
};

enableValidation(config);
