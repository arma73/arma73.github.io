"use-strict";

// Plugins
const cleanWebpackPlugin = require("./cleanWebpackPlugin");
const copyWebpackPlugin = require("./copyWebpackPlugin");
const caseSensitivePathsWebpackPlugin = require("./caseSensitivePathsWebpackPlugin");
const webpackPlugins = require("./webpackPlugins");
const miniCssExtractPlugin = require("./miniCssExtractPlugin");

module.exports = {
    "plugins": [
        ...cleanWebpackPlugin(),
        ...copyWebpackPlugin(),
        ...caseSensitivePathsWebpackPlugin(),
        ...webpackPlugins(),
        ...miniCssExtractPlugin()
    ].filter(Boolean),
};
