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
const editModal = document.querySelector('.form_type_edit');
const addCardModal = document.querySelector('.form_type_add-card');

// close buttons
const editModalCloseButton = editModal.querySelector('.form__close');
const addCardModalCloseButton = addCardModal.querySelector('.form__close');

// open modal buttons
const editProfileButton = document.querySelector('.edit-button');
const addCardButton = document.querySelector('.add-button');


// inputs
const profileNameInput = editModal.querySelector('.field-input_type_name');
const profileProfessionInput = editModal.querySelector('.field-input_type_profession');
const cardNameInput = addCardModal.querySelector('.field-input_type_card-title');
const cardLinkInput = addCardModal.querySelector('.field-input_type_card-link');


// forms
const editForm = editModal.querySelector('.form__field');
const addCardForm = addCardModal.querySelector('.form__field');


function toggleModal(form) {
  form.classList.toggle('form_opened')
};

addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log(`123`, cardNameInput.value, cardLinkInput.value);

  generateCard({name: cardNameInput.value, link: cardLinkInput.value});
  toggleModal(addCardModal);

});


editProfileButton.addEventListener('click', () => {
  toggleModal(editModal)
});

editModalCloseButton.addEventListener('click', () => {
  toggleModal(editModal)
});

addCardButton.addEventListener('click', () => {
  addCardForm.reset();
  toggleModal(addCardModal)
});

addCardModalCloseButton.addEventListener('click', () => {
  toggleModal(addCardModal)
});

function generateCard(cardData) { // {name, link}
  const cardItem = templateCardItem.cloneNode(true);

  const title = cardItem.querySelector('.card__location');
  const image = cardItem.querySelector('.card__image');

  title.textContent = cardData.name;
  image.src = cardData.link;
  image.alt = cardData.name;

  list.append(cardItem)
};


initialCards.forEach(generateCard);
