import "../pages/index.css";
import {
  initialCards,
  editModal,
  addCardModal,
  listTemplateSelector,
  profileSelector,
  settings,
  editForm,
  addCardForm,
  editProfileButton,
  addCardButton,
  profileNameValue,
  profileProfessionValue,
  profileNameInput,
  profileProfessionInput,
  addCardFormModal,
} from "../scripts/utils/constants";
import { generateCard, toggleModal } from "../scripts/utils/utils";
import Section from "../scripts/components/Section";
import { PopupWithForm } from "../scripts/components/PopupWithForm";
import FormValidator from "../scripts/components/FormValidator";
import PopupWithImage from "../scripts/components/PopupWithImage";
import UserInfo from "../scripts/components/UserInfo";

const editFormValidator = new FormValidator(settings, editForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);

export const imageModalNew = new PopupWithImage(".popup_type_image");
const addCardModalNew = new PopupWithForm(".popup_type_add-card", (data) => {
  return cardList.addItem(
    generateCard({ name: data["card-title"], link: data["card-link"] })
  );
});
const editModalNew = new PopupWithForm(".popup_type_edit", (data) => {
  generateCard(data);
});

editProfileButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  editFormValidator.resetValidation();
  const profileName = profileNameValue.textContent;
  profileNameInput.value = profileName;
  const profileProfession = profileProfessionValue.textContent;
  profileProfessionInput.value = profileProfession;
  toggleModal(editModal);
});

addCardButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  addCardFormValidator.resetValidation();
  addCardFormModal.reset();
  toggleModal(addCardModal);
});

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

editFormValidator.resetValidation();
addCardFormValidator.resetValidation();

imageModalNew.setEventListeners();
addCardModalNew.setEventListeners();
editModalNew.setEventListeners();

// addFormSubmitListener(editModal);
// addFormSubmitListener(addCardModal);

const userInfoPop = new UserInfo(profileSelector, (data) => {
  userInfoPop.setUserInfo(data);
  userInfoPop.close();
});

const profilePopup = new PopupWithForm(profileSelector, (data) => {
  userInfoPop.setUserInfo(data);
  profilePopup.close();
});

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
