let mix = require("laravel-mix");

class MyExtension3Class {
    webpackRules() {
        return {
            test: /\.test3$/,
            use: ["custom3-loader"]
        };
    }
}

mix.extend("myExtension3", new MyExtension3Class());
