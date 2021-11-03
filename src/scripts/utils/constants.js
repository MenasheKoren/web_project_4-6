export const settings = {
  inputSelector: ".field-input",
  submitButtonSelector: ".popup__save",
};

export const editForm = document.querySelector(".popup_type_edit-profile");
export const addCardForm = document.querySelector(".popup_type_add-card");
export const editAvatarForm = document.querySelector(".popup_type_edit-avatar");
export const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

export const templateCardItem = document
  .querySelector(".card-template")
  .content.querySelector(".card");
export const list = document.querySelector(".card-list");
export const cards = document.querySelectorAll(".card");

// modals
export const editModal = document.querySelector(".popup_type_edit-profile");
export const addCardModal = document.querySelector(".popup_type_add-card");
export const imageModal = document.querySelector(".popup_type_image");
export const openedModal = document.querySelector(".popup_opened");

// close buttons
export const editModalCloseButton = editModal.querySelector(".popup__close");
export const addCardModalCloseButton =
  addCardModal.querySelector(".popup__close");
export const imageModalCloseButton = imageModal.querySelector(".popup__close");

// open modal buttons
export const editProfileButton = document.querySelector(".edit-button");
export const addCardButton = document.querySelector(".add-button");
export const editAvatarButton = document.querySelector(".avatar");

// submit buttons
export const submitButton = document.querySelector('.popup__save')

// inputs
export const profileNameInput = editModal.querySelector(
  ".field-input_type_name"
);
export const profileProfessionInput = editModal.querySelector(
  ".field-input_type_profession"
);
export const cardNameInput = addCardModal.querySelector(
  ".field-input_type_card-title"
);
export const cardLinkInput = addCardModal.querySelector(
  ".field-input_type_card-link"
);
export const profileNameValue = document.querySelector(".edit-name");
export const profileProfessionValue = document.querySelector(
  ".profile-info__profession"
);
export const initialFieldInputs = document.querySelectorAll(".field-input");

// forms
export const editFormModal = editModal.querySelector(".popup__form");
export const addCardFormModal = addCardModal.querySelector(".popup__form");

// image modal elements
export const openImageModal = imageModal.querySelector(".popup__figure");
export const imagePopup = imageModal.querySelector(".popup__image");
export const captionPopup = imageModal.querySelector(".popup__caption");

export const cardTemplateSelector = ".card-template";
export const listTemplateSelector = ".card-list";

export const profileNameSelector = ".name-input";
export const profileProfessionSelector = ".profession-input";
export const profileSelector = ".popup_type_edit-profile";
export const userAvatarValue = ".image-link";
export const avatarSelector = ".avatar__image";
export const userNameValue = ".edit-name";
export const userProfessionValue = ".profile-info__profession";

export const cardTitleSelector = ".card-title";
export const cardLinkSelector = ".card-link";
