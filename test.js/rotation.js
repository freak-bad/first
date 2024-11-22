const input = require('readline-sync')

let n = input.questionInt("enter the size of the array : ");
let arr = [];
let arr1 = [];
for (let i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    arr[i] = a;
}
let k = input.questionInt("enter the value of k : ");
let l = arr.length;
let x = (k - 1);
while (l != 1){
    for (i = 0; i < x; i++){
        arr.push(arr.shift());
    }
    arr1.push(arr.shift());
    l = arr.length
}
let arr2 = arr1.concat(arr);
console.log(arr2);