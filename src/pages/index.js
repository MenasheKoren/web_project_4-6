import "../pages/index.css";
import {
  initialCards,
  editModal,
  addCardModal,
  listTemplateSelector,
  cardTemplateSelector,

} from "../scripts/utils/constants.js";
import {
  addFormSubmitListener,
  editFormValidator,
  addCardFormValidator,
  generateCard,
  imageModalNew,
  addCardModalNew,
  editModalNew,

} from "../scripts/utils/utils.js";
import Section from "../scripts/components/Section.js";
import Popup from '../scripts/components/Popup.js';
import Card from "../scripts/components/Card.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import FormValidator from "../scripts/components/FormValidator.js";

// function generateCard(data) {
//   const cardElement = new Card(data, cardTemplateSelector, () => {
//     imageModalNew.open(data.link, data.name);
//   });
//   return cardElement.createCardElement();
// }

// const imageModalNew = new PopupWithImage(".popup_type_image");
// const addCardModalNew = new PopupWithForm(
//   ".popup_type_add-card",
//   (data) => {
//     return cardList.addItem(generateCard(data));
//   }
// );
// const editModalNew = new PopupWithForm(".popup_type_edit", (data) => {
//   generateCard(data);
// });

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

editFormValidator.resetValidation();
addCardFormValidator.resetValidation();

imageModalNew.setEventListeners();
addCardModalNew.setEventListeners();
editModalNew.setEventListeners();

addFormSubmitListener(editModal);
addFormSubmitListener(addCardModal);

const cardList = new Section(
  {
    data: initialCards,
    renderer: (data) => {
      cardList.addItem(generateCard(data));
    },
  },
  listTemplateSelector
);
cardList.renderer();
