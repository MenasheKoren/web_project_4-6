import "../pages/index.css";
import {
  listTemplateSelector,
  profileSelector,
  settings,
  editForm,
  addCardForm,
  editAvatarForm,
  editProfileButton,
  addCardButton,
  userProfessionValue,
  userNameValue,
  profileNameInput,
  profileProfessionInput,
  editAvatarButton,
} from "../scripts/utils/constants";
import { generateCard } from "../scripts/utils/utils";
import { Section } from "../scripts/components/Section";
import { PopupWithForm } from "../scripts/components/PopupWithForm";
import { FormValidator } from "../scripts/components/FormValidator";
import { PopupWithImage } from "../scripts/components/PopupWithImage";
import { UserInfo } from "../scripts/components/UserInfo";
import { api } from "../scripts/components/Api";
import { PopupWithSubmit } from "../scripts/components/PopupWithSubmit";
import { PopupWithAvatar } from "../scripts/components/PopupWithAvatar";

export let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()]).then(
  ([cardData, userData]) => {
    userId = userData._id;
    cardList.renderer(cardData);
    userInfo.setUserInfo({ name: userData.name, profession: userData.about });
  }
);

const editFormValidator = new FormValidator(settings, editForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);
const editAvatarFormValidator = new FormValidator(settings, editAvatarForm);

export const imageModalNew = new PopupWithImage(".popup_type_image");
const addCardModalNew = new PopupWithForm(".popup_type_add-card", (data) => {
  api
    .createCard({ name: data["card-title"], link: data["card-link"] })
    .then((data) => {
      cardList.addItem(generateCard(data));
    });
});

export const confirmPopup = new PopupWithSubmit(".popup_type_remove-card");

const updateAvatar = new PopupWithAvatar(".popup-type_edit-avatar", (data) => {
  api.editAvatar(data)
    .then(() => {
      console.log('123');
    })
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

editAvatarButton.addEventListener("click", () => {
  updateAvatar.open();
});

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();

editFormValidator.resetValidation();
addCardFormValidator.resetValidation();
editAvatarFormValidator.resetValidation();

imageModalNew.setEventListeners();
addCardModalNew.setEventListeners();
updateAvatar.setEventListeners();
confirmPopup.setEventListeners();

const userInfo = new UserInfo(userNameValue, userProfessionValue);

const profilePopup = new PopupWithForm(profileSelector, (data) => {
  api.editUserInfo({ name: data.name, about: data.profession }).then(() => {
    userInfo.setUserInfo({ name: data.name, profession: data.profession });
  });
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
