const helpers = require('../utils/helpers');

class OrderConfirmationPage {
  /** =======================================Locators============================================== */
  get orderIdAndStatusMsg() {
    return $(
      '#wrap > div > div.header-text.flex-container-column.header-center > p',
    );
  }

  get continueShoppingBtn() {
    return $('#wrap > div > div.confirmation-footer > a');
  }

  get passwordInput() {
    return $('#password');
  }

  get mensPromoRadioBtn() {
    return $('#gender_men_form');
  }

  get womensPromoRadioBtn() {
    return $('#gender_women_form');
  }

  get noThanksPromoRadioBtn() {
    return $('#no_thanks_form');
  }

  get createAccBtn() {
    return $('#submitRegister');
  }

  get paymentMethodTxt() {
    return $(
      '#wrap > div > div.row-fluid.order-history-details.static.vspace4 > div:nth-child(1) > div > div:nth-child(4) > div',
    );
  }

  get OrderConfirmationText() {
    return $(
      '#wrap > div > div.header-text.flex-container-column.header-center > p',
    );
  }

  get orderConfirmationId() {
    return $(
      '#wrap > div > div.row-fluid.order-history-details.static.vspace4 > div:nth-child(1) > div > div:nth-child(1) > h2',
    );
  }
  /** =======================================Methods============================================== */

  enterPasswordInput(password) {
    helpers.setValue(this.passwordInput, password);
  }

  clickMensPromo() {
    helpers.click(this.mensPromoRadioBtn);
  }

  clickWomensPromo() {
    helpers.click(this.womensPromoRadioBtn);
  }

  clickNoThanksPromo() {
    helpers.click(this.noThanksPromoRadioBtn);
  }

  clickCreateAccountBtn() {
    helpers.click(this.createAccBtn);
  }

  checkCreateAccBtn() {
    if (this.createAccBtn.isExisting() && this.createAccBtn.isDisplayed()) {
      return true;
    }
    return false;
  }

  checkPasswordField() {
    if (this.passwordInput.isExisting() && this.passwordInput.isDisplayed()) {
      return true;
    }
    return false;
  }

  getOrderIdAndStatusMsg() {
    let message = helpers.getText(this.orderIdAndStatusMsg);
    return message;
  }

  getPaymentMethod() {
    let payment = helpers.getText(this.paymentMethodTxt);
    return payment;
  }

  clickContinueShoppingBtn() {
    helpers.click(this.continueShoppingBtn);
  }

  getOrderConfirmationText() {
    let confirmationText = helpers.getText(this.OrderConfirmationText);
    return confirmationText;
  }

  getOrderConfirmationID() {
    let orderTxt = helpers.getText(this.orderConfirmationId);
    const oid = orderTxt.split(' ');
    return oid[1];
  }
}

module.exports = new OrderConfirmationPage();

