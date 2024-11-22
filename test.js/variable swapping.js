const input = require('readline-sync')

// method [1]
let a = input.questionInt("enter a number a : ");
let b = input.questionInt("enter a number b : ");
// let temp = a;
// a = b;
// b = temp;
// console.log("a :",a);
// console.log("b :",b);



// method [2]
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);



// method[3]
// a = a * b;
// b = a / b;
// a = a / b;
// console.log("a:",a);
// console.log("b:",b);



// method[4]
// a = (a + b) - (b = a);
// console.log("a:", a);
// console.log("b:", b);


// method[5]
a = a^b;
b = a^b;
a = a^b;
console.log("a :",a);
console.log("b :",b);