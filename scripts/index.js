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
const editForm = document.querySelector('.form_type_edit');
const addCardForm = document.querySelector('.form_type_add-card');

// close buttons
const editFormCloseButton = editForm.querySelector('.form__close');
const addCardFormCloseButton = addCardForm.querySelector('.form__close');

// open modal buttons
const editProfileButton = document.querySelector('.edit-button');
const addCardButton = document.querySelector('.add-button');


// inputs
const profileNameInput = editForm.querySelector('.field-input_type_name');
const profileProfessionInput = editForm.querySelector('.field-input_type_profession');
const cardNameInput = addCardForm.querySelector('field-input_type_card-title');
const cardLinkInput = addCardForm.querySelector('.field-input_type_card-link');

editProfileButton.addEventListener('click', () => {
  editForm.classList.add('form_opened')
});

editProfileButton.addEventListener('click', () => {
  editForm.classList.remove('form_opened')
});


initialCards.forEach(function (cardData) {
  const cardItem = templateCardItem.cloneNode(true);

  const title = cardItem.querySelector('.card__location');
  const image = cardItem.querySelector('.card__image');

  title.textContent = cardData.name;
  image.src = cardData.link;
  image.alt = cardData.name;

  list.append(cardItem)

});
