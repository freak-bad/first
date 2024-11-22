const { indexOf, first, includes, result, set } = require("lodash");
const { values, slice } = require("lodash");
const { loggamma } = require("maths");
const input = require("readline-sync");

// let n = input.questionInt("enter the size of the array : ");
// let arr = [];
// for(let i = 0; i < n; i++){
//     let A = input.questionInt(`enter the ${i+1} element : `);
//     arr.push(A);
// }
// console.log(arr);
// let k = input.questionInt("enter the value of k : ");
// let arr1 = [];
// for(let i = 0; i < n; i++){
//     if(i + (k) <= arr.length){
//     for(let j = i + (k-1); j >= i; j--){
//         arr1.push(arr[j]);
//     }
//     i = i + (k-1);
// }else{
//     arr1.push(arr[i])
// }
// }
//     console.log(arr1);




// let n = input.questionInt("enter the size of the array : ");
// let arr = [];
// for(let i = 0; i < n; i++){
//     let A = input.questionInt(`enter the ${i+1} element : `);
//     arr.push(A);
// }


// let k = input.questionInt("enter the target value : ");
// let arr1 = [];
// for (let i = 0; i < n; i++){
//     for(let j = i+1; j < n; j++){
//         if(arr[i] + arr[j] === k){
//             arr1.push(i);
//             arr1.push(j);
//             break;
//         }
//     }
// }
// console.log(arr1);



// let A = input.questionInt("enter the number : ");
// let B = A;
// let sum = 0;
// while (B > 0){
//     let r = B % 10;
//     B = Math.floor(B/10);
//     sum = (sum*10)+r;
// }
// if(sum === A){
//     console.log("TRUE");
// }else {
//      console.log("FALSE");
// }



// let A = input.question("enter the roman number : ").split("");
// const I = 1 ; 
// const V = 5 ; 
// const X = 10 ; 
// const L = 50 ; 
// const C = 100 ; 
// const D = 500 ;
// const M = 1000;
// let sum = 0;
// for(let i = 0; i < A.length; i++){
//     if(A[i] == "I"){
//         if(A[i+1] == "V"){
//             sum += V-1;
//             i++;
//         }else if(A[i+1] == "X"){
//             sum += X-1;
//             i++;
//         }else{
//         sum += I;
//         }
//     }else if(A[i] == "V"){
//         sum += V
//     }else if(A[i] == "X"){
//         if(A[i+1] == "L"){
//             sum += L-10;
//             i++;
//         }else if(A[i+1] == "C"){
//             sum += C-10;
//             i++;
//         }else{
//         sum += X;
//         }
//     }else if(A[i] == "L"){
//         sum += L;
//     }else if(A[i] == "C"){
//         if(A[i+1] == "D"){
//             sum += D-100;
//             i++;
//         }else if(A[i+1] == "M"){
//             sum += M-100;
//             i++;
//         }else{
//             sum += C;
//         }
//     }else if(A[i] == "D"){
//         sum += D;
//     }else{
//         sum += M;
//     }
// }
// console.log(sum);



// let arr = [];
// for(let i = 0; i < 2; i++){
//     let arr1 = [];
//     let a = input.questionInt(`enter the size of ${i+1} array : `);
//     for (let j = 0; j < a; j++){
//         let B = input.questionInt(`enter the ${j+1} element of ${i+1} array : `);
//         arr1.push(B);
//     }
//     arr.push(arr1);
// }
// let result = 0;
// for(let i = 0; i < 2; i++){
//     let sum = 0;
//     for(let j = arr[i].length-1; j >= 0; j--){
//         sum = (sum*10) + arr[i][j];
//     }
//     result += sum;
// }
// let arr2 = [];
// for(let i = 0; result > 0; i++){
//     r = result % 10;
//     result = Math.floor(result/10);
//     arr2.push(r)
// }
// console.log(arr2);




// let A = input.question("enter the string : ");
// const set = new Set();
// let arr = [];
// let count = 0;
// for (let i = 0; i < A.length; i++){
//     if(!set.has(A[i])){
//         set.add(A[i]);
//         count++;
//     }else{
//         arr.push(count);
//         count = 1;
//         // console.log(set.size);
//         set.clear();
//         set.add(A[i]);
//     }
// }
// arr.push(count);
// console.log(Math.max(...arr));




// let n = input.questionInt("enter the size of array : ");
// let arr = [];
// for(let i = 0; i < n; i++){
//     let a = input.question(`enter the ${i+1} string : `);
//     arr.push(a);
// }

// arr.sort();
// console.log(arr);
// let start = arr[0];
// let end = arr[arr.length-1];
// let i = 0;
// while(i < start.length && i < end.length && start[i] === end[i]){
//     i++;
// }
// console.log(start.substring(0,i));




