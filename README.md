# INITIAL

<pre>
yarn add webpack-cli --dev
</pre>

Make webpack.config.js

<pre>
const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    mode: "development"
}
</pre>

# JS

Integrate babel to convert modern JS to classic
<pre>
yarn add --dev babel-core (or @babel/core I think for webpack 4) babel-loader babel-present-env
</pre>

Add to webpack config:

<pre>
const path = require("path");\
[...]
const config = {
    module: {
        rules: [
        {
            use: "babel-loader",
            test: /\.js$/
        }
    }
}

module.exports = config;
</pre>

# CSS

Two methods: put all styles in head by doing the following:

Import css styles in related js file.

<pre>
yarn add --dev css-loader style-loader
</pre>

style-loader is the module that adds styles to html doc.

in rules:

<pre>
{
    use: ["style-loader", "css-loader"],
    test: /\.css$/
}
</pre>

Better method, extraction:

<pre>
yarn add --dev css-loader extract-text-webpack-plugin
</pre>

At top of webpack.config.js

<pre>
const ExtractTextPlugin = require("extract-text-webpack-plugin");
</pre>

Then in rules:

<pre>
{
    loader: ExtractTextPlugin.extract({
        use: "css-loader"
    }),
    test: /\.css$/
}
</pre>

Then AFTER module property

<pre>
plugins: [new ExtractTextPlugin("style.css")]
</pre>

# Image assets

<pre>
yarn add --dev image-webpack-loader url-loader file-loader
</pre>

add this to rules in webpack config:

in output object:

<pre>
output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "build/"
  },
</pre>

This is so that url-loader knows where to put the image.

in rules:

<pre>
{
    test: /\.(jpe?g|png|gif|svg)$/,
    use: [
        {
            loader: "url-loader",
            options: {
                limit: 40000
            }
        },\
        "image-webpack-loader"
    ]
}
</pre>

url-loader takes import statement of big and assigns it to the public path
