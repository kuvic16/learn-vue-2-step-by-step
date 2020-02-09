let webpack = require("webpack");
let path = require("path");

module.exports = {
    entry: "./resources/js/app.js",
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "bundle.js",
        publicPath: "./public"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.common.js"
        }
    },
    plugins: []
};

let env = process.env.NODE_ENV;
if (env.indexOf("production") !== -1) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourcemap: true,
            compresss: {
                warnings: false
            }
        })
    );
}
