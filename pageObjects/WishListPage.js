const helpers = require('../utils/helpers');

class WishListPage {
  get WishListHeading() {
    return $(`header > div > h1`);
  }

  get productNameOnWishlist() {
    return $('div>p.product-name-plp');
  }

  get extractProductURL() {
    return $('div > figure > a');
  }

  getWishlistHeading() {
    return helpers.getText(this.WishListHeading);
  }

  getProductNameOnWishList() {
    return helpers.getText(this.productNameOnWishlist);
  }

  extractProdUrlOnWishList() {
    return helpers.getAttribute(this.extractProductURL, 'href');
  }
}
module.exports = new WishListPage();
