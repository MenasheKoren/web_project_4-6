import { cardTemplateSelector } from "./constants";
import { Card } from "../components/Card";
import { imageModalNew, confirmPopup } from "../../pages/index";

export function generateCard(data) {
  const cardElement = new Card(
    data,
    cardTemplateSelector,
    () => {
      imageModalNew.open(data.link, data.name);
    },
    () => {
      confirmPopup.open();
    }
  );

  return cardElement.createCardElement();
}

export const customFetch = (url, headers) =>
  fetch(url, headers)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    .catch(console.log);
