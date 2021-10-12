import { cardTemplateSelector } from "./constants";
import Card from "../components/Card";
import { imageModalNew } from "../../pages/index";

export function generateCard(data) {
  const cardElement = new Card(data, cardTemplateSelector, () => {
    imageModalNew.open(data.link, data.name);
  });
  return cardElement.createCardElement();
}
