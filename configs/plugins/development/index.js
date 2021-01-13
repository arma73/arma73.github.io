"use-strict";

// Plugins
const htmlWebpackPlugin = require("./htmlWebpackPlugin");
const hotModuleReplacementPlugin = require("./hotModuleReplacementPlugin");
const directoryTreeWebpackPlugin = require("./directoryTreeWebpackPlugin");
const friendlyErrorsWebpackPlugin = require("./friendlyErrorsWebpackPlugin");
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    "plugins": [
        ...htmlWebpackPlugin(),
        ...hotModuleReplacementPlugin(),
        ...friendlyErrorsWebpackPlugin(),
        ...directoryTreeWebpackPlugin(),
    ].filter(Boolean),
};
