const input = require('readline-sync')

let n = input.questionInt("enter a number : ");
let sign = -1;
if (n >= 0){
    console.log(n);
}else {
    n = n * sign;
    console.log(n);
}