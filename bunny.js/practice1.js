const input = require('readline-sync');


// let character = "9"
// function getAsciiValue(char){
//     return char.charCodeAt(0);
// }
// console.log(getAsciiValue(character));



// var char = input.question("enter the char : ");

// function isVowel(char) {

//     var asciiValue = getAsciiValue(char);


//     if (asciiValue === 97 || asciiValue === 101 || asciiValue === 105 || asciiValue === 111 || asciiValue === 117){
//         console.log("TRUE");
//     }else if(asciiValue === 65 || asciiValue === 69 || asciiValue === 73 || asciiValue === 79 || asciiValue === 85){
//     console.log("TRUE");
//     }else {
//         console.log("FALSE");
//     }
// }

// isVowel(char);


// let asciiValue = input.question("ascii value : ")
// function getCharFromAscii(asciiValue){
//     return String.fromCharCode(asciiValue);
// }

// console.log(getCharFromAscii(asciiValue));


// let character = input.question("enter the character : ");
// let result = "YES"
// function find_digit(character){
//     for (let i = 0; i < character.length; i++){
//         let asciiValue = character.charCodeAt(i);
//         if (asciiValue >= 47 && asciiValue <= 57){
//         }else {
//             result = "NO";
//             break;
//         }
//     }
//     console.log(result);
// }

// find_digit(character);



// #another way to find digit


// function find_digit(character) {
//     let right_order = /*/^\d+$/;*/ /^[a-zA-z]+$/
//     if (right_order.test(character)){
//         console.log("YES");
//     }else {
//         console.log("NO");
//     }
// }

// find_digit(character);




// function toUpperCase(character) {
//     let str = "";
//     for (let i = 0; i < character.length; i++){
//         let char = character.charAt(i);
//         let asciiValue = char.charCodeAt(0);
//         if (asciiValue >= 97 && asciiValue <= 122){
//             str += String.fromCharCode(asciiValue - 32);
//         }else {
//             str += char;
//         }
//     }
//     console.log(str);
// }

// toUpperCase(character)



// function find_frequency(character) {
//     let frequency = {};
//     for (let i = 0; i < character.length; i++){
//         let char = character[i];
//         if(frequency[char] === undefined){
//             frequency[char] = 1;
//         }else {
//             frequency[char]++;
//         }
//     }
//     return frequency;
// }

// console.log(find_frequency(character));



// let str = input.question("enter the string : ");
// function sumascii(str) {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++){
//         // let char = str.charAt(i)
//         sum += str.charCodeAt(i);
//     }
//     return sum;
// }


// console.log(sumascii(str));





// let str = input.question("enter the string : ")
    
// let frequency = {};
// for (let i = 0; i < str.length; i++){
//         let char = str[i]
//         if(frequency[char] === undefined){
//             frequency[char] = 1;
//         }else{
//             frequency[char]++;
//         }
//     }

// console.log(frequency);


// let highest_char = "";
// let lowest_char = "";
// let max_freq = 0;
// let min_freq = Infinity;

// const chars = Object.keys(frequency)
// for (let i = 0; i < chars.length; i++){
//     let character = chars[i];
//     if (frequency[character] > max_freq || frequency[character] > max_freq && character.charCodeAt(0) > highest_char.charCodeAt(0)){
//         max_freq = frequency[character];
//         highest_char = character
//     }else if (frequency[character] < min_freq){
//         min_freq = frequency[character];
//         lowest_char = character;
//     }
// }

// console.log(highest_char);
// console.log(lowest_char);


// let new_str = "";
// for (let i = 0; i < str.length; i++){
//     let new_char = str[i];
//     if (new_char === highest_char){
//         new_str += lowest_char;
//     }else{
//         new_str += new_char;
//     }
// }

// console.log(new_str);










// let str = input.question("enter the string : ");

// let frequency = {};
// for (let i = 0; i < str.length; i++){
//     let char = str[i];
//     if(frequency[char] === undefined){
//         frequency[char] = 1
//     }else {
//         frequency[char]++;
//     }
// }


// let highest_char = "";
// let lowest_char = "";
// let max_freq = 0;
// let min_freq = Infinity;

// let chars = Object.keys(frequency);
// for (let i = 0; i < chars.length; i++){
//     let character = chars[i];
//     if(frequency[character] > max_freq || frequency[character] > max_freq && character.charCodeAt(0) > highest_char.charCodeAt(0)){
//         max_freq = frequency[character];
//         highest_char = character;
//     }else if (frequency[character] < min_freq){
//         min_freq = frequency[character];
//         lowest_char = character;

//     }
// }


// let new_str = "";
// for (let i = 0; i < str.length; i++) {
//     let new_char = str[i];
//     if(new_char === highest_char){
//         new_str += lowest_char;
//     }else{
//         new_str += new_char;
//     }
    
// }

// console.log(new_str);

























// // let obj = {
// //     one : 1,
// //     two : 2, 
// //     three : 3,
// // }

// // let sum = obj["one"] + obj["two"]
// // console.log(sum);












