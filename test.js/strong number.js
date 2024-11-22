const input = require('readline-sync')
function factorial(m){
    if (m === 0){
        return 1;
    } else {
        return m * factorial(m - 1);
    }
}
let N = input.questionInt("enter the number : ");
let sum = 0;
let A = N;
while(A != 0){
    let r = A % 10;
    A = Math.floor(A/10);
    sum = sum + factorial(r);
}
if (sum == N){
    console.log("strong number :",N);
}else {
    console.log("not a strong number :",N);
}
