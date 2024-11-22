const input = require('readline-sync')

let a = input.questionInt(`enter the ${1} number : `);
let b = input.questionInt(`enter the ${2} number : `);
let c = input.questionInt(`enter the ${3} number : `);
let d = input.questionInt(`enter the ${4} number : `);
if ((a < b && a < c && a > d) || (a < b && a < d && a > c) || (a < c && a < d && a > b)){
    console.log(a);
} else if ((b < a && b < c && b > d) || (b < a && b < d && b > c) || (b < c && b < d && b > a)){
    console.log(b);
} else if ((c < a && c < b && c > d) || (c < a && c < d && c > b) || (c < b && c < d && c > a)){
    console.log(c);
} else {
    console.log(d);
}