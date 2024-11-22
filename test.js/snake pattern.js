const input = require('readline-sync')

let n = input.questionInt("enter the number : ");
let pattern = "";
let j = 1;
for (let i = 1; i <= n; i++){
    let x = 1;
    if (i % 2 !== 0){
        while (x <= n){
            pattern += j + " ";
            j++;
            x++;
        }
    }else {
            let k = j + (n-1);
            while (x <= n){
                pattern += k + " ";
                k--;
                x++;
            }
        j = (k + n+1);
    }
    pattern += "\n";
}console.log(pattern);
    