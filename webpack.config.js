const webpack = require("webpack");

// replace accordingly './.env' with the path of your .env file
require("dotenv").config({ path: "./.env" });

const path = require("path");

module.exports = {
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
};
