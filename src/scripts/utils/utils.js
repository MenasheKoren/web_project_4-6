import { openedModal, submitButton } from "./constants";

export const customFetch = (url, headers) =>
  fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText)
  );

export function updateProcessingMessage(message, popupTypeSelector) {
  const submitButton = document.querySelector(
    `${popupTypeSelector} .popup__save`
  );
  if (submitButton) {
    submitButton.textContent = message;
  }
}
