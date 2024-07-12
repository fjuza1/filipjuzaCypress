const { defineConfig } = require("cypress");
const moment = require('moment');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task',{

       }
    )
    },
  },
});
