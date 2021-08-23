function initPopUp() {
  let form = document.querySelector(".edit-form");

  let edit = document.querySelector(".edit__icon");

  let close = document.querySelector(".form__close");


  function closePopUpClick() {
    form.classList.remove('edit-form_opened');
  }

  close.addEventListener("click", closePopUpClick);

  function openPopUpClick() {
    form.classList.add('edit-form_opened');
  }

  edit.addEventListener("click", openPopUpClick);
}

initPopUp();

let formElement = document.querySelector(".form__field");// Use the querySelector() method

function handleFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector('.field__name');// Use querySelector()
  let jobInput = document.querySelector('.field__profession');// Use querySelector()


  document.querySelector(".name__default").textContent = nameInput.value;
  document.querySelector(".profile-info__profession").textContent = jobInput.value;
}

let form = document.querySelector(".edit-form");
function closePopUp() {
    form.classList.remove('edit-form_opened');
  }


formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', closePopUp);
