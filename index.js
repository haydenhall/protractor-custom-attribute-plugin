function setup(config) {
  by.addLocator("customAttribute", (value) => {
    const selector = `['${this.config.attributeName}'='${value}']`;
    return document.querySelector(selector);
  });
}

module.exports = {
  setup: setup,
  postTest: setup
}
