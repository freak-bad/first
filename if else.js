const { loggamma } = require('maths');
const input = require('readline-sync')
 

// // second max


// // let a = input.question("enter a number");
// // let b = input.question("enter a number");
// // let c = input.question("enter a number");
// // if (( a > b && a < c) || ( a < b && a > c)) {
// //     console.log(a);
// // } else if ((b < a && b > c) || (b > a && b < c)){
// //     console.log(b);
// // } else {
// //     console.log(c);
// // }



// // maximum of 3 number 

// let a = input.question("enter a string:")
// let rev = a.split('').reverse().join('');
// if (a === rev){
//     console.log("palindrome");
// } else {
//     console.log("NOT");
// }
// let a = input.questionInt("enter a number : ")
// let b = input.questionInt("enter a number : ")
// let c = input.questionInt("enter a number : ")
// if ((a > b && a > c)){
//     console.log(a);
// } else if ((b > a && b > c)){
//     console.log(b);
// } else {
//     console.log(c);
// }


// // maximum of 4 number 


// let a = input.question("enter a number");
// let b = input.question("enter a number");
// let c = input.question("enter a number");
// let d = input.question("enter a number");
// if ( a > b && a > c && a > d){
//     console.log(a);
// } else if (b > a && b > c && b > d){
//     console.log(b);
// } else if (c > a && c > b && c > d){
//     console.log(c);
// } else {
//     console.log(d);
// }


// // third max in 4 numbers


// let a = input.question("enter a number");
// let b = input.question("enter a number");
// let c = input.question("enter a number");
// let d = input.question("enter a number");
// if ((a < b && a < c && a > d) || (a < b && a < d && a > c) || (a < c && a < d && a > b)){
//     console.log(a);
// } else if ((b < a && b < c && b > d) || (b < a && b < d && b > c) || (b < c && b < d && b > a)){
//     console.log(b);
// } else if ((c < a && c < b && c > d) || (c < a && c < d && c > b) || (c < b && c < d && c > a)){
//     console.log(c);
// } else {
//     console.log(d);
// }


// // palindrome for number


// let a = input.questionInt("enter the number:")
// let c=a
// let sum = 0;

// while(a>0){
//     d=a%10
//     sum=(sum*10)+(d)
//     a=Math.floor(a/10)
// } if ( c == sum) {
//     console.log("palindrome");
// } else {
//     console.log("NOT");
// }   


// palindrome for string


// let a = input.question("enter a string:");
// let rev = a.split('').reverse().join('');
// if (a === rev){
//     console.log("palindrome");
// } else {
//     console.log("NOT");
// }


// prime number


// let a = input.questionInt("enter a number :");
// let co=0
// for (let i = 1;i <= a;i++){
//     if (a % i == 0){
//         co+=1
//     }
// }
// if(co==2){
//     console.log("prime number ");
// }
// else{
//     console.log(" not prime number ");
// }


// LCM and HCF


// let a = input.questionInt("enter a number: ");
// let b = input.questionInt("enter a number: ");
// let A = a,B = b;
// while (b !== 0){
//     let temp = b;
//     b = a % b;
//     a = temp;
// }
// let c = (A * B);
// let LCM = Math.floor(c / a);
// console.log(LCM,a);
  

// perfect number


// let a = input.questionInt("enter a number: ");
// let A = a;
// let sum = 0;
// for (i = 1 ; i < a ;i++){
//     if ( a % i == 0){
//         sum+=i
//     }
// } if (a == sum){
//     console.log("perfect number");
// } else {
//     console.log("not a perfect number");
// }


// maximum and minimum of N numbers

// let n = input.questionInt("enter a number: ");
// var a = input.questionInt(`enter the ${1} element: `);
// var max = a;
// var min = a;
// for (i = 2; i <= n; i++){
// let b = input.questionInt(`enter the ${i} element : `);
// if (b > max){
//     max = b;
// }else if (b < min){
//      min = b;
// }else{

// }
// }console.log("max: ",max);
// console.log("min: ",min);


// mathematical series (1)

// let n = input.questionInt("enter the range : ");
// let m = input.questionInt("enter the number : ");
// var sum = 0;
// let a = 1;
// for (let i = 1; i <= n; i++) {
//     var sol = (m**a)/a;
//     sum = sum + sol;
//     a++;
// } console.log(sum);


// mathematical series (2)

// let n = input.questionInt("enter the range : ");
// let m = input.questionInt("enter the number : ");
// var sum = 0;
// let a = 1;
// let sign = 1;
// for (let i = 1; i <= n; i++) {
//     var sol = (m**a)/a;
// sum += sign * sol;
// sign = -sign;
// a += 2;
// } console.log(sum);


// mathematical series (3)


// let n = input.questionInt("enter the range : ");
// let m = input.questionInt("enter the number : ");
// function factorial(m){
//     if (m === 0){
//         return 1;
//     } else {
//         return m * factorial(m - 1);
//     }
// }
// var  a = 1;
// let sum = 0;
// var sign = 1;
// for (let i = 1; i <= n; i++){
//    var sol = ((m**a)/factorial(a));
// sum += sign * sol;
// sign = -sign;
// a += 2;
// } console.log(sum);


// pattern [Q.11] (1 = right angled triangle)


// let r = input.questionInt("number of row's : ");
// let c = input.questionInt("number of coloum's : ")
// for (i = 1; i <= r; i++){
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "* ";
//     }console.log(pattern);
// } 


// pattern [Q.11] (2 = right angled triangle up side down)

// let r = input.questionInt("enter a number : ");
// for (i = 1; i <= r; i++) {
//     let pattern = "";
//     for (let j = r; j >= i; j--){
//         pattern += "* ";
//     } console.log(pattern);
// }


// pattern [Q.11] (3)

// let n = input.questionInt("enter a number : ");
// let p = 1;
// for (let i = 1; i <= n; i++){
//     let pattern = "" ;
//     for (let j = 1; j <= i; j++){
//         pattern += p + " ";
//         p++;
//     } console.log(pattern);
// }


// pattern [Q.11] (4)

// let n = input.questionInt("enter a number : ");
// let b = 2;
// let i = 0;
// while (i <= (n - 1)){
//     let j = 0;
//     let pattern = "";
//     while (j <= (i)){
//         if (i == 0){
//             pattern += i;
//         }else {
//             if (j == 0){
//                 pattern += (b**i);
//             }else {
//                pattern +=(b**(i + 1));
//             }
//         }
//         pattern += " ";
//         j++;
//     }
//     console.log(pattern);
//     i++;
// }



// pattern [Q.11] (5)

// let n = input.questionInt("give a number : ");
// let i = 1;
// while (i <= n){
//     let j = 1;
//     let pattern = "";  
//     while (j <= i){
//         pattern += j + " ";
//         j++;
//     } for (let k = i -1; k > 0; k--){
//         pattern += k + " ";
//     }
//     i++;
//     console.log(pattern);
// }

