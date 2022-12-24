const path = require('path');

console.log(path.sep);
const join=path.join('content','subfolder','test.txt');
console.log(join);

const BaseName=path.basename('content','subfolder','test.txt');
console.log("Base file is : ",BaseName, "file");

const ComDir= path.resolve(__dirname,"content","subfolder","test.txt");
console.log(ComDir);
