import { userNameValue, userProfessionValue } from "../utils/constants";
export default class UserInfo {
  constructor(userNameElement, userProfessionElement) {
    this._userNameElement = document.querySelector(userNameValue);
    this._userProfessionElement = document.querySelector(userProfessionValue);
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userProfession: this._userProfessionElement.textContent
    };
  }

  setUserInfo(userInfo) {
    const { userNameSelector, userProfessionSelector } = userInfo;
    this._userNameElement.textContent = userNameSelector;
    this._userProfessionElement.textContent = userProfessionSelector;
  }
}
