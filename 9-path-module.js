const path = require("path");

// console.log(path);
// console.log(path.sep);

// Get normalized path
const filePath = path.join("/content", "subfolder", "text.txt");
// console.log(filePath);

// Get Basename of Path
const base = path.basename(filePath);
// console.log(base);

// Provies the full path from the root directory
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
// -> /Users/alexdubelko/Desktop/Programming/Node/node_tutorial/node-lessons/content/subfolder/text.txt
// console.log(absolute);
