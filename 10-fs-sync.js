// SYNC Method
const { readFileSync, writeFileSync, write } = require("fs");

// Read Files in Node
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

// Write Files in Node
// will either create new file or overwrite file
writeFileSync(
  "./content/results-sync.txt",
  `Here is the result ${first}, ${second}`
);

// Append to File
writeFileSync(
  "./content/results-sync-append.txt",
  `Here is the result ${first}, ${second}`,
  { flag: "a" }
);
