import { cardTemplateSelector } from "./constants";
import { Card } from "../components/Card";
import { imageModalNew, confirmPopup } from "../../pages/index";
import { api } from "../components/Api";

export function generateCard(data) {
  const cardElement = new Card(
    data,
    cardTemplateSelector,
    () => {
      imageModalNew.open(data.link, data.name);
    },
    (id) => {
      confirmPopup.open();

      confirmPopup.setAction(() => {
        api.deleteCard(id).then((res) => {
          console.log("Card is deleted!!");
          cardElement.removeCard()
          confirmPopup.close()
        });
      })

    }
  );

  return cardElement.createCardElement();
}

export const customFetch = (url, headers) =>
  fetch(url, headers)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    .catch(console.log);
