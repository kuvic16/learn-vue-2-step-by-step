let webpack = require("webpack");
let path = require("path");

module.exports = {
    entry: {
        app: "./resources/js/app.js",
        vendor: ["vue", "axios"]
    },
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "[name].js",
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
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor"]
        })
    ]
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

    module.exports.plugins.push(
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: "production"
            }
        })
    );
}
