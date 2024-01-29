const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./first.txt','utf8');

console.log(first)

const second = readFileSync('./TextFiles/second.txt','utf8');

console.log(second)

writeFileSync('./TextFiles/second-append.txt', `this is second file \nI have added this`,{flag :'a'});

console.log(second)