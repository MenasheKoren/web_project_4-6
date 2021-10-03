import "../pages/index.css";
import {
  initialCards,
  editModal,
  addCardModal,
  cardTemplateSelector,
  listTemplateSelector,


} from '../scripts/utils/constants.js';
import Card from '../scripts/components/Card.js';
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import {
  addFormSubmitListener,
  editFormValidator,
  addCardFormValidator,
} from '../scripts/utils/utils.js';
import Section from '../scripts/components/Section.js';



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




// addCardButton.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   addCardFormValidator.resetValidation();
//   addCardFormModal.reset();
//   toggleModal(addCardModal);
// });



const imageModalNew = new PopupWithImage('.popup_type_image');
const addCardModalNew = new PopupWithForm('.popup_type_add-card', (data) => {

  generateCard(data);
});
const editModalNew = new PopupWithForm('.popup_type_edit', (data) => {

  generateCard(data)

});

imageModalNew.setEventListeners();
addCardModalNew.setEventListeners();
editModalNew.setEventListeners();

function generateCard(data) {
  const cardElement = new Card(data, cardTemplateSelector, () => {
    imageModalNew.open(data.link, data.name);
  });
  return cardElement.createCardElement();
};

addFormSubmitListener(editModal);
addFormSubmitListener(addCardModal);

// const editModal = new PopupWithForm('popup_type_edit', (data) => {
//   profileNameValue.textContent = data.name;
//   profileProfessionValue.textContent = data.description;
// });

const cardList = new Section({
    data: initialCards,
    renderer: (data) => {
      cardList.addItem(generateCard(data));
    }
  }, listTemplateSelector
  );
  cardList.renderer()
