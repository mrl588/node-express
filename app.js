// npm - global comes with node
// npm --version checks version

// local dependency - use it only in particular project
// npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)\

// package.json - manifest file (stores important info about package/project)
// manual approach ( create package.json in ROOT, create properties etc)
// npm init (step by step , press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)