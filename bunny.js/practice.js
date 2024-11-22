const input = require("readline-sync")

// let A = input.question("enter the sport : ").toLocaleLowerCase();
// let W = input.question("enter the weather : ").toLocaleLowerCase();

// function sunny_weather(){
//     if (A === "running"){
//         return "wear light shoes and sunglasses.";
//     }else if (A === "cycling"){
//         return "wear light gear.";
//     }else if (A === "hiking"){
//         return "wear sturdy boot and a backpack.";
//     }else if (A === "swimming"){
//         return "wear a swimsuit."
//     }else{
//         return "enter a valid sport."
//     }
// }


// function rainy_weather(){
//     if(A === "running"){
//                 return "wear high boots and a raincoat."
//              }else if(A === "cycling"){
//                  return "wear waterproof gear."
//              }else if(A === "hiking"){
//                  return "wear sturdy boot and a waterproof backpack."
//              }else if(A === "swimming"){
//                  return "wear a swimsuit."
//              }else {
//                  return "enter a valid sport."
//              }
// }


// function cloudy_weather(){
//     if(A === "running"){
//         return "wear light shoes and have a raincoat."
//      }else if(A === "cycling"){
//          return "wear waterproof gear."
//      }else if(A === "hiking"){
//          return "wear sturdy boot and a waterproof backpack."
//      }else if(A === "swimming"){
//          return "wear a swimsuit."
//      }else {
//          return "enter a valid sport."
//      }
// }

// function hot_weather(){
//     if(A === "running"){
//         return "wear light shoes and sunglasses and apply sunscreen."
//      }else if(A === "cycling"){
//          return "wear light gear and apply sunscreen."
//      }else if(A === "hiking"){
//          return "wear light boot and a backpack and apply sunscreen."
//      }else if(A === "swimming"){
//          return "wear a swimsuit and apply sunscreen."
//      }else {
//          return "enter a valid sport."
//      }
// }

// function main(){
//     if (W === "sunny"){
//         return sunny_weather();
//     }else if (W === "rainy"){
//         return rainy_weather();
//     }else if (W === "cloudy"){
//         return cloudy_weather();
//     }else if (W === "hot"){
//         return hot_weather();
//     }else {
//         return "enter a valid weather."
//     }
// }

// console.log(main());





// function outerFunction(){
//     let a = "hello";
//     function innerFunction(){
//         console.log(a);
//     }

//     return innerFunction;
// }

// let closure = outerFunction();
// closure();

// function outerFunction() {
//     let outerVariable = 'I am from outerFunction';

//     function innerFunction() {
//         console.log(outerVariable);
//     }

//     return innerFunction;
// }

// let closure = outerFunction();
// closure(); // Output: "I am from outerFunction"



// const my_set = new Set();
// my_set.add("mayank");
// my_set.add(23);

// // my_set.forEach( (values) => {
// //     console.log(values);
// // });


// console.log(my_set.has(23));



// function find_the_pattern(S){
//     let max = 0;
//     let left = 0; 
//     let right = 0;

//     const set = new Set();


//     while (right < S.length){
//         if (!set.has(S[right])){
//             set.add(S[right]);
//             max = Math.max(max,right-left+1);
//             right++;
//         }else {
//             set.delete(S[left]);
//             left++;
//         }
//     }
//     return max;
// }


// let S = input.question("enter the string pattern : ");
// console.log(find_the_pattern(S));



