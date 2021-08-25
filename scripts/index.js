let form = document.querySelector(".form");
let edit = document.querySelector(".edit-icon");
let close = document.querySelector(".form__close");

function closePopUp() {
  form.classList.remove('form_opened');
}
close.addEventListener("click", closePopUp);

function openPopUp() {
  form.classList.add('form_opened');
}
edit.addEventListener("click", openPopUp);


let formElement = document.querySelector(".form__field");

function handleFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector(".field-input_type_name");
  let jobInput = document.querySelector(".field-input_type_profession");
  document.querySelector(".edit-name").textContent = nameInput.value;
  document.querySelector(".profile-info__profession").textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', closePopUp);
