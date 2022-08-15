TOOLS
//**\*\***\*\***\*\***\_**\*\***\*\***\*\***
lesson_1_intruduction
//**\*\***\*\***\*\***\_**\*\***\*\***\*\***

Some terminal comands:

1. git init //
2. npm init // munual
   npm init -y //=> init packat json folder(project) auto

3. npm i -D jest @babel/preset-env

4. npm i -D sass npm-run-all

=> example package.json file =>:
{
"name": "task2",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "jest",
"test:watch": "jest --watch",
"build:styles": "sass ./src/styles/index.scss ./dist/styles.css",
"copy:html": "cp ./src/index.html ./dist/index.html",
"copy:scripts": "cp -R src/scripts dist/scripts",
"clean": "rm -rf ./dist",
// "build": "npm run clean && npm run build:styles && npu run copy:html && npm run copy:scripts"
// "build": "npm-run-all clean build:styles copy:html copy:scripts"
//
"build": "npm-run-all clean build:styles copy:\*"

},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"@babel/preset-env": "^7.18.10",
"jest": "^28.1.3",
"npm-run-all": "^4.1.5",
"sass": "^1.54.2"
}
}

5. npm run build // (...)

npm install -g jast

comands: start, build, install (or i) bez run
-g //=> local
-D (or --save-D)//=> development
-s (or --save) // => production
npm install jast -D
npm i jast -D

.babelrc // => config =>
{
"presets": ["@babel/preset-env"]
}

instal => npm i -D @babel/preset-env

npm test (or => npm t)

npm i -D npm-run-all

//**\*\***\*\***\*\***\_**\*\***\*\***\*\***
//=> lesson2 <= // Babel
//**\*\***\*\***\*\***\_**\*\***\*\***\*\***

https://caniuse.com/

npm i
npm init -y

npm i --save-dev @babel/core @babel/cli
npm i -D @babel/core @babel/cli

Babel (code => code)
Babel + plugins (code => transformed code)
Babel + plugins + polyfills (code => transformed code + additional code (polyfills))

setting Babel

.babelrc
babel.config.json // =>
{
"presets": ["@babel/preset-env"],
"plugins": ["@babel/plugin-proposal-class-properties"],
}
//
babel.config.js
.babelrc.js //=>
module.export = () => ({
presets: ["@babel/preset-env"],
plugins: ["@babel/plugin-proposal-class-properties"],
})
//
package.json //=>
{
"name": "my-package",
"version": "1.0.0",
"babel": {
"presets": ["@babel/preset-env"],
"plugins": ["@babel/plugin-proposal-class-properties"],
}

npm i -D @babel/plugin-proposal-object-rest-spread

// preset

npm i -D @babel/preset-env

file .babelrc =>
{
"presets": ["@babel/presets-env"]
}

preset chanche code => ES5

nastroyki bable => yaki plagin use =>

{
"presets": [
[
"@babel/preset-env",
{
"target": "> 0.25%, not dead"

// or "targets": "last 2 versions, > 1%"
}
]
]
}

//**\*\***\*\***\*\***\_**\*\***\*\***\*\***
//=> lesson3 <= // Babel polyfills
//**\*\***\*\***\*\***\_**\*\***\*\***\*\***

Array.prototype.flat = Array.prototype.flat || function flat () {
// realyse
}

.babelrc
{
"presets": [
[
"@babel/preset-env",
{
"targets": "last 2 versions, > 1%",
"useBuiltIns": "usage"
}
]
]
}

npm install --save core-js@3

npm i -D @babel/core @babel/cli
npm i
npm i -S core-js@3

.babelrc file =>
{
"presets": [
[
"@babel/preset-env",
{
"targets": {
"edge": "17",
"firefox": "60",
"chrome": "67",
"safari": "11.1"
},
"useBuiltIns": "usage",
"corejs": 3,
"modules": false
}
]
]
}

package.json file =>
{
"name": "task2",
"version": "1.0.0",
"main": "index.js",
"scripts": {
"test": "jest",
"test:watch": "jest --watch",
"build:styles": "sass ./src/styles/index.scss ./dist/styles.css",
"copy:html": "cp ./src/index.html ./dist/index.html",
"build:scripts": "babel ./src --out-dir=./dist",
"clean": "rm -rf ./dist",
"build": "npm-run-all clean build:_ copy:_"
},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"@babel/cli": "^7.18.10",
"@babel/core": "^7.18.10",
"@babel/preset-env": "^7.18.10",
"jest": "^28.1.3",
"npm-run-all": "^4.1.5",
"sass": "^1.54.3"
},
"dependencies": {
"core-js": "^3.24.1"
},
"description": ""
}

