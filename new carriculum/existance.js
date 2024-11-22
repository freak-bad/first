const input = require('readline-sync')

let n = input.questionInt("size of the array : ");
let arr = [];
for (let i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    arr[i] = a;
}
let result = "no";
let k = input.questionInt("enter the k value : ")
for (let i = 0; i < n; i++){
    if (arr[i] == k){
        result = "yes";
        break;
    }
}
console.log(result);