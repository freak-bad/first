const input = require('readline-sync')

let n = input.questionInt("size of the array : ");
let arr = [];
for (let i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    arr[i] = a;
}
let sum = 0;
let sum1 = 0;
for (let i = 0; i < n; i++){
    if (arr[i]%2 == 0){
        sum1 += arr[i];
    }else {
        sum += arr[i];
    }
}console.log("sum of odd numbers : ",sum);
console.log("sum of even numbers :",sum1);