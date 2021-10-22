import "../pages/index.css";
import {
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
import { Section } from "../scripts/components/Section";
import { PopupWithForm } from "../scripts/components/PopupWithForm";
import { FormValidator } from "../scripts/components/FormValidator";
import { PopupWithImage } from "../scripts/components/PopupWithImage";
import { UserInfo } from "../scripts/components/UserInfo";
import { api } from "../scripts/components/Api";

api.getInitialCards().then((res) => {
  cardList.renderer(res);
  // console.log("res", res);
});

api.getUserInfo().then((res) => {
  userInfo.setUserInfo({ name: res.name, profession: res.about });
  // console.log("res", res);
});

const editFormValidator = new FormValidator(settings, editForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);

export const imageModalNew = new PopupWithImage(".popup_type_image");
const addCardModalNew = new PopupWithForm(".popup_type_add-card", (data) => {
  console.log("data :>> ", data);

  api
    .createCard({ name: data["card-title"], link: data["card-link"] })
    .then((res) => {
      cardList.addItem(generateCard({ name: res.name, link: res.link }));
    });
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
    renderer: (data) => {
      cardList.addItem(generateCard(data));
    },
  },
  listTemplateSelector
);
// cardList.renderer();
