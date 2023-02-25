const { executiveAssets } = require("../../utils/executiveAssets");
const webpack = require("webpack");

class ProvideAssetsPlugin {
    apply(compiler) {
        compiler.hooks.done.tap(
            {
                "name": "ProvideAssetsPlugin",
                "stage": webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
            },
            stats => {
                const assets = Object.keys(stats.compilation.assets);
                const jsmodules = assets.filter(
                    item => item.startsWith("js/") && item.endsWith(".m.js")
                );
                const cssmodules = assets.filter(item =>
                    item.startsWith("styles/")
                );

                executiveAssets({ jsmodules, cssmodules });
            }
        );
    }
}

module.exports = () => [new ProvideAssetsPlugin()];
