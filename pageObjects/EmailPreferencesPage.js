class EmailPrefrencesPage {
  /**
   * ============================ Locators==============================
   */

  // NewsLetter Preferences
  get newsSubscriptionPrefRadio() {
    return $$("//input[@type='radio' and @name='unsubscribed_newsletter']");
  }

  // Language Selection
  get languageSelect() {
    return $("select[id='email-preferences-language]");
  }

  // Country Selection
  get countrySelect() {
    return $("select[id='email-preferences-country']");
  }

  // Notifications
  get notificationRadio() {
    return $$("//input[@name='unsubscribed_remarketing']");
  }

  get saveChangesBtn() {
    return $(
      '#wrap > div > div > div.span10.content > div > div > form > div.span16.text-center.vspace2 > button',
    );
  }

  /**
   * ============================ Methods==============================
   */

  // NewsLetter Preferences
  clickNewsletterPreferences(subscription) {
    const newsSubcription = this.newsSubscriptionPrefRadio();
    newsSubcription.forEach((element) => {
      if (element.isEnabled()) {
        const attribValue = element.getAttribute('value');
        if (subscription === attribValue) {
          element.click();
        }
      }
    });
  }

  // Language Selection
  selectPreferredLanguage(index) {
    if (this.languageSelect.isEnabled()) {
      this.languageSelect.selectByIndex(index);
    }
  }

  // Country Selection
  selectPreferredCountry(country) {
    if (this.countrySelect.isEnabled()) {
      this.countrySelect.selectByVisibleText(country);
    }
  }

  // Notifications Selection
  clickNotificationRadio(status) {
    const notify = this.notificationRadio();
    notify.forEach((element) => {
      if (element.isEnabled()) {
        const notifyAttrb = element.getAttribute('value');
        if (status === 'on' && notifyAttrb === 'subscribed') {
          element.click();
        } else {
          element.click();
        }
      }
    });
  }

  // Save Changes Btn
  clickSaveChangesBtn() {
    this.saveChangesBtn.click();
  }
}

module.exports = new EmailPrefrencesPage();
