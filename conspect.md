TOOLS

lesson_1_intruduction
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
