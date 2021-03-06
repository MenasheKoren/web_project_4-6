import "../pages/index.css";
import {
  listTemplateSelector,
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
  cardTemplateSelector,
  imagePopupSelector,
  addCardPopupSelector,
  confirmPopupSelector,
  avatarPopupSelector,
  profilePopupSelector,
} from "../scripts/utils/constants";
import { updateProcessingMessage } from "../scripts/utils/utils";
import { Section } from "../scripts/components/Section";
import { PopupWithForm } from "../scripts/components/PopupWithForm";
import { FormValidator } from "../scripts/components/FormValidator";
import { PopupWithImage } from "../scripts/components/PopupWithImage";
import { UserInfo } from "../scripts/components/UserInfo";
import { api } from "../scripts/components/Api";
import { PopupWithSubmit } from "../scripts/components/PopupWithSubmit";
import { Card } from "../scripts/components/Card";

export let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cardData, userData]) => {
    userId = userData._id;
    cardList.renderer(cardData);
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar,
    });
  })
  .catch((err) => console.log(`Error.....: ${err}`));

const editFormValidator = new FormValidator(settings, editForm);
const addCardFormValidator = new FormValidator(settings, addCardForm);
const editAvatarFormValidator = new FormValidator(settings, editAvatarForm);

const imageModal = new PopupWithImage(imagePopupSelector);
const addCardModalNew = new PopupWithForm(addCardPopupSelector, (data) => {
  updateProcessingMessage("Saving...", addCardPopupSelector);
  api
    .createCard({ name: data["card-title"], link: data["card-link"] })
    .then((data) => {
      cardList.addItem(generateCard(data));
      addCardModalNew.close();
    })
    .catch((err) => {
      console.log(`Error.....: ${err}`);
    })
    .finally(() => {
      updateProcessingMessage("Create", addCardPopupSelector);
    });
});

const confirmPopup = new PopupWithSubmit(confirmPopupSelector);

const updateAvatar = new PopupWithForm(avatarPopupSelector, (userData) => {
  updateProcessingMessage("Saving...", avatarPopupSelector);
  api
    .editAvatar(userData["image-link"])
    .then((res) => {
      userInfo.setUserInfo(res);
      updateAvatar.close();
    })
    .catch((err) => {
      console.log(`Error.....: ${err}`);
    })
    .finally(() => {
      updateProcessingMessage("Save", avatarPopupSelector);
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

editAvatarButton.addEventListener("click", () => {
  updateAvatar.open();
});

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();

editFormValidator.resetValidation();
addCardFormValidator.resetValidation();
editAvatarFormValidator.resetValidation();

imageModal.setEventListeners();
addCardModalNew.setEventListeners();
updateAvatar.setEventListeners();
confirmPopup.setEventListeners();

const userInfo = new UserInfo(
  userNameValue,
  userProfessionValue,
  avatarSelector
);

const profilePopup = new PopupWithForm(profilePopupSelector, (data) => {
  updateProcessingMessage("Saving...", profilePopupSelector);
  api
    .editUserInfo({ name: data.name, about: data.profession })
    .then((res) => {
      userInfo.setUserInfo({
        name: res.name,
        about: res.about,
        avatar: res.avatar,
      });
      profilePopup.close();
    })
    .catch((err) => {
      console.log(`Error.....: ${err}`);
    })
    .finally(() => {
      updateProcessingMessage("Save", profilePopupSelector);
    });
});

profilePopup.setEventListeners();

function generateCard(data) {
  const cardElement = new Card(
    data,
    cardTemplateSelector,
    () => {
      imageModal.open(data.link, data.name);
    },
    (id) => {
      const isAlreadyLiked = cardElement.isLiked();
      if (isAlreadyLiked) {
        api
          .removeLikes(id)
          .then((res) => {
            cardElement.addLikes(res.likes);
          })
          .catch((err) => console.log(`Error.....: ${err}`));
      } else {
        api
          .addLikes(id)
          .then((res) => {
            cardElement.addLikes(res.likes);
          })
          .catch((err) => console.log(`Error.....: ${err}`));
      }
    },
    (id) => {
      confirmPopup.open();

      confirmPopup.setAction(() => {
        updateProcessingMessage("Deleting...", confirmPopupSelector);
        api
          .deleteCard(id)
          .then((res) => {
            cardElement.removeCard();
            confirmPopup.close();
          })
          .catch((err) => {
            console.log(`Error.....: ${err}`);
          })
          .finally(() => {
            updateProcessingMessage("Yes", confirmPopupSelector);
          });
      });
    },
    userId
  );

  return cardElement.createCardElement();
}

const cardList = new Section(
  {
    renderer: (data) => {
      cardList.addItem(generateCard(data));
    },
  },
  listTemplateSelector
);
