// spiral
const input = require('readline-sync')
let n = input.questionInt("enter a number : ");
let arr = [];
for (let i = 0; i < n; i++){
    arr[i] = [];
    for(let j = 0; j < n; j++){
        arr[i][j] = 0;
    }   
}
// console.log(arr);
let num = 1;
let top = 0;
let bottom = n - 1;
let left = 0;
let right = n - 1;

while (top <= bottom && left <= right){
    for(let i = left; i <= right; i++){
        arr[top][i] = num++;
    }
    top++;

    for(let i = top; i <= bottom; i++){
        arr[i][right] = num++;
    }
    right--;

    for(let i = right; i >= left; i--){
        arr[bottom][i] = num++;
    }
    bottom--;

    for(let i = bottom; i >= top; i--){
        arr[i][left] = num++;
    }
    left++;
}
console.log(arr);