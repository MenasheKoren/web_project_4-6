import {
  cardTemplateSelector,
} from "./constants";
import Card from "../components/Card";
import { imageModalNew } from "../../pages/index";

export function toggleModal(popup) {
  const saveButton = popup.querySelector(".popup__save");

  if (saveButton) {
    saveButton.disabled = true;
  }

  popup.classList.toggle("popup_opened");
}

// export function addFormSubmitListener(modal) {
//   modal.addEventListener("submit", (evt) => {
//     evt.preventDefault();

//     if (modal === editModal) {
//       document.querySelector(".edit-name").textContent = profileNameInput.value;
//       document.querySelector(".profile-info__profession").textContent =
//         profileProfessionInput.value;
//     } else if (modal === addCardModal) {
//       generateCard({ name: cardNameInput.value, link: cardLinkInput.value });
//       addCardFormModal.reset();
//     }
//     toggleModal(modal);
//   });
// }

export function generateCard(data) {
  const cardElement = new Card(data, cardTemplateSelector, () => {
    imageModalNew.open(data.link, data.name);
  });
  return cardElement.createCardElement();
}
