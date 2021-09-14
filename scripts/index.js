const initialCards = [
  {
    name:  "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const templateCardItem = document.querySelector('.card-template').content.querySelector('.card');
const list = document.querySelector('.card-list');
const cards = document.querySelectorAll('.card');

// modals
const editModal = document.querySelector('.popup_type_edit');
const addCardModal = document.querySelector('.popup_type_add-card');
const imageModal = document.querySelector('.popup_type_image');
const openedModal = document.querySelector('.popup_opened');


// close buttons
const editModalCloseButton = editModal.querySelector('.popup__close');
const addCardModalCloseButton = addCardModal.querySelector('.popup__close');
const imageModalCloseButton = imageModal.querySelector('.popup__close');

// open modal buttons
const editProfileButton = document.querySelector('.edit-button');
const addCardButton = document.querySelector('.add-button');


// inputs
const profileNameInput = editModal.querySelector('.field-input_type_name');
const profileProfessionInput = editModal.querySelector('.field-input_type_profession');
const cardNameInput = addCardModal.querySelector('.field-input_type_card-title');
const cardLinkInput = addCardModal.querySelector('.field-input_type_card-link');
const profileNameValue = document.querySelector('.edit-name');
const profileProfessionValue = document.querySelector('.profile-info__profession');
const initialFieldInputs = document.querySelectorAll('.field-input');

// forms
const editForm = editModal.querySelector('.popup__form');
const addCardForm = addCardModal.querySelector('.popup__form');


// image modal elements
const openImageModel = imageModal.querySelector('.popup__figure');
const imagePopup = imageModal.querySelector('.popup__image');
const captionPopup = imageModal.querySelector('.popup__caption');

// functions
function toggleModal(popup) {
  const saveButton = popup.querySelector('.popup__save');
  saveButton ? saveButton.disabled = true : saveButton;
  popup.classList.toggle('popup_opened');
  const popupInitialInputs = popup.querySelectorAll('.field-input');
  popupInitialInputs.forEach(hideError);
};

const closeModalWithEscape = document.addEventListener('keydown', (evt) => {
  const openedModal = document.querySelector('.popup_opened');
  if (openedModal && evt.key === 'Escape') {
    toggleModal(openedModal);
  };
});

document.removeEventListener('keydown', closeModalWithEscape);

const closeModalWithOverlay = document.addEventListener('click', (evt) => {
  if (evt.target === imageModal) {
    toggleModal(imageModal);
  } else if (evt.target === editModal) {
    toggleModal(editModal);
  } else if (evt.target === addCardModal) {
    toggleModal(addCardModal);
  };
});

document.removeEventListener('click', closeModalWithOverlay);

function addFormSubmitListener(modal) {
  modal.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (modal === editModal) {
      document.querySelector(".edit-name").textContent = profileNameInput.value;
      document.querySelector(".profile-info__profession").textContent = profileProfessionInput.value;
    } else if (modal === addCardModal) {
      generateCard({name: cardNameInput.value, link: cardLinkInput.value});
    };
    addCardForm.reset();
    toggleModal(modal);
  });

};

editProfileButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const profileName = profileNameValue.textContent;
  profileNameInput.value = profileName;
  const profileProfession = profileProfessionValue.textContent;
  profileProfessionInput.value = profileProfession;
  toggleModal(editModal);
});

editModalCloseButton.addEventListener('click', () => {
  toggleModal(editModal);
});


addCardButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  addCardForm.reset();
  toggleModal(addCardModal);
});

addCardModalCloseButton.addEventListener('click', () => {
  toggleModal(addCardModal);
});

imageModalCloseButton.addEventListener('click', () => {
  toggleModal(imageModal);
});

function generateCard(cardData) { // {name, link}
  const cardItem = templateCardItem.cloneNode(true);

  const title = cardItem.querySelector('.card__location');
  const image = cardItem.querySelector('.card__image');
  const removeButton = cardItem.querySelector('.card__remove');
  const likeButton = cardItem.querySelector('.card__like');

  title.textContent = cardData.name;
  image.src = cardData.link;
  image.alt = cardData.name;

  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('button_filled');
    likeButton.classList.toggle('button_empty');
  });

  removeButton.addEventListener('click', () => {
    cardItem.remove();
  });

  image.addEventListener('click', () => {
    toggleModal(imageModal);
    imagePopup.src = cardData.link;
    imagePopup.alt = cardData.name;
    captionPopup.textContent = cardData.name;
  });

  list.prepend(cardItem);
};


addFormSubmitListener(editModal);
addFormSubmitListener(addCardModal);

initialCards.forEach(generateCard);
