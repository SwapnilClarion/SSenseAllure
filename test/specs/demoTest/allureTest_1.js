const productDescriptionPage = require('../../../pageObjects/ProductDescriptionPage');
const shoppingBagPage = require('../../../pageObjects/ShoppingBagPage');
const testData = require('../../../resources/websiteCheckoutPageDataProvider');
const checkoutPage = require('../../../pageObjects/CheckoutPage');
const productListingPage = require('../../../pageObjects/ProductListingPage');
const navigationPage = require('../../../pageObjects/NavigationPage');
const loginPage = require('../../../pageObjects/LoginPage');
const randomData = require('../../../utils/random_data');
const accountDetailsPage = require('../../../pageObjects/AccountDetailsPage');
const orderConfirmationPage = require('../../../pageObjects/OrderConfirmationPage');
const expect = require('chai').expect;
const assert = require('assert');

describe('Check Allure report', () => {
    it('Test-1-1:Failed Test ', () => {
      navigationPage.clickOnMenOuterLink();
      productListingPage.clickFirstProduct();
      const sizeCheck = browser.waitUntil(() => {
        return productDescriptionPage.selectSize();
      }, 5000);

      productDescriptionPage.addSize(sizeCheck);
      productDescriptionPage.clickAddToBag();
      expect(true).to.be.false;
    });
  
    it('Test-1-2: Passed Test ', () => {
      expect(true).to.be.true;
    });
  
    it.skip('Test-1-3: Skipped Test ', () => {
      expect(true).to.be.false;
    });
  
  });
  