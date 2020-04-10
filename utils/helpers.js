class Helpers {
  click(selector) {
    try {
      if (!selector.isExisting()) {
        selector.waitForExist(10000);
        selector.click();
      } else {
        selector.click();
      }
    } catch (error) {
      console.log('Error:= ' + error);
    }
  }

  setValue(selector, txtValue) {
    try {
      if (!selector.isExisting()) {
        selector.waitForExist(10000);
        // selector.click();
        selector.setValue(txtValue);
      } else {
        // selector.click();
        selector.setValue(txtValue);
      }
    } catch (error) {
      console.log('Error:= ' + error);
    }
  }

  /** To Select value from Dropdown Element
   *  byVisibleText,byAttribute,byIndex
   */
  select(selector, txtValue, typeOfSelect) {
    switch (typeOfSelect) {
      case 'byVisibleText':
        try {
          if (!selector.isExisting()) {
            selector.waitForExist(10000);
            selector.selectByVisibleText(txtValue);
          } else {
            selector.selectByVisibleText(txtValue);
          }
        } catch (error) {
          console.log('Error:= ' + error);
        }
        break;
      case 'byAttribute':
        //   Needs to be customized
        // try {
        //     if (!selector.isExisting()) {
        //       selector.waitForExist(3000);
        //       selector.selectByAttribute(attribute, value)
        //     } else {
        //       selector.selectByAttribute(attribute, value)
        //     }
        //   } catch (error) {
        //     console.log('Error:= ${error}');
        //   }
        break;
      case 'byIndex':
        try {
          if (!selector.isExisting()) {
            selector.waitForExist(10000);
            selector.selectByIndex(txtValue);
          } else {
            selector.selectByIndex(txtValue);
          }
        } catch (error) {
          console.log('Error:= ' + error);
        }
        break;

      default:
        break;
    }
  }

  /** To get text value of a particular Element
   *
   */
  getText(selector) {
    let elementTxt = '';
    try {
      if (!selector.isExisting()) {
        selector.waitForExist(10000);
        elementTxt = selector.getText();
      } else {
        elementTxt = selector.getText();
      }
    } catch (error) {
      console.log('Error:= ' + error);
    }
    return elementTxt;
  }

  /** To get text value of a particular Element
   *
   */
  getAttribute(selector, attribute) {
    let elementTxt = '';
    try {
      if (!selector.isExisting()) {
        selector.waitForExist(10000);
        elementTxt = selector.getAttribute(attribute);
      } else {
        elementTxt = selector.getAttribute(attribute);
      }
    } catch (error) {
      console.log(`Error:= ' + error`);
    }
    return elementTxt;
  }

  getProductID(url) {
    const str = url.split('/');
    const prodid = str[str.length - 1];
    return prodid;
  }
}

module.exports = new Helpers();