//**\*\***\*\***\*\***\_**\*\***\*\***\*\***
//=> lesson4 <=
//**\*\***\*\***\*\***\_**\*\***\*\***\*\***

// revealing module pettern, iife
// amd, umd, CommonJS
// ES Modules
// CDN
// Npm, Yarn - паекети менеджерів для js
=>

// revealing module pettern const.. => :

const store = (function () {
let storage = {};
return {
addItem: function(key, value) {
Object.assign(storage, { [key]: value })
},
clear: function() {
storage = {};
}
};
})();

// IIFE // =>:

(function func() {
let a = 17;

console.log(a);
})()

//
// AMD + require.js // =>:

define(function(require) {
const messages = require('./messages');
alert(messages.sayHi());
});

//

// ES Modules // =>:

import { renderProducts } from '../products.js';
import moment from 'moment';

const currentDate = moment().format('DD MMM YYYY');
document.title = `Hello, today is ${currentDate}`;
renderProducts();

//

// CommonJS (for Node.js) (dont use in brousers !!!) =>:

const { renderProducts } = require('../products.js');
const moment = require('moment');

function initApp() {
const currentDate = moment().format('DD MMM YYYY');
document.title = `Hello, today is ${currentDate}`;
renderProducts();
}

module.exports = {
initApp
};

// ES Modules // suntacs: =>

// tasks.js
export default (tasksList) => {/_ ... _/};

// user.js
const renderUsr = (userData) => {/_ ... _/};
export default renderUser;

// calculator.js
export const sum = (a, b) => {/_ ... _/};
export const mult = (a, b) => {/_ ... _/};

export default (expression) => {/_ ... _/};

//index.js
import renderTasks from './tasks.js';
import renderUserData from './user.js';
import calc, { sum, mult } from './calculator.js';
import './polyfills.js';

export default calc; or=>

export default (expression) => {
console.log('implementation for calc');
// ... implementation
};
// (the same)

import calc from './calculator/index'; or =>import calcResult from './calculator/index'; (same)

import calcResult from './calculator/index';
import { sum, mult } from './calculator/index';
=>
import calcResult, { sum, mult } from './calculator/index';

export default async function fetchUser(userId) {
console.log('implementation for fetchUser');

try {
const response = await fetch(`https://api.github.com/users/${userId}`);
return await response.json();
} catch (error) {
throw new Error('Failed to get user data');
}
}

import './polyfills/array-flatMap.js';

import calcResult, { sum as calcSum, mult } from './calculator/index';

pocket manager: npm, yarn, Bower

npm - пакетний менеджер
npm install --save-dev webpack => npm i -D webpack
npm install --save-react core-js@3 => npm i -S react core-js@3
npm install => npm i
npm unistall jquery => npm unistall jquery
npm outdated => npm outdated

$ npm i -S core-js@2 // install v.2
$ npm i -S core-js // install last v

npm uninstall core-js

npm i -S react@16.5

npm install or npm i => aoto istall all modules

//**\*\***\*\***\*\***\_**\*\***\*\***\*\***
//=> lesson5 <= Webpack intro
//**\*\***\*\***\*\***\_**\*\***\*\***\*\***

можливості

- працює з різними типами модулів (AMD, Common.JS, EA Modules)
- працює з модулями встановленими через npm і bower
- працює з типами файлів .css, .less, .js, .html, .json, .jpeg, .svg .....
- може оптимізувати розмір файлів
- позбавляється від глобальних змін
- завантажує файли в потрібному порядку
- керує залежностями
- і багато іншого ...

Zero config
webpack => index.js (точка входу в застосунок) => --mode development (режим зборки) => --devtool eval-source-map (наявність і вид source maps) => -w (відслудковування)

npm init -y

- npm i -D webpack webpack-cli // last
  npm i -D webpack@4 webpack-cli@4 //concret v.4

npm outdated //=> check last v webpack (actual v.5.74.0)

