"use-strict";

const { development } = require("../../helpers/options");

const devtool = development ? "eval-cheap-module-source-map" : false;

// This option controls if and how source maps are generated.
module.exports = {
    devtool,
};
