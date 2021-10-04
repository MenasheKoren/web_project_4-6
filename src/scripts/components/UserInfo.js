export default class UserInfo {
  constructor(profileTitleSelector, profileDescriptionSelector) {
    this._userName = document.querySelector(profileTitleSelector);
    this._userProfession = document.querySelector(profileDescriptionSelector);
  }

  getUserInfo() {
    const userNameSelector = this._userName.textContent;
    const userDescriptionSelector = this._userProfession.textContent;
    return (userNameSelector, userDescriptionSelector);
  }

  setUserInfo(userInfo) {
    const {userNameSelector, userDescriptionSelector} = userInfo;
    this._userName.textContent = userNameSelector;
    this._userProfession.textContent = userDescriptionSelector;
  }
}
