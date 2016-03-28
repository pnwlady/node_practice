//loading in the file system
fs = require('fs');

//looking/reading in the c directory
data = fs.readdirSync('node:/');
console.log('data:', data);

console.log("this comes after");
