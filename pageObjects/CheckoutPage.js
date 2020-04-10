const helpers = require('../utils/helpers');
const websiteCheckoutPageDataProvider = require('../resources/websiteCheckoutPageDataProvider');

class CheckoutPage {
  /** *
   * Locators : Shipping Address Section
   */
  get fnameInput() {
    return $('input[name="fname"]');
  }

  get lnameInput() {
    return $('input[name="lname"]');
  }

  get addressInput() {
    return $('input[id="address1"]');
  }

  get companyInput() {
    return $('input[name="shipping_company"]');
  }

  get cityInput() {
    return $('input[name="city"]');
  }

  get postCodeInput() {
    return $('input[id="postCode"]');
  }

  get countryInput() {
    return $('select[name="country"]');
  }

  get stateInput() {
    return $('select[name="state"]');
  }

  get phoneInput() {
    return $('input[name="phone"]');
  }

  /** *
   * Locators : Shipping Payment Options
   */
  get creditCardInput() {
    return $('input[id="credit"]');
  }

  get paypalInput() {
    return $('input[id="paypal"]');
  }

  get aliPayInput() {
    return $('input[id="alipay"]');
  }

  /** *
   * Locators : Saved Shipping Address Section
   */

  // get selectsavedAddrLnk() {return $(`//div[@class='dropdown-select-arrow caret']`);}
  get selectsavedAddrLink() {
    return $(
      '#shippingAddressForm > div:nth-child(1) > div > div > div.span8.dropdown-wrapper > div > div.dropdown-select-toggle > div.dropdown-select-label',
    );
  }

  get selectsavedAddrLink1() {
    return $(
      '#address-wrapper > div.span16 > div > div > div.span8.dropdown-wrapper > div > div.dropdown-select-header > div > div',
    );
  }

  get selectsavedAddr() {
    return $(
      '#shippingAddressForm > div:nth-child(1) > div > div > div.span8.dropdown-wrapper > div > div.dropdown-select-options > div:nth-child(1)',
    );
  }

  get selectsavedAddr1() {
    return $(
      '#address-wrapper > div.span16 > div > div > div.span8.dropdown-wrapper > div > div.dropdown-select-addresses > div:nth-child(1) > div > label > div > p:nth-child(2)',
    );
  }

  /** *
   * Locators : Credit/Debit Card
   */
  get cardNumberInput() {
    return $("//input[@id='ccNum' and @type='tel']");
  }

  get expiryMonthInput() {
    return $("select[id='expiryMonth']");
  }

  get expiryYearInput() {
    return $("select[id='expiryYear']");
  }

  get holderNameInput() {
    return $("input[id='holderName']");
  }

  get cvvInput() {
    return $("input[id='ccCVV']");
  }

  /** *
   * Locators : Shipping Check Section
   */
  get samAsShippingCheckBox() {
    return $("input[id='sameAsShipping']");
  }

  /** *
   * Locators : Place Order Section
   */
  get placeOrderBtn() {
    return $('#checkoutSubmitButton');
  }

  /** *
   * Locators : Promotional Coupons Section
   */
  get couponCodeInput() {
    return $("//input[@placeholder='PROMOTIONAL CODE']");
  }

  get applyCouponBtn() {
    return $("//div[@class='span16 couponButton']/button");
  }

  /** *
   * Locators : Paypal Section
   */
  get payPalBtn() {
    // return $('div[id="paypal-animation-container"]');
    return $('#paypal-animation-container');
  }

  // Paypal Popup
  // get payPalLoginBtn() {
  //   return $("//button[text()='Log In']");
  // }

  get payPalLoginEmailInput() {
    // return $(`input[name="login_email"]`);
    return $('#email');
  }

  get payPalNextBtn() {
    return $('button[id="btnNext"]');
  }

  get payPalPasswordInput() {
    // return $(`input[name="login_password"]`);
    return $('#password');
  }

  get payPalLoginBtn() {
    // return $(`button[name="btnLogin"]`);
    return $(
      '#loginSection > div > div.span11.alignRight.baslLoginButtonContainer > a',
    );
  }

  get payWithVisaRadioBtn() {
    return $("input[id='CC-MFVMLB2BJ7AR4-funding-option']");
  }

  get payWithCreditUnionRadioBtn() {
    return $("input[id='BA-E636Z6SZTHBK4-funding-option']");
  }

  get paymentSubmitBtn() {
    return $("button[name='payment-submit-btn']");
  }

  get cancelAndReturnToSSense() {
    return $("//a[@class='CancelLink_cancel-link_2uud4']");
  }

  get payPalFinalLoginBtn() {
    return $('#btnLogin');
  }

  get paypalExpressBtn() {
    return $('#paypalExpressButton');
  }

  /** *
   * Locators : AliPay Section
   */
  get checkoutSubmitBtn() {
    return $('#checkoutSubmitButton > span');
  }

  get orderTotalAlert() {
    return $(
      '#app > div.body-wrapper > div.notification-manager-container > span > div > div > span > span > span',
    );
  }

  clickSavedAddress() {
    if (this.selectsavedAddrLink.isDisplayed()) {
      helpers.click(this.selectsavedAddrLink);
      helpers.click(this.selectsavedAddr);
    } else if (this.selectsavedAddrLink1.isDisplayed()) {
      helpers.click(this.selectsavedAddrLink1);
      helpers.click(this.selectsavedAddr1);
    }
  }