{
"name": "task1",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
// "build": "webpack" or
"build": "webpack --mode=production"
// "build": "webpack --mode=development"

},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"webpack": "^4.46.0",
"webpack-cli": "^4.10.0"
}
}

"build": "webpack --mode=production" // по зомовчуванні шукає точку входу з назвою index.js => v src

якщо інша назва або в іншому місці то треба вказуватиназву => ./src/my-index.js
"build": "webpack ./src/my-index.js --mode=production"
or => "build": "webpack ./src/index.js -p" (get err need => --mode=production)

- source maps

  "build": "webpack ./src/index.js --mode=production --devtool eval-source-map"

  "scripts": {
  "build": "webpack ./src/index.js --mode=production",
  "watch": "webpack ./src/index.js --mode=development --devtool eval-source-map -w" (or -watch)
  },

webpack.config.js file:

const path = require('path');

module.exports = {
entry: {
profile: './src/profile/index.js',
dashboard: './src/dashboard/index.js',
},
output: {
filename: '[name].js',
path: path.join( \_\_dirname, 'build'),
},
watch: false,
};

//**\*\***\*\***\*\***\_**\*\***\*\***\*\***
//=> lesson6 <= loaders
//**\*\***\*\***\*\***\_**\*\***\*\***\*\***

import './profile.scss';

initialisaciya = >
npm init -y

npm i -D webpack@4 webpack-cli@4
npm i -D webpack webpack-cli

install css-loader =>:

npm i -D css-loader
npm i -D scss-loader
npm i -D style-loader
npm i -D url-loader
npm i -D file-loader
npm i -D sass
npm i -D sass-loader

regex101.com

module.exports = {
entry: './src/index.js',
output: {
filename: 'bundle.js',
},
module: {
rules: [
{
test: /.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.(jpg|png)$/,
use: [
{
loader: 'url-loader',
options: {
limit: 8192,
name: '[name].[ext]',
outputPath: 'images',
},
},
],
},
],
},
};

//
module.exports = {
entry: './src/index.js',
output: {
filename: 'bundle.js',
},
module: {
rules: [
{
test: /.js$/,
use: ['babel-loader'],
},
],
},
};

// {
"name": "task2",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"build": "webpack",
"watch": "webpack --mode=development --devtools eval-source-maps -w"
},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"@babel/cli": "^7.18.10",
"@babel/core": "^7.18.10",
"@babel/preset-env": "^7.18.10",
"babel-loader": "^8.2.5",
"webpack": "^4.46.0",
"webpack-cli": "^4.10.0"
},
"dependencies": {
"core-js": "^3.24.1"
}
}
//

{
"presets": [
[
"@babel/preset-env",
{
"targets": "> 1%",
"useBuiltIns": "usage",
"corejs": 3
}
]
]
}

install losders =>:
npm i -D css-loader style-loader sass-loader file-loader url-loader babel-loader

// task3 les6 => fail
{
"name": "task3",
"version": "1.0.0",
"main": "index.js",
"scripts": {
"test": "jest",
"test:watch": "jest --watch",
"copy:html": "cp ./src/index.html ./dist/index.html",
"build:scripts": "webpack --mode=production",
"clean": "rm -rf ./dist",
"build": "npm-run-all clean build:_ copy:_",
"watch": "webpack -d --devtools eval-source-maps -w"
},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"@babel/cli": "^7.18.10",
"@babel/core": "^7.18.10",
"@babel/preset-env": "^7.18.10",
"babel-loader": "^8.2.5",
"css-loader": "^6.7.1",
"file-loader": "^6.2.0",
"jest": "^28.1.3",
"npm-run-all": "^4.1.5",
"sass": "^1.54.3",
"sass-loader": "^13.0.2",
"style-loader": "^3.3.1",
"url-loader": "^4.1.1",
"webpack": "^4.46.0",
"webpack-cli": "^4.10.0"
},
"dependencies": {
"core-js": "^3.24.1"
},
"description": ""
}

// =

module.exports = {
entry: './src/index.js',
output: {
filename: 'bundle.js',
},
module: {
rules: [
{
test: /.js$/,
        use: ['babel-loader'],
      },
      {
        test: /.s?css$/,
use: ['style-loader', 'css-loader', 'sass-loader'],
},
{
test: /.(jpg|png)$/,
use: [
{
loader: 'url-loader',
options: {
limit: 8192,
name: '[name].[ext]',
outputPath: 'images',
},
},
],
},
],
},
};

