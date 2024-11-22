const input = require('readline-sync')
// let x = input.question("enter the temperature and weather : ");
// let info = x.split(" ").map(Number);
// let fer = info[0] * 1.8 + 32;
// if (info[1] == 0){
//     if (fer > 69){
//         console.log("temp :",fer,"weather : sunny",",wear light clothing.");
//     }else if (fer >= 50){
//         console.log("temp :",fer,"weather : sunny",",wear a light jacket.");
//     }else{
//         console.log("temp :",fer,"weather : sunny",",wear a heavy coat.");
//     }
// }else if(info[1] == 1){
//     if (fer > 69){
//         console.log("temp :",fer,"weather : rainy",",wear light clothing and bring an umbrella.");
//     }else if (fer >= 50){
//         console.log("temp :",fer,"weather : rainy",",wear a light jacket and bring an umbrella.");
//     }else{
//         console.log("temp :",fer,"weather : rainy",",wear a heavy coat and bring an umbrella.");
//     }
// }else{
//     console.log("invalid input");
// }




// let T = input.questionInt("enter the number of test cases : ");
// let testcase = [];
// for (let i = 0; i < T; i++){
//     testcase[i] = [];
//     testcase[i][0] = input.questionInt("enter the value of threshold : ");
//     let N = input.questionInt("enter the number of items : ");
//     for (let j = 1; j < N+1; j++){
//         // format to enter [threshold,item quantity price]
//         testcase[i][j] = input.question("enter all the info : ");
//     }
// }

// function totalPrice(T,testcase){
//     const result = [];

//     for (i = 0; i < T; i++){
//         const threshold = testcase[i][0];
//         const Item = testcase[i].slice(1);


//         var totalCost = 0;
//         for (let j = 0; j < Item.length; j++){
//             const itemDetail = Item[j].split(" ");
//             const quantity = parseInt(itemDetail[1]);
//             const price = parseFloat(itemDetail[2]);
//             totalCost += quantity * price;
//             // console.log(totalCost);
//         }
//             if (totalCost > threshold){
//              totalCost -= totalCost*0.1;
//             //  console.log(totalCost);
//             }
//         result.push(totalCost);
//     }
//     return result;
        
// }
// const finalResult = totalPrice(T,testcase);
// console.log(finalResult.join("\n"));








// var string = input.question("enter a string : ");
// var range = input.question("enter the start value : ");
// var range1 = input.question("enter the end value : ");
// function split(string,range,range1){
//     const splited = string.split("");
//     for (let i = range; i <= range1; i++){
//         if (splited[i] === "0"){
//             splited[i] = "1";
//         }else {
//             splited[i] = "0";
//         }
//     }
//     return splited.join("");
// }

// let splittedstring = split(string,range,range1);
// console.log(splittedstring);




// let bloodBank = [];

// function bloodDonation(donor,bloodType,date,gender){
//     bloodBank.push({name : donor,bloodname : bloodType,tarikh : date, gender : gender,});
//     console.log("blood donation entry registered sucessfully.");
//     console.log(bloodBank);
// }

// function removeBloodDonation(donor){
//     let index = bloodBank.findIndex(entry => entry.donor === donor);
//     if (index !== -1){
//         bloodBank.splice(index,1);
//         console.log("blood donation entry deleted.");
//     }else{
//         console.log("there is no such blood donstion entry.");
//     }
//     console.log(bloodBank);
// }

// function checkAvaiblity(bloodType){
//     let available = bloodBank.some(entry => entry.bloodType === bloodType);
//     if (available){
//         console.log("available.");
//     }else{
//         console.log("not available.");
//     }
// }

// function ops(){
//     console.log("'0' for blood donation");
//     console.log("'1' to remove blood donation entry");
//     console.log("'2' to check blood availiblity");
//     for(;;){
//     let op = input.questionInt("enter the operation :");
//     if (op === 0){
//         let donor = input.question("enter the name of the donor : ");
//         let bloodType = input.question("enter the blood type ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') : ");
//         let date = input.question("enter the date (yyyy-mm-dd) : ");
//         let gender = input.question("enter the gender : ");
//         bloodDonation(donor,bloodType,date,gender);
//     }else if (op === 1){
//         let donor = input.question("enter the name of donor : ");
//         removeBloodDonation(donor);
//     }else if (op === 2){
//         let bloodType = input.question("enter the blood type : ");
//         checkAvaiblity(bloodType);
//     }else if (op === 3){
//         console.log("exiting the operration....");
//         break;
//     }else {
//         console.log("invalid entry please try again.");
//     }
// }
// }
// ops();



// let T = input.questionInt("enter the number of test cases : ");
// let testcase = [];

// for (let i = 0; i < T; i++){
//     testcase[i] = [];
//     testcase[i][0] = input.questionInt("enter the value of threshold : ");
//     let N = input.questionInt("enter the number of items : ");
//     for (let j = 1; j < N+1 ; j++){
//         testcase[i][j] = input.question("enterw the items : ");
//     }
// }


// function total_cost(T,testcase){
//     let result = [];
//     for (let i = 0; i < T; i++){
//         const threshold = testcase[i][0]
//         const item = testcase[i].splice(1)
        
//         let total_cost = 0;
//         for (let i )
//     }
// }





// let T = input.questionInt("enter the number of test cases : ");
// let testcase = [];
// for (let i = 0; i < T; i++){
//     testcase[i] = [];
//     testcase[i][0] = input.questionInt("enter the value of threshold : ");
//     let N = input.questionInt("enter the number of items : ");
//     for (let j = 1; j < N+1; j++){
//         // format to enter [threshold,item quantity price]
//         testcase[i][j] = input.question("enter all the info : ");
//     }
// }

// function totalPrice(T,testcase){
//     const result = [];

//     for (i = 0; i < T; i++){
//         const threshold = testcase[i][0];
//         const Item = testcase[i].slice(1);


//         var totalCost = 0;
//         for (let j = 0; j < Item.length; j++){
//             const itemDetail = Item[j].split(" ");
//             const quantity = parseInt(itemDetail[1]);
//             const price = parseFloat(itemDetail[2]);
//             totalCost += quantity * price;
//             // console.log(totalCost);
//         }
//             if (totalCost > threshold){
//              totalCost -= totalCost*0.1;
//             //  console.log(totalCost);
//             }
//         result.push(totalCost);
//     }
//     return result;
        
// }
// const finalResult = totalPrice(T,testcase);
// console.log(finalResult.join("\n"));