// let s = input.question("enter the string : ");
// const expanAroundCenter = (left,right) => {
//     while (left >= 0 && right < s.length && s[left] === s[right]){
//         left--;
//         right++;
//     }
//     return s.slice(left+1,right);
// }

// console.log(expanAroundCenter(s));





// let n = input.questionInt("enter the size of array : ");
// let arr = [];
// for(let i = 0; i < n; i++){
//     let a = input.questionInt(`enter the ${i+1} element : `);
//     arr.push(a);
// }

// let m = input.questionInt("enter the size of array : ");
// let arr1 = [];
// for(let i = 0; i < m; i++){
//     let a = input.question(`enter the ${i+1} operation : `).toLocaleLowerCase();
//     arr1.push(a);
// }

// for(let i = 0; i < m; i++){
//     let str = "";
//     for(let k = 0; k < 3; k++){
//         str += arr1[i][k];
//     }
//     for(let j = 0; j < n; j++){
//         let spl = arr1[i].split("").map(Number);
//         if(str === "add"){
//             arr[j] += spl[spl.length-1];
//         }else if(str === "sub"){
//             arr[j] -= spl[spl.length-1];
//         }else if(str === "mul"){
//             arr[j] *= spl[spl.length-1];
//         }else if(str === "div"){
//             arr[j] /= spl[spl.length-1];
//         }
//     }
// }

//  console.log(arr);




// let n = input.questionInt("enter the size of array : ");
// let arr = [];
// for(let i = 0; i < n; i++){
//     let a = input.question(`enter the ${i+1} element : `);
//     arr.push(a);
// }


// let m = input.questionInt("enter the size of array : ");
// let arr1 = [];
// for(let i = 0; i < m; i++){
//     let b = input.question(`enter the ${i+1} element : `);
//     arr1.push(b);
// }

// let filter1 = arr.filter(element => !arr1.includes(element));

// let filter2 = arr1.filter(element => !arr.includes(element));

// let merge = filter1.concat(filter2);
// console.log(merge);

// let result = merge.map(element => {
//     const char = parseInt(element,10);
//     if(isNaN(char)){
//         return element;
//     }else{
//         return char;
//     }
// });

// console.log(result);




// ROCK - PAPER - CISSOR

// let combi = ["ROCK","PAPER","CISSOR"];

// console.log("valid moves : ");
// console.log("R for ROCK");
// console.log("P for PAPER");
// console.log("C for CISSOR");
// for(;;){
//     let a = input.question("enter your move : ").toLocaleLowerCase();
//     let move = Math.floor(Math.random() * combi.length);
//     let opt = combi[move]
//     console.log("opponent's move :",combi[move]);
//     // console.log(typeof combi[move]);
//     if(a === "r" && opt == "ROCK"){
//     }else if (a === "r" && opt == "PAPER"){
//         console.log("you loose :( ");
//     }else if (a === "r" && opt == "CISSOR"){
//         console.log("you win :) ");
//         break;
//     }else if(a === "p" && opt == "ROCK"){
//         console.log("you win :) ");
//         break;
//     }else if (a === "p" && opt == "PAPER"){
//     }else if (a === "p" && opt == "CISSOR"){
//         console.log("you loose :( ");
//     }else if(a === "c" && opt == "ROCK"){
//         console.log("you loose :( ");
//     }else if (a === "c" && opt == "PAPER"){
//         console.log("you win :) ");
//         break;
//     }else if (a === "c" && opt == "CISSOR"){
//     }
// }




// let n = input.questionInt("enter the size of array : ");

// function array(n,callback){
//     let arr = [];
//     for(let i = 1; i <= n; i++){
//         arr.push(i);
//     }
//     return callback(arr);
// }

// function sumarr(arr){
//     for(let i = 0; i < arr.length; i++){
//         let e = arr[i];
//         let count = 0;
//         for(let j = 1; j <= i; j++){
//             if(e%j == 0){
//                 count++;
//             }
//         }
//         if(count <= 2){
//             return e;
//         }
//     }
// }


// console.log(array(n,sumarr));




// let a = input.question("enter the string : ").toLowerCase();
// let set = new Set();
// for(let i = 0; i < a.length; i++){
//     if(!set.has(a[i])){
//         set.add(a[i]);
//     }
// }
// // console.log(set.size);
// if(set.size == 26){
//     console.log("yes");
// }else{
//     console.log("no");
// }


// let nums = [12,345,2,6,7896];

//     let count = 0;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i].toString().length % 2 == 0){
//             count++;
//         }
//         console.log(count);
//     }




// let arr = [1,2,3,4,5,6];
// let char = 65;
// for(let i = 0; i < arr.length; i++){
//     obj[String.fromCharCode(char)] = arr[i];
//     char++;
// }
// console.log(obj);
// console.log(obj);
// // let new_value = obj.color.splice(1,1);
// // console.log(new_value);