//=

// {
// "presets": [
// [
// "@babel/preset-env",
// {
// "targets": {
// "edge": "17",
// "firefox": "60",
// "chrome": "67",
// "safari": "11.1"
// },
// "useBuiltIns": "usage",
// "corejs": 3,
// "modules": false
// }
// ]
// ]
// }

{
"presets": [
[
"@babel/preset-env",
{
"targets": "> 1%",
"useBuiltIns": "usage",
"corejs": 3,
"modules": false
}
]
]
}

//**\*\***\*\***\*\***\_**\*\***\*\***\*\***
//=> lesson7 <= Webpack - Plugins
//**\*\***\*\***\*\***\_**\*\***\*\***\*\***

npm i -D html-webpack-plugin

npm install --save-dev mini-css-extract-plugin

{
"name": "task2",
"version": "1.0.0",
"main": "index.js",
"scripts": {
"clean": "rm -rf ./dist",
"copy:html": "cp ./src/index.html ./dist/index.html",
"build": "webpack -p ",
"watch": "webpack --mode=development --devtools eval-sorce-maps -w"
},
"author": "",
"license": "ISC",
"devDependencies": {
"css-loader": "^3.6.0",
"file-loader": "^6.0.0",
"html-webpack-plugin": "^4.3.0",
"mini-css-extract-plugin": "^0.9.0",
"sass": "^1.26.8",
"sass-loader": "^8.0.2",
"scss-loader": "0.0.1",
"style-loader": "^1.2.1",
"url-loader": "^4.1.0",
"webpack": "^4.43.0",
"webpack-cli": "^3.3.11"
},
"description": ""
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
entry: './src/index.js',
output: {
filename: 'bundle.js',
},
module: {
rules: [
{
test: /\.s?css$/i,
        // use: ['style-loader', 'css-loader', 'sass-loader'], // instead of style-loader we put MiniCssExtractPlugin.loader
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // instead of style-loader we put MiniCssExtractPlugin.loader
      },
      {
        test: /\.(png|jpg|gif)$/i,
use: [
{
loader: 'url-loader',
options: {
name: '[name].[ext]',
outputPath: 'images',
limit: 8192,
},
},
],
},
],
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html', // html file from the signed source will fetch to the dist repo
}),
new MiniCssExtractPlugin({
filename: '[name].css', // if there are few entries plugin will make even quantity of output files wit the same names
}),
],
};

{
"presets": [
[
"@babel/preset-env",
{
"targets": "> 1%",
"useBuiltIns": "usage",
"corejs": 3
}
]
]
}

//=
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
entry: './src/index.js',
output: {
filename: 'bundle.js'
},
module: {
rules: [{
test: /.js$/,
                use: ['babel-loader']
            },
            {
                test: /.s?css$/,
use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] //loaders acting from right to the left
}, //that`s why we naming them from right to the left
{
test: /\.(png|jpg|gif)$/i,
use: [{
loader: 'url-loader',
options: {
limit: 8192,
name: '[name].[ext]',
outputPath: 'images',
},
}, ],
}
],
},
plugins: [
new webpack.ProgressPlugin(),
new CleanWebpackPlugin(), //serves to clean dist folder
new HtmlWebpackPlugin({
template: './src/index.html' //html file from the signed source will fetch to the dist repo
}),
new MiniCssExtractPlugin({
filename: '[name].css', //if there are few entries plugin will make even quantity of output files wit the same names
}),
],
}

//=> finaly package.json:
{
"name": "task2",
"version": "1.0.0",
"main": "index.js",
"scripts": {
"test": "jest",
"test:watch": "jest --watch",
"build": "webpack -p",
"watch": "webpack -d --devtools eval-source-maps -w"
},
"keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"@babel/cli": "^7.18.10",
"@babel/core": "^7.18.10",
"@babel/preset-env": "^7.18.10",
"babel-loader": "^8.2.5",
"clean-webpack-plugin": "^3.0.0",
"css-loader": "^3.6.0",
"file-loader": "^6.2.0",
"html-webpack-plugin": "^4.3.0",
"jest": "^26.1.3",
"mini-css-extract-plugin": "^0.9.0",
"npm-run-all": "^4.1.5",
"sass": "^1.54.3",
"sass-loader": "^8.0.2",
"style-loader": "^1.3.0",
"url-loader": "^4.1.1",
"webpack": "^4.46.0",
"webpack-cli": "^3.3.12"
},
"dependencies": {
"core-js": "^3.24.1"
},
"description": ""
}

