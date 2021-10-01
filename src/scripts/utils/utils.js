import { openedModal  } from './constants.js';

// export const imagePopup = document.querySelector('.popup__image');
// export const captionPopup = document.querySelector('.popup__caption');
// export const imageModal = document.querySelector('.popup_type_image');

export const closeModalWithEscape = (evt) => {
 // const openedModal = document.querySelector('.popup_opened');
  if (openedModal && evt.key === 'Escape') {
    toggleModal(openedModal);
  };
};


export const closeModalWithOverlay = (evt) =>  {
  //const openedModal = document.querySelector('.popup_opened');
  if (openedModal === evt.target) {
    toggleModal(openedModal);
  };
};


export function toggleModal(popup) {

  const saveButton = popup.querySelector('.popup__save');

  if (saveButton) {
    saveButton.disabled = true;
  };


  popup.classList.toggle('popup_opened');

  if (!popup.classList.contains('popup_opened')) {
    popup.removeEventListener('click', closeModalWithOverlay);
    document.removeEventListener('keydown', closeModalWithEscape);
  } else {
    document.addEventListener('keydown', closeModalWithEscape);
    popup.addEventListener('click', closeModalWithOverlay);
  };
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
