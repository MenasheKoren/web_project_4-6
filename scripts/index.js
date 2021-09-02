const initialCards = [
  {
    name:  "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const templateCardItem = document.querySelector('.card-template').content.querySelector('.card');
const list = document.querySelector('.cards');



initialCards.forEach(function (cardData) {
  const cardItem = templateCardItem.cloneNode(true);

  const title = cardItem.querySelector('.card__location');
  const image = cardItem.querySelector('.card__image');

  title.textContent = cardData.name;
  image.src = cardData.link;

  list.append(cardItem)

});
