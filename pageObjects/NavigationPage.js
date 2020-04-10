const websiteCheckoutPageDataProvider = require('../resources/websiteCheckoutPageDataProvider');
const helpers = require('../utils/helpers');

class NavigationPage {
  get searchLink() {
    return $('a=search');
  }

  get searchInput() {
    return $("input[name='search']");
  }

  get womenGenderLink() {
    return $('div.search > div:nth-child(2) > div > ul > li:nth-child(2)');
  }

  get menGenderLink() {
    return $('.genders=Men');
  }

  get menOuterLink() {
    return $('a#men-link');
  }

  get womenOuterLink() {
    return $('a#women-link');
  }

  get englishLink() {
    return $('a=English');
  }

  get loginLink() {
    return $('a=login');
  }

  get wishlistLink() {
    return $('a=wishlist');
  }

  get shoppingbaglink() {
    return $("//a[contains(text(),'shopping bag')]");
  }

  get langMenu() {
    return $(
      "//ul[@class='nav hidden-tablet-landscape']/li//div[@class='popover-center']",
    );
  }

  get languagesList() {
    return $$(
      "//ul[@class='nav hidden-tablet-landscape']/li//div[@class='popover-center']/div/ul/li",
    );
  }

  // Left navigations
  get shoeCategoryLink() {
    return $('#category-list > li:nth-child(5) > a');
  }

  get accessoryCategoryLink() {
    return $('#category-list > li:nth-child(2) > a');
  }

  get socksCategoryLink() {
    return $('#category-list > li:nth-child(2) > ul > li:nth-child(11) > a');
  }

  get socsHeading() {
    return $('#listing-title');
  }

  get accessoryHeading() {
    return $('//div/h1[contains(text(),"Accessories")]');
  }

  // Right navigations locators
  get priceLowToHigh() {
    return $(
      '#wrap > div > div.span2.browsing-column.browsing-right-column.hidden-tablet-landscape >' +
        'div > nav:nth-child(2) > div > div > ul > li:nth-child(3) > a',
    );
  }

  clickOnSearchLink() {
    helpers.click(this.searchLink);
  }

  searchInputText1() {
    helpers.setValue(websiteCheckoutPageDataProvider.BRAND_NAME1);
  }

  searchInputText2() {
    helpers.setValue(websiteCheckoutPageDataProvider.BRAND_NAME2);
  }

  searchInputStyledWithTab() {
    helpers.setValue(websiteCheckoutPageDataProvider.PRODUCT_STYLEDWITHTAB);
  }

  searchInputStyledWithoutTab() {
    helpers.setValue(websiteCheckoutPageDataProvider.PRODUCT_STYLEDWITHOUTTAB);
  }

  clickOnWomenGenderLink() {
    helpers.click(this.womenGenderLink);
  }

  clickOnmenGenderLink() {
    helpers.click(this.menGenderLink);
  }

  clickOnMenOuterLink() {
    helpers.click(this.menOuterLink);
  }

  clickOnWomenOuterLink() {
    helpers.click(this.womenOuterLink);
  }

  clickOnEnglishLink() {
    helpers.click(this.englishLink);
  }

  clickOnLoginLink() {
    helpers.click(this.loginLink);
  }

  clickOnWishlistLink() {
    helpers.click(this.wishlistLink);
  }

  clickOnshoppingbaglink() {
    helpers.click(this.shoppingbaglink);
  }

  moveToLangMenu() {
    this.langMenu.moveTo();
  }

  clickShoeCategoryLink() {
    helpers.click(this.shoeCategoryLink);
  }

  clickAccessoryCategoryLink() {
    helpers.click(this.accessoryCategoryLink);
  }

  clickSocksCategoryLink() {
    helpers.click(this.socksCategoryLink);
  }

  clickPriceLowToHighLink() {
    helpers.click(this.priceLowToHigh);
  }
}

module.exports = new NavigationPage();
