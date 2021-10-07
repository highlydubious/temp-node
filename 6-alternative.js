// Alt Method 1
module.exports.items = ["item1", "item2", "item3"];

const person = {
  name: "Bob",
};

// Alt Method 2
module.exports.singlePerson = person;

// console.log(module.exports);
// { items: [ 'item1', 'item2', 'item3' ], singlePerson: { name: 'Bob' } }
// produces object with two keys: 1. items (array) 2. singlePerson: object
// will export all together
