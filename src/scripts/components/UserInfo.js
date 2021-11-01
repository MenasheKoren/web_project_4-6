export class UserInfo {
  constructor(userNameSelector, userProfessionSelector, avatarSelector) {
    this._userNameElement = document.querySelector(userNameSelector);
    this._userProfessionElement = document.querySelector(
      userProfessionSelector
    );
    this._avatarSelectorElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      userName: this._userNameElement.textContent,
      userProfession: this._userProfessionElement.textContent,
      userAvatar: this._avatarSelectorElement.src,
    };
  }

  setUserInfo(userInfo) {
    const { name, about, avatar } = userInfo;
    this._userNameElement.textContent = name;
    this._userProfessionElement.textContent = about;
    this._avatarSelectorElement.src = avatar;
  }
}
