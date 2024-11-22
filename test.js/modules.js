const { divide } = require('lodash');
const input = require('readline-sync')
let di = input.questionInt("enter a nymber : ");
let dv = input.questionInt("enter a number : ");
while (di >= dv){
    di -= dv;
}
console.log(di);