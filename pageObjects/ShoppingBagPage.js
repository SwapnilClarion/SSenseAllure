const helpers = require('../utils/helpers');

class ShoppingBag {
  // get userEmailInput(){ return $('input[name="email"]'); }
  get userEmailInput() {
    return $('#authentication-form-email');
  }

  get userPasswordInput() {
    return $('input[name="password"]');
  }

  get submitLoginBtn() {
    return $('button[id="submitLogin"]');
  }

  get productRemoveIcon() {
    return $$("//i[@class='fa fa-small-close']");
  }

  get forgotPasswordLnk() {
    return $(
      "//div[@class='span16 vspace1 smartphone-landscape-full-fluid-width']/a",
    );
  }

  get emailCheckoutBtn() {
    return $('#submitLogin');
  }

  get proceedToCheckoutOnShoppingBag() {
    return $(
      '#wrap > div > div > div.span8.tablet-portrait-full-fluid-width.hidden-tablet-portrait > div > div.span16.vspace3.text-center > a',
    );
  }

  get proceedToCheckoutBtn() {
    return $('#submitLogin');
  }

  clickForgotPasswordLnk() {
    helpers.click(this.forgotPasswordLnk);
  }

  clickAcceptEmailCheckoutBtn() {
    helpers.click(this.emailCheckoutBtn);
  }

  enterUserEmail(email) {
    helpers.setValue(this.userEmailInput, email);
  }

  enterUserPassword(password) {
    helpers.setValue(this.userPasswordInput, password);
  }

  clickLoginBtn() {
    helpers.click(this.submitLoginBtn);
  }

  clickProductRemoveIcon() {
    helpers.click(this.clickProductRemoveBtn);
  }

  clickProceedToCheckoutOnShoppingBag() {
    helpers.click(this.proceedToCheckoutOnShoppingBag);
  }

  clickProceedToCheckoutBtn() {
    this.proceedToCheckoutBtn.click();
  }
}

module.exports = new ShoppingBag();
