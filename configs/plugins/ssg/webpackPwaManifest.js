"use-strict";

// Core
const WebpackPwaManifest = require("webpack-pwa-manifest");

// Helpers
const { appAssets } = require("../../helpers/paths");

// Utils
const servedSepOS = require("../../utils/servedSepOS");

module.exports = () => [
    new WebpackPwaManifest({
        "name": "amollo Documentation",
        "short_name": "amollo",
        "description": "amollo documentation web application",
        "background_color": "#2b3a42",
        "theme_color": "#2b3a42",
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
                "src": servedSepOS(appAssets, "images", "icons", "icon-pwa-512x512.png"),
                "sizes": [120, 152, 167, 180],
                "ios": true,
            },
        ],
    }),
];
