import { defineConfig } from "cypress";
import dotenv from 'dotenv';
    dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env.testUser = process.env.CYPRESS_testUser;
      config.env.testPsswd1 = process.env.CYPRESS_testPsswd1;
      config.env.testPsswd2 = process.env.CYPRESS_testPsswd2;
      config.env.testPsswd3 = process.env.CYPRESS_testPsswd3;
      
          return config;
    },
  },
});
