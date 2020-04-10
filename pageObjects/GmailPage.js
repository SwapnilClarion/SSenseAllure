const helpers = require('../utils/helpers');
class GmailPage {
  // Locators for Gmail login
  get userEmail() {
    return $('input#identifierId');
  }

  get emailNextBtn() {
    return $('div#identifierNext');
  }

  get userPassword() {
    return $('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input');
  }

  get passwordNextBtn() {
    return $('div#passwordNext');
  }

  get matchedMail() {
    return $(
      "//div[contains(@data-tooltip,'Settings')]" +
        '/parent::div/parent::div/parent::div/parent::div/parent::div/' +
        'following-sibling::div/div/div[1]/div[1]/div[2]/div[4]/div[2]/div/table/tbody/tr',
    );
  }
  
  get actualOrderID() {
    return $('span.il');
  }
  
  get SignInText() {
    return $("//span[contains(text(),'Sign in')]");
  }

  get noMessagesTxt() {
    return $('td.TC');
  }

  // Locator on gmail page
  // get searchbox() {return $("input[placeholder='Search mail']")};
  get emptyMessageTable() {
    return $(
      'div.ae4.UI > div:nth-child(3) >table.cf.TB>tbody>tr:nth-child(1)>td.TC',
    );
  }

  get searchBtn() {
    return $('#aso_search_form_anchor > button.gb_pf.gb_qf');
  }

  get searchbox() {
    return $('#gs_lc50 > input:nth-child(1)');
  }

  // ---------------------------------- Methods --------------------
  loginToGmail(email, pass) {
    helpers.setValue(this.userEmail, email);
    helpers.click(this.emailNextBtn);
    helpers.setValue(this.userPassword, pass);
    helpers.click(this.passwordNextBtn);
  }

  enterSearchInput(orderID) {
    helpers.setValue(this.searchbox, orderID);
  }

  clickOnMatchedMail() {
    helpers.click(this.matchedMail);
  }

  getActualOrderId() {
    const oid = this.actualOrderID.getText();
    return oid;
  }

  clickSearchBtn() {
    helpers.click(this.searchBtn);
  }
}

module.exports = new GmailPage();