// let arr = obj.color;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == "black"){
//         obj.color.splice(i,1);
//     }
// }
// console.log(obj);

// let obj = {color:["red","blue","black"]};

// // let old = "color";
// // let naya = "age";

// // if(obj.hasOwnProperty(old)){
// //     obj[naya] = obj[old]
// //     delete obj[old]
// // }

// // console.log(obj);

// console.log(Object.values(obj));








// let lowLimit = input.questionInt("low limit : ");
// let highLimit = input.questionInt("high limit : ");

// var countBalls = function(lowLimit, highLimit) {
//     let arr = [];
//     for(let i = lowLimit; i <= highLimit; i++){
//         let sum = 0;
//         let j = i;
//         while(j > 0){
//             let r = j % 10;
//             j = Math.floor(j/10);
//             sum += r;
//         }
//         arr[sum]++;
//     }
//     let max = Math.max(...arr);
//     console.log(max);
// };

// countBalls(lowLimit,highLimit);





// let a = input.questionInt("Enter the number of dishes: ");

// let menu = [];
// for (let i = 1; i <= a; i++) {
//     let name = input.question("Enter the name of the dish: ");
//     let ingredient = [];
//     let x = input.questionInt("Enter the number of ingredients: ");
//     for (let j = 1; j <= x; j++) {
//         let ing = input.question(`Enter the ${j} ingredient: `);
//         ingredient.push(ing);
//     }
//     let time = input.questionInt("Enter the time required to prepare the dish : ");
//     menu.push({ NAME: name, INGREDIENT: ingredient, Time: time});
// }
// console.log(menu);

// let arr = [];
// let y = input.questionInt("Enter the number of ingredients you have: ");
// for (let i = 1; i <= y; i++) {
//     let rt = input.question(`Enter the ${i} ingredient you have: `);
//     arr.push(rt);
// }
// console.log(arr);

// let avi_time = input.questionInt("Enter the time you can wait for the dish : ");

// let arr1 = [];
// for (let i = 0; i < menu.length; i++) {
//     let allIngredientsAvailable = true;
//     for (let j = 0; j < menu[i].INGREDIENT.length; j++) {
//         if (!arr.includes(menu[i].INGREDIENT[j])) {
//             allIngredientsAvailable = false;
//             break;
//         }
//     }
//     if (allIngredientsAvailable) {
//         arr1.push(menu[i]);
//     }
// }

// let bestDish = arr1.filter((dish) => dish.Time <= avi_time);

// console.log(bestDish.map(dish => dish.NAME));




// let arr = [1,2,3,4,5,6,7,8,9,10];
// let k = 4;

// function bso(arr,k){

//     let l = 0;
//     let r = arr.length;
//     let result = "no";
//     while (l <= r){
//         let m = Math.floor((l+r)/2);
//         if(arr[m] == k){
//             result = "yes";
//             break;
//         }else{
//             if(arr[m] < k){
//                 l = m + 1;
//             }else{
//                 r = m - 1;
//             }
//         }
//     }
//     return result;
// }


// console.log(bso(arr,k));




// let arr = [3,4,2,1,5,2,3,6,4,9];

// function EC(arr){
//     let c = new Array(Math.max(...arr) + 1).fill(0);
//     for(let i = 0; i < arr.length; i++){
//         c[arr[i]]++;
//     }
//     return c;
// }

// console.log(EC(arr));





// let nums = [1,1,1,0,0,1,1,1,0,1] 

// function MCO(nums){
//     let l = 0;
//     let r = 0;
//     let zc = 0;
//     let mc = 0;

//     while(r < nums.length){
//         if(nums[r] === 0){
//             zc++;
//         }


//         while(zc > 1){
//             if(nums[l] === 0){
//                 zc--;
//             }
//             l++;
//         }

//         mc = Math.max(mc,r-l+1);

//         r++;
//     }
//     return mc;
// }

// console.log(MCO(nums));




// let inp = "my2 name3 hello1 is4 shalini5"
// let a = inp.split(" ");
// let arr = [];
// // let arr = new Array(a.length);
// console.log(arr.length);
// console.log(a);
// let str = "";

// for(let i = 0; i < a.length; i++){
//     let n = a[i].slice(a[i].length-1);
//     let char = a[i].substring(0,a[i].length-1);
//     for(let j = 0; j < a.length; j++){
//         if(n == j+1){
//         arr[j] = char;
//     }
//     }
// }
// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     str += arr[i] + " ";
// }
// console.log(str);




let str1 = "attack";
let str2 = "defend";




function com(str1,str2){
    let spl = str1.split("").sort().join("");
    let spl1 = str2.split("").sort().join("");
    if(spl === spl1){
        console.log("True");
    }else{
        console.log("False");
    }
}

com(str1,str2);