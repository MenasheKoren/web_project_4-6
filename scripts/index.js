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

// modals
const editModal = document.querySelector('.popup_type_edit');
const addCardModal = document.querySelector('.popup_type_add-card');
const imageModal = document.querySelector('.popup_type_image');

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

// forms
const editForm = editModal.querySelector('.popup__form');
const addCardForm = addCardModal.querySelector('.popup__form');


// image modal elements
const openImageModel = imageModal.querySelector('.popup__figure');
const imagePopup = imageModal.querySelector('.popup__image');
const captionPopup = imageModal.querySelector('.popup__caption');

// functions
function toggleModal(popup) {
  popup.classList.toggle('popup_opened')
};


function handleFormSubmit(modal) {
  modal.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (modal === editModal) {
      document.querySelector(".edit-name").textContent = profileNameInput.value;
      document.querySelector(".profile-info__profession").textContent = profileProfessionInput.value;
    } else if (modal === addCardModal) {
      generateCard({name: cardNameInput.value, link: cardLinkInput.value});
    };

    toggleModal(modal);
  });

};

editProfileButton.addEventListener('click', () => {
  const profileName = profileNameValue.textContent;
  profileNameInput.value = profileName;
  const profileProfession = profileProfessionValue.textContent;
  profileProfessionInput.value = profileProfession;
  toggleModal(editModal);
});

editModalCloseButton.addEventListener('click', () => {
  toggleModal(editModal);
});

addCardButton.addEventListener('click', () => {
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
    captionPopup.textContent = cardData.name;
  });


  list.prepend(cardItem)
};


handleFormSubmit(editModal);
handleFormSubmit(addCardModal);

initialCards.forEach(generateCard);
