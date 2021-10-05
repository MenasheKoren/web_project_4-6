import {
  editForm,
  addCardForm,
  settings,
  editProfileButton,
  addCardButton,
  addCardFormModal,
  addCardModal,
  editModal,
  cardNameInput,
  profileNameInput,
  profileProfessionInput,
  profileNameValue,
  profileProfessionValue,
  cardLinkInput,
  cardTemplateSelector,
} from "./constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";

import { cardList } from '../../pages/index'

export function toggleModal(popup) {
  const saveButton = popup.querySelector(".popup__save");

  if (saveButton) {
    saveButton.disabled = true;
  };

  popup.classList.toggle("popup_opened");
};

export function addFormSubmitListener(modal) {
  modal.addEventListener("submit", (evt) => {
    evt.preventDefault();

    if (modal === editModal) {
      document.querySelector(".edit-name").textContent = profileNameInput.value;
      document.querySelector(".profile-info__profession").textContent =
        profileProfessionInput.value;
    } else if (modal === addCardModal) {
      generateCard({ name: cardNameInput.value, link: cardLinkInput.value });
      addCardFormModal.reset();
    }
    toggleModal(modal);
  });
};

export const editFormValidator = new FormValidator(settings, editForm);
export const addCardFormValidator = new FormValidator(settings, addCardForm);

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

export function generateCard(data) {
  const cardElement = new Card(data, cardTemplateSelector, () => {
    imageModalNew.open(data.link, data.name);
  });
  return cardElement.createCardElement();
};

export const imageModalNew = new PopupWithImage(".popup_type_image");
export const addCardModalNew = new PopupWithForm(
  ".popup_type_add-card",
  (data) => {
    return cardList.addItem(generateCard({ name: data['card-title'], link: data['card-link'] }));
  }
);
export const editModalNew = new PopupWithForm(".popup_type_edit", (data) => {
  generateCard(data);
});
