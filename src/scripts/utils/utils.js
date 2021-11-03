import { openedModal, submitButton } from "./constants";

export const customFetch = (url, headers) =>
  fetch(url, headers).then((res) =>
    res.ok ? res.json() : Promise.reject(res.statusText)
  );

export function updateProcessingMessage(message) {
  if (submitButton && openedModal) {
    submitButton.textContent = message;
  } else {
    submitButton.textContent = message;
  }
}
