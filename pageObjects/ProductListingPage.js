const helpers = require('../utils/helpers');

class ProductListingPage {
  constructor() {
    // const subLinks = [
    //   'Relevance',
    //   'Latest arrivals',
    //   'Price: Low to high',
    //   'Price: High to low',
    // ];
  }

  // Right Section
  get sortLink() {
    return $(
      "//div[@class='span2 browsing-column browsing-right-column hidden-tablet-landscape']/div/nav[2]/div/a",
    );
  }

  get sortSubLinks() {
    return $$(
      "//div[@class='browsing-page-root browsing-section-container view']//div[@class='span2 " +
        "browsing-column browsing-right-column hidden-tablet-landscape']/div/nav[2]/div/div/ul/li/a",
    );
  }

  get firstProduct() {
    return $('div.browsing-product-list>figure:nth-child(1)');
  }

  get activePriceLowToHigh() {
    return $(
      '#wrap > div > div.span2.browsing-column.browsing-right-column.hidden-tablet-landscape > div > ' +
        'nav:nth-child(2) > div > div > ul > li.active > a',
    );
  }

  get oneSizeProduct() {
    return $('div.browsing-product-list>figure:nth-child(2)');
  }

  // Right Section Methods
  clickSortLnk() {
    helpers.click(this.sortLink);
  }

  clickSortSubLinks(sortByLnk) {
    this.sortSubLinks.forEach((element) => {
      if (element.getText() === sortByLnk) {
        element.click();
      }
    });
  }

  clickFirstProduct() {
    helpers.click(this.firstProduct);
  }

  clickOneSizeProduct() {
    helpers.click(this.oneSizeProduct);
  }
}

module.exports = new ProductListingPage();
