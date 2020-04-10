const helpers = require('../utils/helpers');
class AccountDetailsPage {
  /**
   * --------------------------------Element Locators------------------------------------
   */
  // Account Details Elements
  get firstNameInput() {
    return $('input[id=\'account-details-first-name\']');
  }

  get lastNameInput() {
    return $('input[id=\'account-details-last-name\']');
  }

  get emailInput() {
    return $('input[id=\'account-details-email\']');
  }

  get oldPasswordInput() {
    return $('input[id=\'account-details-old-password\']');
  }

  get newPasswordInput() {
    return $('input[id=\'password\'] ');
  }

  get saveChangesBtn() {
    return $(
      '#wrap > div > div > div.span10.content > div > div > form > div.span16.text-center.vspace2 > button',
    );
  }

  /**
   *  Methods
   */

  // -----------------------------------Left Nav Menu Methods-----------------------------------//

  // ---------------------------------Account Details Methods---------------------------------//
  enterFirstName(fname) {
    helpers.setValue(this.firstNameInput, fname);
  }

  enterLastName(lname) {
    helpers.setValue(this.lastNameInput, lname);
  }

  checkEmailId(attribute) {
    const email = helpers.getAttribute(this.emailInput, attribute);
    return email;
  }

  enterOldPassword(opass) {
    helpers.setValue(this.oldPasswordInput, opass);
  }

  enterNewPassword(npass) {
    helpers.setValue(this.newPasswordInput, npass);
  }

  clickSaveChangesBtn() {
    helpers.click(this.saveChangesBtn);
  }
}

module.exports = new AccountDetailsPage();
