// mathematical series (1)

let n = input.questionInt("enter the range : ");
let m = input.questionInt("enter the number : ");
var sum = 0;
let a = 1;
for (let i = 1; i <= n; i++) {
    var sol = (m**a)/a;
    sum = sum + sol;
    a++;
} console.log(sum);
