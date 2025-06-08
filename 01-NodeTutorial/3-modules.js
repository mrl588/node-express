//Modules - Encapsulated Code ( only share minimum)
//every file in node is a module
const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-export')
require('./7-mind-grenade') // when you require, it runs all 
// top level code even if you didnt export


sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
