"use-strict";

// Core
const SSGWebpackPlugin = require("static-site-generator-webpack-plugin");
const { join } = require("path");
// Helpers
const { appSrc } = require("../../helpers/paths");

// Utils
const flattenContentTree = require("../../utils/flattenContentTree");

const contentTree = require(join(appSrc, "settings", "_content.json"));

// content tree to path array
const paths = [
    ...flattenContentTree(contentTree)
];

module.exports = () => [
    new SSGWebpackPlugin({
        "globals": {
            "window": {
                "__ssgrun": true
            }
        },
        paths,
        "locals": {
            "content": contentTree
        }
    }),
];
