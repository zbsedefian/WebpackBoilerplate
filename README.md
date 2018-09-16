# INITIAL

<pre>
yarn add webpack-cli --dev
</pre>

package.json

<pre>
"scripts": {
    "build": "webpack"
  }
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
            test: /\.js$/,
            exclude: /node_modules/
        }
    }
}

module.exports = config;
</pre>

Can exclude /node_modules because it's already ES5.
.babel
Create a .babelrc file and add

<pre>
{
  "presets": ["babel-preset-env"]
}
</pre>

Or if react, must transpile JSX to raw JavaScript, so add react preset.

<pre>
{
  "presets": ["babel-preset-env", "react"]
}
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


# Code splitting

System.import() causes browser to search server for a javascript file. System.import() is asynchronous, so it returns a promise.

<pre>
const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    System.import('./image_viewer')
        .then(module => {
            module.default();
        })
};
document.body.appendChild(button);
</pre>

It will also import anything that image_viewer.js itself imports.


However, System.import() is deprecated. The Webpack 4 way to do code splitting seems to be the following.

<pre>
const config = {
  entry: {
    index: "./src/index.js",
    imageModule: "./src/image_viewer.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
    publicPath: "build/"
  },
[...]
</pre>

index.js

<pre>
import imageViewer from "./image_viewer";

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    imageViewer();
};

document.body.appendChild(button);
</pre>

image_viewer.js

<pre>
import small from "../assets/small.png";
import "./styles/image_viewer.css";

export default () => {
    const image = document.createElement("img");
    image.src = small;
    document.body.appendChild(image);
}
</pre>

Finally, to avoid importing the same module more than once, add the optimization object as a property to config.

<pre>
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
</pre>

# More code splitting: extract modules / libraries

Get imported modules from package.json and create array.

<pre>
const VENDOR_LIBS = [
  "faker", "lodash", "react", "react-dom", "react-input-range",
  "react-redux", "react-router", "redux", "redux-form", "redux-thunk"
]
</pre>

Add to entry points.

<pre>
entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  }
</pre>


Then to dynamically add these script tags do the following.

<pre>
yarn add --dev html-webpack-plugin
</pre>

<pre>
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
</pre>

And your output of index.js with no script tags will include after the body the following

<pre>
  <script type="text/javascript" src="vendor.js"></script><script type="text/javascript" src="bundle.js"></script></body>
</pre>

However, the browser will not know if the file has been updated if the filename remains the same. Therefore the filename needs to be made unique with chunkhash.

<pre>
 output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
</pre>

We also must adjust the chunk plugin with the manifest file to tell if the vendor file has changed. (notice it's names not name.)

<pre>
 new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
</pre>

Each of these hash-named updated files will remain in the dist directory. Clean it up by installing helper module rimraf (as in rm -rf).

<pre>
yarn add --dev rimraf
</pre>

And to package.json 

<pre>
  "scripts": {
    "clean": "rimraf dist",
    "build": "npm run clean && webpack"
  },
</pre>

# Webpack Dev Server

Module that watches for file changes. Browser connects directly to webpack-dev-server. Its purpose is to create a SPA without a backend. Integrating webpack with a node server is a different thing.

Add script to avoid installing globally.
<pre>
"server": "webpack-dev-server"
</pre>

Webpack dev server does not create files on the harddrive. Meaning, it's not for production use. If you delete dist, it still works, because it build its own.

# Code splitting with react-router

Replace Router logic with plain routes instead of JSX. This is what react-router actually does behind the scenes.

<pre>
const componentRoutes = {
  component: Home,
  path: "/",
  indexRoute: { component: ArtistMain },
  childRoutes: [
    {
      path: "artists/new",
      getComponent(location, cb) {
        System.import('./components/artists/ArtistCreate')
          .then(module => cb(null, module.default))
      }
    },
    {
      path: "artists/:id",
      getComponent(location, cb) {
        System.import('./components/artists/ArtistDetail')
          .then(module => cb(null, module.default))
      }
    },
    {
      path: "artists/:id/edit",
      getComponent(location, cb) {
        System.import('./components/artists/ArtistEdit')
          .then(module => cb(null, module.default))
      }
    }
  ]
}

const Routes = () => {
  return (
    &ltRouter history={hashHistory} routes={componentRoutes} />
  );
};
</pre>
 
# Static Deployment (production mode)

Add plugin to webpack.config

<pre>
new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
</pre>

Add to build script. -p will minimize js. (Changed ~3.61MB to ~1.43MB)

<pre>
"build": "NODE_ENV=production npm run clean && webpack -p",
</pre>

# Surge
<pre>
surge -p dist  
</pre>

# Github pages

<pre>
git checkout -b gh-pages
git subtree push --prefix dist origin gh-pages
</pre>

Script

<pre>
"deploy": "npm run build && git subtree push --prefix dist origin gh-pages"
</pre>

# AWS S3

<pre>
s3-website create webpack-example
s3-website deploy dist 
</pre>

# Dynamic Deployment

Architecture involves something like frontend being at app.com and backend being at api.app.com

Alternatively, a node server that serves the application as well as handling business logic. Ideal for smaller apps. However, this is more of a pain with webpack. This is because node becomes the central piece rather than webpack. 

# Integrating node and webpack

In development environment, the node server uses a webpack middleware to pass to the app.

In production environment, we don't want to run webpack at all. We want to build it once and save the generated assets in the dist directory.

Note, this setup is non-ideal because it's better to have a dev and prod env that are more similar.

<pre>
npm i --save-dev webpack-dev-middleware@1.9.0
</pre>

server.js

<pre>
const express = require('express');
const path = require('path');

const app = express();

// Server routes...
app.get('/hello', (req, res) => res.send({ hi: 'there' }));

if (process.env.NODE_ENV !== 'production') {
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.js')
    app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static('dist'));
    // For react-router
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    })
}

app.listen(process.env.PORT || 3050, () => console.log("Listening."))
</pre>

# Heroku
create Procfile (has no extension) and add:

<pre>
web: node server.js
</pre>

Then run: 

<pre>
heroku create
git remote -v
git push heroky master
</pre>

# AWS Elastic Beanstalk

<pre>
brew install awsebcli
eb init
eb open
</pre>

However process.env.NODE_ENV is not set by aws automatically.

<pre>
eb setenv NODE_ENV=production
</pre>

Remember that if a git repo is initialized in the folder, eb deploy will only deploy the most recent commit.