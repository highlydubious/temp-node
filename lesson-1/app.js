const sayHi = require("./utils.js");
const names = require("./names.js");
const data = require("./6-alternative");

// Even without exporting, an invoked function in another module will run
require("./7-mind-grenade");

const { name1, name2 } = names;
const { items, singlePerson } = data;

// console.log(sayHi(name1));

console.log(singlePerson.name);
