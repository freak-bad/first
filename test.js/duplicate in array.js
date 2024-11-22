const { noop } = require('lodash');
const input = require('readline-sync')

let n = input.questionInt("size of the array : ");
let arr = [];
for (let i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    arr[i] = a;
}
for (let i = 0; i < n; i++){
    let count = 0;
    for (let j = i+1; j < n; j++){
        if (arr[i] === arr[j]){
            arr[j] = 0;
            count++;
        }
    }
    if (count === 0){
        arr[i] = 0;
    }
}console.log(arr);