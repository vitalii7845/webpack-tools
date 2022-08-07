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
or => "build": "webpack ./src/index.js -p"

- source maps

  "build": "webpack ./src/index.js --mode=production --devtool eval-source-map"

  "scripts": {
  "build": "webpack ./src/index.js --mode=production",
  "watch": "webpack ./src/index.js --mode=development --devtool eval-source-map -w" (or -watch)
  },
