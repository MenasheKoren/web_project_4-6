import "../pages/index.css"
import {
  initialCards,
  editProfileButton,
  addCardButton,
  editModalCloseButton,
  addCardModalCloseButton,
  imageModalCloseButton,
  editFormModal,
  addCardFormModal,
  editModal,
  addCardModal,
  imageModal,
  profileNameInput,
  profileProfessionInput,
  cardNameInput,
  cardLinkInput,
  profileNameValue,
  profileProfessionValue,
  list,
  editForm,
  addCardForm,
  settings,
  cardTemplateSelector,
  imageModalNew,
  addCardModalNew,
  initialFieldInputs,

} from '../scripts/utils/constants.js';
import Card from '../scripts/components/Card.js';
import  FormValidator  from '../scripts/components/FormValidator.js';
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import {
  toggleModal,
  closeModalWithEscape,
  closeModalWithOverlay,
  addFormSubmitListener
} from '../scripts/utils/utils.js';



// const settings = {
//   inputSelector: ".field-input",
//   submitButtonSelector: ".popup__save"
// };

// const editForm = document.querySelector('.popup_type_edit');
// const addCardForm = document.querySelector('.popup_type_add-card');

const editFormValidator = new FormValidator(settings, editForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

editFormValidator.resetValidation();
addCardFormValidator.resetValidation();



// functions
// function addFormSubmitListener(modal) {
//   modal.addEventListener('submit', (evt) => {
//     evt.preventDefault();

//     if (modal === editModal) {
//       document.querySelector(".edit-name").textContent = profileNameInput.value;
//       document.querySelector(".profile-info__profession").textContent = profileProfessionInput.value;
//     } else if (modal === addCardModal) {
//       generateCard({ name: cardNameInput.value, link: cardLinkInput.value });
//       addCardFormModal.reset();
//     };
//     toggleModal(modal);
//   });

// };

// editProfileButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   editFormValidator.resetValidation();
//   const profileName = profileNameValue.textContent;
//   profileNameInput.value = profileName;
//   const profileProfession = profileProfessionValue.textContent;
//   profileProfessionInput.value = profileProfession;
//   toggleModal(editModal);
// });

// editModalCloseButton.addEventListener('click', () => {
//   toggleModal(editModal);
// });


// addCardButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   addCardFormValidator.resetValidation();
//   addCardFormModal.reset();
//   toggleModal(addCardModal);
// });

// addCardModalCloseButton.addEventListener('click', () => {
//   toggleModal(addCardModal);
// });

// imageModalCloseButton.addEventListener('click', () => {
//   toggleModal(imageModal);
// });

// const cardTemplateSelector = '.card-template';

// const imageModalNew = new PopupWithImage('.popup_type_image')
// const addCardModalNew = new PopupWithForm('.popup_type_add-card', (data) => {

//   generateCard(data);
// })
// const editModalNew = new PopupWithForm('.popup_type_edit', (data) => {

//   generateCard(data)

// })
imageModalNew.setEventListeners();
addCardModalNew.setEventListeners();
editModalNew.setEventListeners();

function generateCard(data) {
  const cardElement = new Card(data, cardTemplateSelector, () => {
    imageModalNew.open()
  });
  list.prepend(cardElement.createCardElement());
};

addFormSubmitListener(editModal);
addFormSubmitListener(addCardModal);

initialCards.forEach(generateCard);
