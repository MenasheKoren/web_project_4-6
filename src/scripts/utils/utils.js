import { cardTemplateSelector } from "./constants";
import { Card } from "../components/Card";
import { imageModalNew } from "../../pages/index";

export function generateCard(data) {
  const cardElement = new Card(data, cardTemplateSelector, () => {
    imageModalNew.open(data.link, data.name);
  });
  return cardElement.createCardElement();
}

export const customFetch = (url, headers) =>
  fetch(url, headers)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    .catch(console.log);
