class Homepage {
  pressKey(key) {
    try {
      browser.keys(key);
    } catch (error) {
      throw new Error(`Could not press key: ${key} on the keyboard`);
    }
  }
}

module.export = new Homepage();
