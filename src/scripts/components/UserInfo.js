export default class UserInfo {
  constructor(_userName, _userProfession) {
    this._userName = document.querySelector(".name-input");
    this._userProfession = document.querySelector(".profession-input");
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userDescription: this._userDescriptionElement.textContent,
    };
  }

  setUserInfo(userInfo) {
    const { userNameSelector, userDescriptionSelector } = userInfo;
    this._userName.textContent = userNameSelector;
    this._userProfession.textContent = userDescriptionSelector;
  }
}
