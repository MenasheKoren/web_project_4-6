import "../pages/index.css";
import {
  initialCards,
  editModal,
  addCardModal,
  listTemplateSelector,
} from "../scripts/utils/constants.js";
import {
  addFormSubmitListener,
  editFormValidator,
  addCardFormValidator,
  imageModalNew,
  addCardModalNew,
  editModalNew,
  generateCard,
} from "../scripts/utils/utils.js";
import Section from "../scripts/components/Section.js";
import Popup from '../scripts/components/Popup.js';

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
