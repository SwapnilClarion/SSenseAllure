class AccountLeftNavPage {
  //  Left Navigation Elements
  get accountDetailsLnk() {
    return $('#wrap > div > div > div.span3 > div > ul > li:nth-child(1) > a');
  }

  get emailPreferencesLnk() {
    return $('#wrap > div > div > div.span3 > div > ul > li:nth-child(2) > a');
  }
}

module.exports = new AccountLeftNavPage();
