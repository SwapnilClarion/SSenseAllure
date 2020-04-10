class OrderHistoryPage {
  /**
   * ===============================================Locators====================================
   */
  get previousOrderListItems() {
    return $$("//div[@class='table vspace2']/div");
  }

  get modifyOrderReasons() {
    return $("select[id='order-history-on-hold-reason-input']");
  }

  /**
   * ===============================================Methods====================================
   */

  selectModifyOrderReasons(reason) {
    this.modifyOrderReasons.selectByVisibleText(reason);
  }
}

module.exports = new OrderHistoryPage();
