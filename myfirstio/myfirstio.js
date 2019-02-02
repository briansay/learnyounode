//Longer version of doing it

let fs = require('fs');
let buffer = fs.readFileSync(process.argv[2]);
let string = buffer.toString();
let split = string.split('\n');

console.log(split.length-1);



//shorter version - optimised
let fs = require('fs')

let contents = fs.readFileSync(process.argv[2])
let lines = contents.toString().split('\n').length - 1
console.log(lines)
