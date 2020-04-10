/* eslint-disable consistent-return */
const Helpers = require('../utils/helpers');

class LoginPage {
  get loginLink() {
    return $('a=login');
  }

  // Locators for login
  get userNameInput() {
    return $('input#login-form-email');
  }

  get userPasswordInput() {
    return $('input#login-form-password');
  }

  get loginButton() {
    return $('#submitLogin');
  }

  get loginHeading() {
    return $('form.login>div>div:nth-child(1) > h1');
  }

  get notificationWishList() {
    return $('div.notification-message-container>span>span>span');
  }

  // Locators for signup
  get registerEmailInput() {
    return $('#register-form-email-address');
  }

  get registerPasswordInput() {
    return $('#password');
  }

  get notificationMsg() {
    return $(
      '#app > div.body-wrapper > div.notification-manager-container > span > div > div > span > span > span',
    );
  }

  // Select Category (Genders while signup)
  get mensPromoRadioBtn() {
    return $('#select_gender_men_form');
  }

  get womensPromoRadioBtn() {
    return $('#select_gender_women_form');
  }

  get noThanksPromoRadioBtn() {
    return $('#select_no_thanks_form');
  }

  get createAccBtn() {
    return $('#submitRegister');
  }

  /** ========================================= Locator Methods ====================================================== */

  // Login Link
  clickLoginLnk() {
    Helpers.click(this.loginLink);
  }

  // Login
  enterUserNameInput(username) {
    Helpers.setValue(this.userNameInput, username);
  }

  enterUserPasswordInput(password) {
    Helpers.setValue(this.userPasswordInput, password);
  }

  clickLoginBtn() {
    Helpers.click(this.loginButton);
  }

  // SignUp
  enterSignUpEmailId(email) {
    Helpers.setValue(this.registerEmailInput, email);
  }

  enterSignUpPassword(password) {
    Helpers.setValue(this.registerPasswordInput, password);
  }

  clickMensPromo() {
    Helpers.click(this.mensPromoRadioBtn);
  }

  clickWomensPromo() {
    Helpers.click(this.womensPromoRadioBtn);
  }

  clickNoThanksPromo() {
    Helpers.click(this.noThanksPromoRadioBtn);
  }

  clickCreateAccBtn() {
    Helpers.click(this.createAccBtn);
  }

  viewNotificationMsg() {
    try {
      if (this.notificationMsg.isExisting()) {
        return this.notificationMsg.getText();
      }
      return 'New User';
    } catch (error) {
      console.log(`'Error:= ' + error`);
    }
  }

  getLoginHeading() {
    try {
      if (!this.loginHeading.isExisting()) {
        this.loginHeading.waitForExist(5000);
        return this.loginHeading.getText();
      }
      return this.loginHeading.getText();
    } catch (error) {
      console.log(`'Error:= ' + error`);
    }
  }

  isBannerForWishListDisplayed() {
    if (
      this.notificationWishList.isExisting() &&
      this.notificationWishList.isDisplayed()
    ) {
      return true;
    }
    return false;
  }

  getNotificationForWishList() {
    try {
      if (!this.notificationWishList.isExisting()) {
        this.notificationWishList.waitForExist(5000);
        return this.notificationWishList.getText();
      }
      return this.notificationWishList.getText();
    } catch (error) {
      console.log(`Error ==> ${error}`);
    }
  }

  isLoginLinkExist() {
    if (this.loginLink.isExisting() && this.loginLink.isDisplayed()) {
      return true;
    }
    return false;
  }
}

module.exports = new LoginPage();
