let form = document.querySelector(".edit-form");
let edit = document.querySelector(".edit__icon");
let close = document.querySelector(".form__close");

function closePopUp() {
  form.classList.remove('edit-form_opened');
}
close.addEventListener("click", closePopUp);

function openPopUp() {
  form.classList.add('edit-form_opened');
}
edit.addEventListener("click", openPopUp);


let formElement = document.querySelector(".form__field");

function handleFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.field__input_type_name');
  let jobInput = document.querySelector('.field__input_type_profession');
  document.querySelector(".name__default").textContent = nameInput.value;
  document.querySelector(".profile-info__profession").textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', closePopUp);
