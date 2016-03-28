//loading file system
fs = require('fs');

//callback
function phoneNumber(err, data) {
    console.log('data:', data);
}

fs.readdir('c:/', phoneNumber);

console.log("This comes after");
