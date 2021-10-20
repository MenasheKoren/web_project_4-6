export class UserInfo {
  constructor(userNameSelector, userProfessionSelector) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userProfessionElement = document.querySelector(
      userProfessionSelector
    );
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userProfession: this._userProfessionElement.textContent,
    };
  }

  setUserInfo(userInfo) {
    const { name, profession } = userInfo;
    this._userNameElement.textContent = name;
    this._userProfessionElement.textContent = profession;
  }
}
