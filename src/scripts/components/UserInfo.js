export class UserInfo {
  constructor(userNameSelector, userProfessionSelector, avatarSelector) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userProfessionElement = document.querySelector(
      userProfessionSelector
    );
    this._avatarSelectorElement = document.querySelector(avatarSelector)
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userProfession: this._userProfessionElement.textContent,
      userAvatar: this._avatarSelectorElement.textContent
    };
  }

  setUserInfo(userInfo) {
    const { name, profession, avatar } = userInfo;
    this._userNameElement.textContent = name;
    this._userProfessionElement.textContent = profession;
    this._avatarSelectorElement.textContent = avatar;
  }
}
