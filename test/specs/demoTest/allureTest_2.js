const expect = require('chai').expect;
const assert = require('assert');

describe('Check Allure report', () => {
    it('Test-2-1:Failed Test ', () => {
     browser.navigateTo('https://amazon.in');
     $(`#nav-xshop > a:nth-child(3)`).click();
     browser.pause(2000);
      expect(true).to.be.false;
    });
  
    it('Test-2-2: Passed Test ', () => {
      expect(true).to.be.true;
    });
  
    it.skip('Test-2-3: Skipped Test ', () => {
      expect(true).to.be.false;
    });
  
  });
  