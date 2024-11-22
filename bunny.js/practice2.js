const input = require('readline-sync');

// let arr = [];
// let n = input.questionInt("enter the size of array : ");
// for (let i = 0; i < n; i++){
//     let a = input.questionInt(`enter the ${i+1} element : `);
//     arr.push(a);
// }

// let arr1 = [];
// for (let i = arr.length-1; i >= -1; i--){
//     let sum = 0;
//     for(let j = arr.length-1; j >= 0; j--){
//         sum += arr[j];
//     }
//     arr1.push(sum);
//     arr.shift();
// }

// console.log(arr1);


// let a = input.question("enter the string : ").split("");
// let arr = [];
// let result = "true"
// for (let i = 0; i < a.length; i++){
//     if(arr.includes(a[i])){
//         result = "false"
//         break;
//     }else {
//         arr.push(a[i])
//     }
// }

// console.log(result);




// let n = input.questionInt("enter the number of items : ");
// let arr = [];

// for (let i = 0; i < n; i++){
//     let obj = {};
//     let key = input.question("enter the item : ");
//     let value = input.questionInt("enter the price : ");
//     obj[key] = value;
//     arr.push(obj)
// }
// console.log(arr);


// let sum_obj = {};
// for (let i = 0; i < arr.length; i++){
//     let obj = arr[i];
//     let key = Object.keys(obj)
//     if(obj.hasOwnProperty(key)){
//         if(sum_obj.hasOwnProperty(key)){
//             sum_obj[key] += obj[key];
//         }else{
//             sum_obj[key] = obj[key]
//         }
//     }
// }
// console.log(sum_obj);





// let A = input.question("enter the timing and the operation [comma seperated] : ").split(",");
// let time1 = A[0].split(":").map(Number);
// let time2 = A[2].split(":").map(Number);
// let str = "";
// if (A[1] === "+"){
//     for(let i = 0; i < 3; i++){
//         let sum_time = time1[i] + time2[i];
//         if(i == 2){
//             str += sum_time.toString().padStart(2,0); 
//         }else{
//             str += sum_time.toString().padStart(2,0) + ":";
//         }
//     }
// }else if(A[1] === "-"){
//     for(let i = 0; i < 3; i++){
//         let sum_time = time1[i] - time2[i];
//         if(i == 0){
//             sum_time = 23 + sum_time;
//             str += sum_time.toString().padStart(2,0) + ":"; 
//         }else if(i == 1){
//             sum_time = 59 + sum_time;
//             str += sum_time.toString().padStart(2,0) + ":";
//         }else{
//             sum_time = 60 + (-sum_time);
//             str += sum_time.toString().padStart(2,0);
//         }
//     }
// }else{
//     console.log("enter a valid operation");
// }
// console.log(str);




// let A = input.question("enter the string : ").split("");
// let count = 0;
// for(let i = 0; i < A.length; i++){
//     if(A[i] === A[i+1]){
//         count++
//         i++;
//     }else{
//         count++;
//     }
// }

// console.log(count);



// let A = input.question("enter the string : ").split("").map(Number);
// let count = 0;
// for (let i = A.length-1; i >= 0; i--){
//     if(A[i] === 0 && A[i-1] !== 0 && i !== 0){
//           A.unshift(A.splice(A[i],1))
//           count++;
//        //   console.log(A);
//     }
// }
// console.log(count);




// let A = input.question("enter the string : ").split(" ").map(Number);
// let total = 0;
// for(let i = A[0]; i <= A[1]; i++){
//     let sum = 0;
//     let j = i;
//     while (j > 0){
//         r = j % 10;
//         j = Math.floor(j/10);
//         sum = sum * 10 + r;
//     }
//     if(sum === i){
//         total += sum;
//     }
// }
// console.log(total);



// let s = input.question("enter the string : ");
// let p = input.question("enter the pattern : "); 

// let i = 0, j = 0;

// while (i < s.length && j < p.length) {
//     if (p[j + 1] === '*') {
//         if (s[i] === p[j] || p[j] === '.') {
//             i++;
//         } else {
//             j += 2;
//         }
//     } else {
//         if (s[i] === p[j] || p[j] === '.') {
//             i++;
//         }
//     }
//     j++;
// }

// console.log(i === s.length && j === p.length);

// let arr = [];
// let n = input.questionInt("enter the size of outter array : ");
// for(let i = 0; i < n; i++){
//     let arr1 = [];
//     let m = input.questionInt("enter the size of inner array : ");
//     for(let j = 0; j < m; j++){
//         let a = input.questionInt(`enter the ${j+1} element :  `);
//         arr1.push(a)
//     }
//     arr.push(arr1);
// }
// let arr3 = [];
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         arr3.push(arr[i][j]);
//     }
// }
// console.log(arr3.sort((a,b) => a - b));



// let A = input.question("enter the number of people and quantity they want [space seperated] : ").split(" ").map(Number);
// let total_quantity = A[0] * A[1];
// let pizza = Math.ceil(total_quantity/4);
// console.log(pizza);



// let n = input.questionInt("enter the size of the array : ");
// let arr = [];
// for (let i = 0; i < n; i++){
//     let a = input.questionInt(`enter the ${i+1} element : `);
//     arr[i] = a;
// }
// let k = input.questionInt("enter the value of k : ");


// let a = input.question("enter the sentence : ");
// let upper_count = 0;
// let lower_count = 0;
// for (let i = 0; i < a.length; i++){
//     if(a[i].charCodeAt(0) >= 65 && a[i].charCodeAt(0) <= 90){
//         upper_count++;
//     }else if(a[i].charCodeAt(0) >= 97 && a[i].charCodeAt(0) <= 122){
//         lower_count++;
//     }
// }
// console.log("upper count : ",upper_count);
// console.log("lower count : ",lower_count);



// let A = input.question("enter the budget and quantity [space seperated] : ").split(" ").map(Number);
// let arr = [];
// for (let i = 1; i <= 5; i++){
//     let set = input.question(`enter the ${i} set [space seperated] : `).split(" ").map(Number);
//         let price = set[0] * A[1];
//         if(price <= A[0]){
//             arr.push(i.toString());
//             arr.push(price);
//         }
// }
// console.log(arr);

// const numbers = arr.filter(item => typeof item === "number")
// console.log(numbers);
