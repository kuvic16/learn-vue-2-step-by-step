const mix = require("laravel-mix");

/**
 * Customer Extension: #1 way
 */
mix.extend("myExtension", webpackConfig => {
    console.log("our extension was called");
    webpackConfig.resolve.extensions.push(".test");
    console.log(webpackConfig);
});

/**
 * Customer Extension: #2 way
 */
mix.extend("myExtension1", (webpackConfig, ...args) => {
    console.log("myExtension1");
    console.log(args);
});

/**
 * Customer Extension: #3 way
 */
class MyExtensionClass {
    dependencies() {
        //return ["custom-loader"];
        return [];
    }

    register(path) {}

    webpackRules() {
        return {
            test: /\.test$/,
            use: ["custom-loader"]
        };
    }

    webpackPlugins() {
        return new (class {
            apply() {
                console.log("testing plugin on-fly class");
            }
        })();
    }

    webpackConfig(config) {
        console.log(config.module.rules);
    }

    babelConfig() {
        return {};
    }
}
mix.extend("myExtension2", new MyExtensionClass());

/**
 * Customer Extension: #4 way
 */
require("./laravel-mix-my-extension3");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .version()
    .myExtension()
    .myExtension1("path/to/file.js")
    .myExtension2()
    .myExtension3();
