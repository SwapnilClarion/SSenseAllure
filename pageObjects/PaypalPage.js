const Helpers = require('../utils/helpers');
const websiteCheckoutPageDataProvider = require('../resources/websiteCheckoutPageDataProvider');

class PaypalPage {
  /** *
   *  ------------------------------------Paypal Locators------------------------------------
   */

  get loginBtn() {
    return $(
      '#loginSection > div > div.span11.alignRight.baslLoginButtonContainer > a',
    );
  }

  /** *
   *  ------------------------------------Pay with Paypal Login Page Locators------------------------------------
   */
  get login_EmailInput() {
    return $('#email');
  }

  get login_PasswordInput() {
    return $('#password');
  }

  get payPalNextBtn() {
    return $('button[id="btnNext"]');
  }

  get login_RemeberMeCheckBox() {
    return $('#keepMeLoggedIn');
  }

  get login_LoginBtn() {
    return $('#btnLogin');
  }

  get login_ForgotLnk() {
    return $('#content > div.forgotLink > a');
  }

  get login_CancelAndReturnLnk() {
    return $('#cancelLink');
  }

  /**
   * ----------------------------------------------Paypal Checkout Page Locators-----------------------------------------
   */
  get checkout_payWithVisaRadioBtn() {
    return $('#CC-MFVMLB2BJ7AR4-funding-option');
  }

  get checkout_payWithCreditUnionRadioBtn() {
    return $('#BA-E636Z6SZTHBK4-funding-option');
  }

  get checkout_paymentContinueBtn() {
    return $("button[name='payment-submit-btn']");
  }

  get checkout_cancelAndReturnLnk1() {
    return $('#root > div > div > main > div.CancelLink_container_27tB8 > a');
  }

  get checkout_cancelAndReturnLnk2() {
    // return $(`#37 258827909615062990-make-preferred`);
  }

  /**
   * ----------------------------------------------Methods-----------------------------------------
   */

  clickLoginBtn() {
    Helpers.click(this.loginBtn);
  }

  enterLoginEmail() {
    Helpers.setValue(
      this.login_EmailInput,
      websiteCheckoutPageDataProvider.PP_Username,
    );
  }

  clickNextBtn() {
    Helpers.click(this.payPalNextBtn);
  }

  enterLoginPassword() {
    Helpers.setValue(
      this.login_PasswordInput,
      websiteCheckoutPageDataProvider.PP_Password,
    );
  }

  clickRememberMeChkBox() {
    Helpers.click(this.login_RemeberMeCheckBox);
  }

  clickPayPalLoginBtn() {
    Helpers.click(this.login_LoginBtn);
  }

  clickForgotLink() {
    Helpers.click(this.login_ForgotLnk);
  }

  clickCancelAndReturnBtn() {
    Helpers.click(this.login_CancelAndReturnLnk);
  }

  /**
   * ----------------------------------------------Paypal Checkout Page Methods-----------------------------------------
   */
  clickPayWithVisaRadioBtn() {
    Helpers.click(this.checkout_payWithVisaRadioBtn);
  }

  clickPayWithCreditUnionRadioBtn() {
    Helpers.click(this.checkout_payWithCreditUnionRadioBtn);
  }

  clickContinueBtn() {
    Helpers.click(this.checkout_paymentContinueBtn);
  }

  clickCancelAndReturnBtn1() {
    Helpers.click(this.checkout_cancelAndReturnLnk1);
  }

  clickCancelAndReturnBtn2() {
    Helpers.click(this.checkout_cancelAndReturnLnk2);
  }
}

module.exports = new PaypalPage();
