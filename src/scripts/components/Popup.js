export default class Popup {
  constructor(_popupSelector) {
    this._popupElement = document.querySelector('.popup_opened');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._popupSelector = this._popupElement;
  };

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  };

  open() {
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscClose);
  };

  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscClose);
  };

  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup__close') || !evt.target.closest('.popup__container')) {
        this.close();
      };
    });
  };
};
