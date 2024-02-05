const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl : "http://172.31.1.13:1902/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      username: 'O045719',
      password: 'Pass@1234',
    },
  },
});
