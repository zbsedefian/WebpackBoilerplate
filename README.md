# INITIAL

yarn add webpack-cli --dev

Make webpack.config.js

const config = {\
    entry: "./src/index.js",\
    output: {\
        path: path.resolve(\_\_dirname, "build"),\
        filename: "bundle.js",\
    },\
    mode: "development"\
}

# JS

Integrate babel to convert modern JS to classic
yarn add --dev babel-core (or @babel/core I think for webpack 4) babel-loader babel-present-env

Add to webpack config:

const path = require("path");\

const config = {\
    module: {\
        rules: [\
        {\
            use: "babel-loader",\
            test: /\.js$/\
        }\
    }\
}\

module.exports = config;

# CSS

Two methods: put all styles in head by doing the following:

Import css styles in related js file.

yarn add --dev css-loader style-loader

style-loader is the module that adds styles to html doc.

in rules:

{\
    use: ["style-loader", "css-loader"],\
    test: /\.css$/\
}\

Better method, extraction:

yarn add --dev css-loader extract-text-webpack-plugin

At top of webpack.config.js

const ExtractTextPlugin = require("extract-text-webpack-plugin");

Then in rules:

{\
    loader: ExtractTextPlugin.extract({\
        use: "css-loader"\
    }),\
    test: /\.css$/\
}\

Then AFTER module property

plugins: [new ExtractTextPlugin("style.css")]

# Image assets

yarn add --dev image-webpack-loader url-loader file-loader

add this to rules in webpack config:

in output object:

publicPath: "build/"

This is so that url-loader knows where to put the image.

in rules:

{\
    test: /\.(jpe?g|png|gif|svg)$/,\
    use: [\
        {\
            loader: "url-loader",\
            options: {\
                limit: 40000\
            }\
        },\
        "image-webpack-loader"\
    ]\
}\

url-loader takes import statement of big and assigns it to the public path