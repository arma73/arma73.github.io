"use-strict";

// Helpers
const { production, development } = require("../helpers/options");

// Loaders
const cssLoader = require("../loaders/cssLoader");
const sassLoader = require("../loaders/sassLoader");
const styleLoader = require("../loaders/styleLoader");
const cacheLoader = require("../loaders/cacheLoader");
const threadLoader = require("../loaders/threadLoader");
const miniCssExtract = require("../loaders/miniCssExtract");

module.exports = () => {
    const baseLoader = () => {
        if (production) {
            return [miniCssExtract()];
        }

        return [
            development && cacheLoader(),
            threadLoader("css"),
            styleLoader(),
        ].filter(Boolean);
    };
    
    return [
        {
            "test": /\.css$/,
            "use": [
                ...baseLoader(),
                cssLoader(),
            ],
        },
        {
            "test": /\.s(a|c)ss$/,
            "use": [
                ...baseLoader(),
                cssLoader(),
                sassLoader({
                    "sourceMap": development,
                }),
            ]
        }
    ];
};
