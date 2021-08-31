let form = document.querySelector(".form");
let edit = document.querySelector(".edit-button");
let close = document.querySelector(".form__close");
let formElement = document.querySelector(".form__field");
let userNameValue = document.querySelector('.edit-name');
let userJobValue = document.querySelector('.profile-info__profession');
let nameInput = document.querySelector(".field-input_type_name");
let jobInput = document.querySelector(".field-input_type_profession");

function closePopUp() {
  form.classList.remove('form_opened');
}

function openPopUp() {
  form.classList.add('form_opened');
  let userName = userNameValue.textContent
  nameInput.value = userName;
  let userJob = userJobValue.textContent;
  jobInput.value = userJob;
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  document.querySelector(".edit-name").textContent = nameInput.value;
  document.querySelector(".profile-info__profession").textContent = jobInput.value;
  closePopUp();
}

formElement.addEventListener('submit', handleFormSubmit);
edit.addEventListener("click", openPopUp);
close.addEventListener("click", closePopUp);
