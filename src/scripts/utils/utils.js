import { cardTemplateSelector } from "./constants";
import { Card } from "../components/Card";
import { imageModalNew, confirmPopup, userId } from "../../pages/index";
import { api } from "../components/Api";

export function generateCard(data) {
  const cardElement = new Card(
    data,
    cardTemplateSelector,
    () => {
      imageModalNew.open(data.link, data.name);
    },
    (id) => {
      const isAlreadyLiked = cardElement.isLiked();

      if (isAlreadyLiked) {
        api.unlikeCard(id).then((res) => {
          cardElement.likeCard(res.likes);
        });
      } else {
        api.likeCard(id).then((res) => {
          cardElement.likeCard(res.likes);
        });
      }
    },
    (id) => {
      confirmPopup.open();

      confirmPopup.setAction(() => {
        const button = document.querySelector(".popup__save");
        const initialTextHolder = button.textContent.toString();
        button.textContent = "Deleting...";
        api
          .deleteCard(id)
          .then((res) => {
            cardElement.removeCard();
            confirmPopup.close();
          })
          .finally((button.textContent = initialTextHolder));
      });
    },
    userId
  );

  return cardElement.createCardElement();
}

export const customFetch = (url, headers) =>
  fetch(url, headers)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    .catch(console.log);
