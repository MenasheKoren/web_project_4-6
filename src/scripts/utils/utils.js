import {
  openedModal,
  editForm,
  addCardForm,
  settings,

} from './constants.js';
import FormValidator from '../components/FormValidator.js';




export function toggleModal(popup) {

  const saveButton = popup.querySelector('.popup__save');

  if (saveButton) {
    saveButton.disabled = true;
  };


  popup.classList.toggle('popup_opened');

};

export function addFormSubmitListener(modal) {
  modal.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (modal === editModal) {
      document.querySelector(".edit-name").textContent = profileNameInput.value;
      document.querySelector(".profile-info__profession").textContent = profileProfessionInput.value;
    } else if (modal === addCardModal) {
      generateCard({ name: cardNameInput.value, link: cardLinkInput.value });
      addCardFormModal.reset();
    };
    toggleModal(modal);
  });

};


export const editFormValidator = new FormValidator(settings, editForm);
export const addCardFormValidator = new FormValidator(settings, addCardForm)
