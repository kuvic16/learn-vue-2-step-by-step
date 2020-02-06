let webpack = require("webpack");
let path = require("path");

module.exports = {
    entry: "./resources/js/app.js",
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "bundle.js",
        publicPath: "./public"
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.common.js"
        }
    },
    plugins: []
};
if (process.env.NODE_ENV === "production") {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourcemap: true,
            compresss: {
                warnings: false
            }
        })
    );
}