  // ----------------------------------------------------Shipping Address-------------------------------------
  //   $(selector).click()
  enterFnameInput(fname) {
    helpers.setValue(this.fnameInput, fname);
  }

  enterLnameInput(lname) {
    helpers.setValue(this.lnameInput, lname);
  }

  enterAddressInput(address) {
    helpers.setValue(this.addressInput, address);
  }

  enterCompanyInput(company) {
    helpers.setValue(this.companyInput, company);
  }

  enterCityInput(city) {
    helpers.setValue(this.cityInput, city);
  }

  enterPostalCodeInput(postalNo) {
    helpers.setValue(this.postCodeInput, postalNo);
  }

  enterCountryInput(country) {
    helpers.select(this.countryInput, country, 'byVisibleText');
  }

  enterStateInput(stateIndex) {
    helpers.select(this.stateInput, stateIndex, 'byIndex');
  }

  enterPhoneNoInput(phoneNo) {
    helpers.setValue(this.phoneInput, phoneNo);
  }

  // Payment Method-------------------------------------
  /** *
   * Select Payment Method
   * @param {String} payMethod
   * Payment: credit, paypal , alipay
   */
  selectPaymentMethod(payMethod) {
    switch (payMethod) {
      case 'credit':
        helpers.click(this.creditCardInput);
        break;
      case 'paypal':
        helpers.click(this.paypalInput);
        break;
      case 'alipay':
        helpers.click(this.aliPayInput);
        break;

      default:
        break;
    }
  }

  clickPayPalBtn() {
    helpers.click(this.payPalBtn);
  }

  clickPaypalExpressBtn() {
    helpers.click(this.paypalExpressBtn);
  }

  // Card Details
  enterCardNumber(cardNo) {
    helpers.setValue(this.cardNumberInput, cardNo);
  }

  enterCardHolderName(name) {
    helpers.setValue(this.holderNameInput, name);
  }

  selectCardExpiryMonth(expMonth) {
    helpers.select(this.expiryMonthInput, expMonth, 'byVisibleText');
  }

  selectCardExpiryYear(expYear) {
    helpers.select(this.expiryYearInput, expYear, 'byVisibleText');
  }

  enterCVVCode(cvv) {
    helpers.setValue(this.cvvInput, cvv);
  }

  clickSameAsShipping() {
    helpers.click(this.samAsShippingCheckBox);
  }

  // Place Order
  clickPlaceOrderBtn() {
    helpers.click(this.placeOrderBtn);
  }

  // ------------------------------------- Methods------------------------------------------------------ //

  /** *
   * Methods : PayPal Payment Process Section
   */
  clickPayPalLoginBtn() {
    helpers.click(this.payPalLoginBtn);
  }

  enterPaypalEmail(email) {
    helpers.setValue(this.payPalLoginEmailInput, email);
  }

  clickPayPalNextBtn() {
    helpers.click(this.payPalNextBtn);
  }

  enterPayPalPassword(password) {
    helpers.setValue(this.payPalPasswordInput, password);
  }

  clickPayPalFinalLoginBtn() {
    helpers.click(this.payPalFinalLoginBtn);
  }

  selectPayWithVisaRadioBtn() {
    helpers.click(this.payWithVisaRadioBtn);
  }

  selectPayWithCreditUnionRadioBtn() {
    helpers.click(this.payWithCreditUnionRadioBtn);
  }

  clickPaymentSubmitBtn() {
    helpers.click(this.paymentSubmitBtn);
  }

  clickCancelAndReturnSsense() {
    helpers.click(this.cancelAndReturnToSSense);
  }

  // AliPay
  clickCheckoutSubmitBtn() {
    helpers.click(this.checkoutSubmitBtn);
  }

  // ------------------------------New Shipping Address---------
  /** * Add New Shipping Address Method
   * @param {String} fname
   * @param {String} lname
   * @param {String} address
   * @param {String} city
   * @param {String} postalCode
   * @param {String} country
   * @param {String} state
   * @param {String} phoneno
   *
   */
  addNewShippingAddress(
    fname,
    lname,
    address,
    city,
    postalCode,
    country,
    state,
    phoneno,
  ) {
    this.enterFnameInput(fname);
    this.enterLnameInput(lname);
    this.enterAddressInput(address);
    this.enterCityInput(city);
    this.enterPostalCodeInput(postalCode);
    this.enterCountryInput(country);
    this.enterStateInput(state);
    this.enterPhoneNoInput(phoneno);
  }

  /** * Credit Card Method
   *
   * Call this method for carrying out the credit card payment process.
   */
  paymentWithCreditCard() {
    this.enterCardNumber(websiteCheckoutPageDataProvider.CARD_NUMBER);
    this.selectCardExpiryMonth(websiteCheckoutPageDataProvider.EXPIRY_MONTH);
    this.selectCardExpiryYear(websiteCheckoutPageDataProvider.EXPIRY_YEAR);
    this.enterCardHolderName(websiteCheckoutPageDataProvider.CARD_HOLDER_NAME);
    this.enterCVVCode(websiteCheckoutPageDataProvider.SECURITY_CODE);
  }
}

module.exports = new CheckoutPage();