// => finaly .babelrc
{
"presets": [
[
"@babel/preset-env",
{
"targets": "> 1%",
"useBuiltIns": "usage",
"corejs": 3,
"modules": false
}
]
]
}

// => finaly webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
entry: './src/index.js',
output: {
filename: 'bundle.js',
},
module: {
rules: [
{
test: /.js$/,
        use: ['babel-loader'],
      },
      {
        test: /.s?css$/,
use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
},
{
test: /.(jpg|png)$/,
use: [
{
loader: 'url-loader',
options: {
limit: 8192,
name: '[name].[ext]',
outputPath: 'images',
},
},
],
},
],
},
plugins: [
new webpack.ProgressPlugin(),
new CleanWebpackPlugin(),
new HtmlWebpackPlugin({
template: './src/index.html',
}),
new MiniCssExtractPlugin({
filename: '[name].css',
}),
],
};

//**\*\***\*\***\*\***\_**\*\***\*\***\*\***
//=> lesson8 <= devServer
//**\*\***\*\***\*\***\_**\*\***\*\***\*\***

npm i -D webpack-dev-server
build => start

{
"name": "task1",
"version": "1.0.0",
"main": "index.js",
"scripts": {
"clean": "rm -rf ./dist",
"build": "webpack -p ",
"start": "webpack-dev-server --mode=development --devtools eval-sorce-maps --open"
},
"author": "",
"license": "ISC",
"devDependencies": {
"css-loader": "^3.6.0",
"file-loader": "^6.0.0",
"html-webpack-plugin": "^4.3.0",
"mini-css-extract-plugin": "^0.9.0",
"sass": "^1.26.8",
"sass-loader": "^8.0.2",
"scss-loader": "0.0.1",
"style-loader": "^1.2.1",
"url-loader": "^4.1.0",
"webpack": "^4.43.0",
"webpack-cli": "^3.3.11",
"webpack-dev-server": "^3.11.3"
},
"keywords": [],
"description": ""
}

webpack.config =>
//
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
const isProduction = argv.mode === 'production';
const config = {
entry: './src/index.js',
output: {
filename: 'bundle.js',
},
module: {
rules: [
{
test: /\.s?css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
use: [
{
loader: 'url-loader',
options: {
name: '[name].[ext]',
outputPath: 'images',
limit: 8192,
},
},
],
},
],
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
}),
],
devServer: {
port: 9000,
hot: true,
},
};

if (isProduction) {
config.plugins.push(
new MiniCssExtractPlugin({
filename: '[name].css',
})
);
}

return config;
};
//

//**\*\***\*\***\*\***\_**\*\***\*\***\*\***
//=> lesson9 <= COdeformating.Eslin
//**\*\***\*\***\*\***\_**\*\***\*\***\*\***

npm i -D eslint
//
./node_modules/.bin/eslint --init
//
? How would you like to use ESLint? To check syntax and find problems
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? No
? Where does your code run? Node  
? What format do you want your config file to be in? JavaScript  
Successfully created .eslintrc.js file in C:\Cours\gromcodeuniversity\Git_hub_folder\webpack-tools\lesson9\task1

// .eslintrc.js => :
module.exports = {
"env": {
"es6": true,
"node": true
},
"extends": "eslint:recommended",
"globals": {
"Atomics": "readonly",
"SharedArrayBuffer": "readonly"
},
"parserOptions": {
"ecmaVersion": 2018,
"sourceType": "module"
},
"rules": {
}
};

//
JavaScript - .eslintrc.js => експортує обєкт з настройками
YAML - .eslintrc.yaml OR .eslintrc.yml => настройки в YAML форматі
JSON - .eslintrc.json => настройки в JSON форматі
Deprecated - .eslintrc => підтримує JSON і YAML
package.json - package.json => eslintConfig властивості package.json
//
//
npm i -D eslint-config-airbnb-base
npm i -D eslint-config-airbnb // react

npm i -D eslint-plugin-import
//
//

const num = 17;
// eslint-disable
if (num === 18) {
// eslint-disable-next-line no-alert
alert('Hi'); // eslint-disable-line no-alert
}
// eslint-enable
