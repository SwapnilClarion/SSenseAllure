const randomData = require('../utils/random_data');
const Helpers = require('../utils/helpers');

class AliPay {
  /** *
   *  ------------------------------------AliPay Locators------------------------------------
   */

  get usernameInput() {
    return $("input[name='username']");
  }

  get passwordInput() {
    return $("input[name='password']");
  }

  get loginBtn() {
    return $(
      '#col-transaction-payment > div > div.panel-body > div:nth-child(2) > div:nth-child(2) > button',
    );
  }

  get PaymentFrom() {
    return $(
      '#col-transaction-payment > div > div.panel-body > div:nth-child(1) > div.form-row > div.col.col-input > select',
    );
  }

  get makePaymentBtn() {
    return $(
      '#col-transaction-payment > div > div.panel-body > div:nth-child(2) > div:nth-child(2) > button',
    );
  }

  get backToSsenseBtn() {
    return $(
      '#sim-container > div > div.container > div > div:nth-child(3) > button',
    );
  }

  get wallet_method_heading() {
    return $('#headerw > div.top-section > h1');
  }

  /**
   * ----------------------------------------------Methods-----------------------------------------
   */
  enterUsername(username) {
    Helpers.setValue(this.usernameInput, username);
  }

  enterPassword(password) {
    Helpers.setValue(this.passwordInput, password);
  }

  clickLoginBtn() {
    Helpers.click(this.loginBtn);
  }

  selectPaymentFrom(index) {
    Helpers.select(this.PaymentFrom, index, 'byIndex');
  }

  clickMakePaymentBtn() {
    Helpers.click(this.makePaymentBtn);
  }

  clickBackToSsense() {
    Helpers.click(this.backToSsenseBtn);
  }
  // --------------------------------------------Functions------------------------------//

  alipayPayment() {
    this.enterUsername(randomData.ALIPAY_USERNAME);
    this.enterPassword(randomData.ALIPAY_PASSWORD);

    this.clickLoginBtn();

    this.selectPaymentFrom(0);

    this.clickMakePaymentBtn();

    this.clickBackToSsense();
    // TODO: add validation that we are back to ssense website
  }
}

module.exports = new AliPay();
