const input = require('readline-sync');
let a = input.question("enter the HTML tag : ");

let spl = a.split(">");
console.log(spl);
var str = "";
for(let i = 0; i < spl.length; i++){
    let char = spl[i].split("<");
    console.log(char);
        str += char[0];
}
console.log(str);