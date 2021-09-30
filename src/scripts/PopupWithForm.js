import Popup from "./Popup";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector)
    this._submitHandler = submitHandler;
    this._form = this._popupElement.querySelector('.popup__form')
  }

  _getInputValues() {
    const inputs = [...this._form.querySelector('.field-inputs')]
    const inputValues = {}

    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    })

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', () => this._submitHandler)
  }

  close() {
    super.close()
    this._form.reset()
  }
}

const profileName = ''
const profileProfession = ''

const editModal = new PopupWithForm('.popup_type_edit', (data) => {
  profileName.textContent = data.name
  profileProfession.textContent = data.description
})
