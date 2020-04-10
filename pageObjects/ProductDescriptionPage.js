const helpers = require('../utils/helpers');

class ProductDescriptionPage {
  get allSizes() {
    return $$('select#size.vspace2>option');
  }

  get productSize() {
    return $('select#size.vspace2');
  }

  get addToBagBtn() {
    return $('form#addBagForm > div > button.btn-add-to-bag');
  }

  get oneSizeBtn() {
    return $(
      '#product-item > div.product-item-container.row-fluid > div.span3.product-cta-container ' +
        '> div > div > div > div > div > div > div.add-to-bag-form > div.span16 ' +
        '> div > div.button.full-width.onesize',
    );
  }

  get checkoutBtn() {
    return $(
      '#product-item > div.product-item-container.row-fluid > div.span3.product-cta-container > ' +
        ' div > div > div > div > div > div > div.add-to-bag-form > div.span16.vspace1.btn-checkout > a',
    );
  }

  get wishlistBtn() {
    return $('.button.heart-icon');
  }

  get inputEmail() {
    return $('#authentication-form-email');
  }

  get oneSizeButton() {
    return $('div.span16 > div > div.button.full-width.onesize');
  }

  get inWishListButton() {
    return $(
      'div.add-to-bag-form > div:nth-child(3) > form > div > div > button > span.button-label',
    );
  }

  get wishListNav() {
    return $(
      'div > nav.span7.header-nav.header-nav-right > ul.nav.hidden-tablet-landscape > li:nth-child(3) > a',
    );
  }

  get productOnPDP() {
    return $('div.product-description-container>div>h2');
  }

  selectSize() {
    let retSize = '';

    const allSize = this.allSizes;

    for (let index = 0; index < allSize.length; index += 1) {
      const element = allSize[index];
      if (
        !element.getText().includes('Sold Out') &&
        !element.getText().includes('Only one left') &&
        !element.getText().includes('SELECT A SIZE')
      ) {
        retSize = element.getText();
        break;
      }
    }
    return retSize;
  }

  addSize(sizeValue) {
    if (sizeValue !== null || sizeValue !== undefined || sizeValue !== '') {
      helpers.select(this.productSize, sizeValue, 'byVisibleText');
    }
  }

  clickAddToBag() {
    helpers.click(this.addToBagBtn);
  }

  clickCheckoutBtn() {
    helpers.click(this.checkoutBtn);
  }

  clickWishlistBtn() {
    helpers.click(this.wishlistBtn);
  }

  enterEmailAddress(email) {
    helpers.setValue(this.inputEmail, email);
  }

  isOneSizeButtonExist() {
    if (this.oneSizeButton.isExisting() && this.oneSizeButton.isDisplayed()) {
      return true;
    }
    return false;
  }

  getWishlistButtonText() {
    return helpers.getText(this.inWishListButton);
  }

  clickWishListNavMenu() {
    helpers.click(this.wishListNav);
  }

  getProductNameOnPDP() {
    return helpers.getText(this.productOnPDP);
  }

  isAddToBagButtonExist() {
    if (this.addToBagBtn.isExisting() && this.addToBagBtn.isDisplayed()) {
      return true;
    }
    return false;
  }
}
module.exports = new ProductDescriptionPage();
