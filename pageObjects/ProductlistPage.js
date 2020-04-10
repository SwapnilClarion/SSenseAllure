/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
/* eslint-disable getter-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable prettier/prettier */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */

class ProductlistPage {
  get firstproduct() {
    return $('div.browsing-product-list > figure > a');
  }

  get productname() {
    return $('div.content > h2');
  }

  clickOnFirstProduct() {
    this.firstproduct.click();
  }

  fetchProductName() {
    return this.productname.getText();
  }
}

module.exports = new ProductlistPage();
