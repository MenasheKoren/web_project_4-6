import "../pages/index.css";
import {
  initialCards,
  listTemplateSelector,
  profileSelector,
  settings,
  editForm,
  addCardForm,
  editProfileButton,
  addCardButton,
  userProfessionValue,
  userNameValue,
  profileNameInput,
  profileProfessionInput,
} from "../scripts/utils/constants";
import { generateCard } from "../scripts/utils/utils";
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

editProfileButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  profileNameInput.value = currentUserInfo.userName;
  profileProfessionInput.value = currentUserInfo.userProfession;
  profilePopup.open();
});

addCardButton.addEventListener("click", () => {
  addCardModalNew.open();
});

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

editFormValidator.resetValidation();
addCardFormValidator.resetValidation();

imageModalNew.setEventListeners();
addCardModalNew.setEventListeners();

const userInfo = new UserInfo(userNameValue, userProfessionValue);

const profilePopup = new PopupWithForm(profileSelector, (data) => {
  userInfo.setUserInfo(data);
  profilePopup.close();
});

profilePopup.setEventListeners();

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
