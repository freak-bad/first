const input = require('readline-sync')
let n = input.questionInt("size of the array : ");
let arr = [];
let arr1 = [];
for (let i = 0; i < n; i++){
    let a = input.questionInt(`enter the ${i+1} element : `);
    arr[i] = a;
}
let y = 1;
let l = arr.length;
for(let i = 1; i < l; i++){
    let j = y;
    while (j < l){
        arr.splice(j,1);
        j += y;
        l = arr.length
    }
    y++;
}
console.log(arr);