export const customFetch = (url, headers) =>
  fetch(url, headers)
    .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
    .catch(console.log);

export function updateProcessingMessage(message) {
  const button = document.querySelector(".popup_opened .popup__save");
  button.textContent = message;
}
