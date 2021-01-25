"use-strict";

// Core
const WebpackPwaManifest = require("webpack-pwa-manifest");

// Helpers
const { appAssets } = require("../../helpers/paths");

// Utils
const servedSepOS = require("../../utils/servedSepOS");

module.exports = () => [
    new WebpackPwaManifest({
        "name": "arma73 github portfolio",
        "short_name": "arma73",
        "description": "arma73 github portfolio",
        "background_color": "#3d1163",
        "theme_color": "#3d1163",
        "display": "fullscreen",
        "inject": false,
        "fingerprints": false,
        "ios": true,
        "scope": "/",
        "start_url": "/",
        "orientation": "omit",
        "icons": [
            {
                "src": servedSepOS(appAssets, "images", "icons", "icon-pwa-512x512.png"),
                "sizes": [72, 96, 128, 144, 150, 192, 384, 512],
            },
            {
                "src": servedSepOS(appAssets, "images", "icons", "apple-touch-icon.png"),
                "sizes": [120, 152, 167, 180],
                "ios": true,
            },
        ],
    }),
];
