"use-strict";

// Core
const hot = require("webpack-hot-middleware");

// Helpers
const { development } = require("../../helpers/options");
const { "areaEnv": { "REACT_APP_PORT": PORT, "REACT_APP_HOST": HOST } } = require("../../helpers/env");

// This set of options is picked up by webpack-dev-server and
// can be used to change its behavior in various ways.
module.exports = compiler => development && ({
    // Enable webpack's Hot Module Replacement feature:
    "hot": true,
    // Tells dev-server to open the browser after server had been started.
    // Set it to true to open your default browser.
    "open": true,
    "openPage": `http://${HOST}:${PORT}`,
    "client": {
        // Output running progress to console.
        "progress": true,
    },
    // Shows a full-screen overlay in the browser when there are compiler 
    // errors or warnings. If you want to show only compiler errors:
    "overlay": true,
    // Enable gzip compression for everything served:
    "compress": true,
    // When using the HTML5 History API, the index.html page will likely 
    // have to be served in place of any 404 responses. 
    // Enable devServer.historyApiFallback by setting it to true:
    "historyApiFallback": true,
    // Set to 0.0.0.0 and cooperate with useLocalIp to access the LAN.
    "host": "0.0.0.0",
    // Specify a port number to listen for requests on:
    "port": PORT,
    // Use the local IP to open devServer instead of localhost.
    "useLocalIp": true,

    // You can proxy the APIs of other servers through proxy.
    // proxy: {
    //     "/api": `http://${HOST}:${PORT}`
    // }
    // Will be used to determine where the bundles should be served from, and takes precedence.
    // "publicPath": "/", // correct later
    // Tell the server where to serve content from. This is only 
    // necessary if you want to serve static files.
    // "contentBase": "./dist/",

    // Adds headers to all responses:
    "headers": {
        // "Access-Control-Allow-Origin": "*"
    },

    // Provides the ability to execute custom middleware after 
    // all other middleware internally within the server.
    onAfterSetupMiddleware(app) {
        app.use(
            hot(compiler, {
                "log": false,
            }),
        );
    },
});
