const { defineConfig } = require("cypress");
const env = require('./cypress/config/env.json'); 

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 6000,
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: env.baseUrl,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
