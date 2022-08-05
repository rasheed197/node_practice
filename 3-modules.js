// CommonJS - every file in node is a module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require("./3a-names")
const sayHi = require("./3b-utils")
const data = require("./3c-alternative-flavour")
require("./3d-mind-grenade")

console.log(names)
console.log(sayHi)
console.log(data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)