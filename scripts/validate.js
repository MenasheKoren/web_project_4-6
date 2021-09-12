function showError(input) {
  const error = input.validationMessage
  const errorElement = document.querySelector(`#${input.id}-error`)
  errorElement.textContent = error

  //input.classList.add(settings.inputErrorClass)
  //settings.inputSelector.invalid = true
}
function hideError(input) {
  const errorElement = document.querySelector(`#${input.id}-error`)
  errorElement.textContent = ''
  //input.classList.remove(settings.inputErrorClass)
  //settings.inputSelector.invalid = false
}


function checkValidity(input) {
  !input.validity.valid ?
    showError(input)
    :
    hideError(input)
}

function toggleButtonState(inputs, button) {

  const isFormValid = inputs.every(input => input.validity.valid)
  !isFormValid ?
    button.disabled = true
    //button.classList.toggle(settings.inactiveButtonClass))
    :
    button.disabled = false
    //button.classList.toggle(settings.inactiveButtonClass))
}

function enableValidation(settings) {
  const {formSelector, inputSelector, submitButtonSelector} = settings
  const forms = [...document.querySelectorAll(settings.formSelector)];

  forms.forEach(form => {
    form.addEventListener('submit', (evt) => evt.preventDefault());

    const inputs = [...form.querySelectorAll(settings.inputSelector)];
    const button = form.querySelector(settings.submitButtonSelector)

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        checkValidity(input)
        toggleButtonState(inputs, button)
      });
    });
  });
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".field-input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "disabled",
  inputErrorClass: "invalid",
  errorClass: "popup__error_visible",
}

enableValidation(config);
