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
  avatarSelector,
} from "../scripts/utils/constants";
import { generateCard, updateProcessingMessage } from "../scripts/utils/utils";
import { Section } from "../scripts/components/Section";
import { PopupWithForm } from "../scripts/components/PopupWithForm";
import { FormValidator } from "../scripts/components/FormValidator";
import { PopupWithImage } from "../scripts/components/PopupWithImage";
import { UserInfo } from "../scripts/components/UserInfo";
import { api } from "../scripts/components/Api";
import { PopupWithSubmit } from "../scripts/components/PopupWithSubmit";

export let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()]).then(
  ([cardData, userData]) => {
    userId = userData._id;
    cardList.renderer(cardData);
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar,
    });
  }
);

const editFormValidator = new FormValidator(settings, editForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);
const editAvatarFormValidator = new FormValidator(settings, editAvatarForm);

export const imageModalNew = new PopupWithImage(".popup_type_image");
const addCardModalNew = new PopupWithForm(".popup_type_add-card", (data) => {
  updateProcessingMessage()
    api
    .createCard({ name: data["card-title"], link: data["card-link"] })
    .then((data) => {
      cardList.addItem(generateCard(data));
    })
    // .finally((button.textContent = initialTextHolder));
});

export const confirmPopup = new PopupWithSubmit(".popup_type_remove-card");

const updateAvatar = new PopupWithForm(
  ".popup_type_edit-avatar",
  (userData) => {
    updateProcessingMessage()
    api
      .editAvatar(userData["image-link"])
      .then((res) => {
        userInfo.setUserInfo(res);
      })
      // .finally((button.textContent = initialTextHolder));
  }
);

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

const userInfo = new UserInfo(
  userNameValue,
  userProfessionValue,
  avatarSelector
);

const profilePopup = new PopupWithForm(profileSelector, (data) => {
  updateProcessingMessage()
  api.editUserInfo({ name: data.name, about: data.profession }).then((res) => {
    userInfo
      .setUserInfo({
        name: res.name,
        about: res.about,
        avatar: res.avatar,
      })
      // .finally((button.textContent = initialTextHolder));
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
