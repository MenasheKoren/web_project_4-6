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


// forms
const editForm = editModal.querySelector('.popup__form');
const addCardForm = addCardModal.querySelector('.popup__form');

// image modal elements
// const imagePopupFigure = document.querySelector()

// functions
function toggleModal(popup) {
  popup.classList.toggle('popup_opened')
};

addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log(cardNameInput.value, cardLinkInput.value);

  generateCard({name: cardNameInput.value, link: cardLinkInput.value});
  toggleModal(addCardModal);

});


editProfileButton.addEventListener('click', () => {
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
    likeButton.classList.toggle('card__like_filled')
  });

  removeButton.addEventListener('click', () => {
    cardItem.remove();
  });

  image.addEventListener('click', () => {
    toggleModal(imageModal);
    // fill image src => el.src = cardData.link
    image.src = cardData.link;
    console.log(image.src);
    //  fill caption => el.textContent = cardData.name
    title.textContent = cardData.name;
    console.log(title.textContent);
  });


  list.append(cardItem)
};


initialCards.forEach(generateCard);
