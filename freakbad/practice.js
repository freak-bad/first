const { start } = require('init');
const { values, indexOf, max } = require('lodash');
const input = require('readline-sync')



// function findprimenumber(a){
//     let count =0
//     for (let i = 1;i <= a;i++){
//         if (a % i == 0){
//             count +=1
//         }
//     }
//     if(count==2){
//         return "prime number";
//     }
//     else{
//         return "not a prime";
//     }
// }



// const { questionInt } = require("readline-sync");

// // metrix [1]
// let N = input.questionInt("enter the size of first array : ");
// let M = input.questionInt("enter the size of second array : ");
// let arr = [];
// for (let i = 0; i < N; i++){
//     arr[i] = [];
//     for (let j = 0; j < M; j++){
//         let a = input.questionInt(`enter the ${j+1} element : `);
//         arr[i][j] = a;
//     }
// }

// // metrix [2]
// // let O = input.questionInt("enter the size of third array : ");
// // let P = input.questionInt("enter the size of forth array : ");
// let arr1 = [];
// for (let i = 0; i < N; i++){
//     arr1[i] = [];
//     for (let j = 0; j < M; j++){
//         let a = input.questionInt(`enter the ${j+1} element : `);
//         arr1[i][j] = a;
//     }
// }
// //console.log(arr,arr1);
// let arr2 = [];
// for (let i = 0; i < N; i++){
//     arr2[i] = [];
//     for (let j = 0; j < M; j++){
//         arr2[i][j] = arr[i][j] + arr1[i][j];
//     }
// }console.log(arr2);

// let n = input.question("enter a number : ");
// let arr = [];
// for (let i = 0; i < n; i++){
//     arr[i] = [];
//     for (let j = 0; j < n; j++){
//         arr[i][j] = input.questionInt(`enter the ${j+1} element : `);
//         }
//         console.log("\n");
// }
// console.log(arr);

// let a = input.questionInt();
// let b = input.questionInt();

// let n = input.questionInt("enter a number : ");
// for (;;){
//     for (let i = 1; i <= n; i++){
//         let str = "";
//         for (let j = 1; j <= i; j++){
//             if (j == i){
//                 str += "*";
//             }else {
//                 str += " ";
//             }
//         }
//         console.log(str);
//     }
//     for (let i = n; i > 0; i--){
//         let str1 = "";
//         for (let j = 1; j <= i; j++){
//             if (j == i){
//                 str1 += "*";
//             }else {
//                 str1 += " ";
//             }
//         }
//         console.log(str1);
//     }
    
// }


// let n = input.questionInt("enter a number : ");
// let arr = [];
// for (let i = 0; i < n; i++){
//     let x = input.question("enter '1'[for array] or '0'[for element] : ");
//     if (x == 0){
//         arr[i] = input.questionInt(`enter the ${i+1} element : `);
//     }else {
//         let z = input.questionInt("enter the size of inner array : ");
//         arr[i] = [];
//         for (let j = 0; j < z; j++){
//             arr[i][j] = input.questionInt(`enter the ${j+1} element : `);
//         }
//     }
// }
// console.log(arr1);
// // let arr1 = [];
// // for (let i = 0; i < arr.length; i++){
//     //     if (Array.isArray(arr[i])){
//         //         for (let j = 0; j < arr[i].length; j++){
//             //             arr1.push(arr[i][j]);
//             //         }
//             //     }else {
//                 //         arr1.push(arr[i]);
//                 //     }
//                 // }
//                 let arr1 = arr.flat();
//                 // arr1.sort((a,b) => a-b);
// // console.log("final array : ",arr1);



// const arr = [1,2,34,4,5,6,7,8];
// arr.sort(function(){return 0.5 - Math.random()});


// const points = [40, 100, 1, 5, 25, 10];

// for (let i = points.length -1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i+1));
//     let k = points[i];
//     points[i] = points[j];
//     points[j] = k;
// }
// console.log(points);


// for (var i = 1; i <= 3; i++) {
//     for (var j = 0; j < 3; j++) {
//         		console.log(i * j);
//     		}
// }

// var total = 0;
// for (var i = 0; i <= 5; i++) {
//     		      for (var j = 0; j <= i; j++) {
//         			total += j;
//     			}
// }
// console.log(total);




// for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < i; j++) {
//          console.log("*");
//  }
// }



// for (var i = 0; i < 5; i++) {
//     for (var j = 0; j < 5 - i; j++) {
//         process.stdout.write(" ");
//     }
//     for (var k = 0; k <= i; k++) {
//         process.stdout.write("*");
//     }
//     console.log();
// }


// function checkstring(){
//     let x = "string";
// if (x === "string"){
//     return "yes";
// }else {
//     return "no";
// }
// }


// let n = input.questionInt("enter a number : ");

// let arr = [];
// for (let i = 0; i < n; i++) {
//     arr[i] = [];
//     for (let j = 0; j < n; j++) {
//         arr[i][j]= 0;
//     }
// }
// console.log(arr);
// let num = 1;
// let top= 0;
// let bottom= n - 1;
// let left = 0;
// let right= n - 1;

// while (top <= bottom && left <= right){
//     for (let i = left; i <= right; i++){
//         arr[top][i] = num++;
//     }
//     top++;

//     for(let i = top; i <= bottom; i++){
//         arr[i][right] = num++;
//     }
//     right--;

//     for(let i = right; i >= left; i--){
//         arr[bottom][i] = num++;
//     }
//     bottom--;
    
//     for(let i = bottom; i >= top; i--){
//         arr[i][left] = num++;
//     }
//     left++;

// }
// console.log(arr);




// let n = input.questionInt("enter a number : ");
// let arr = [];
// let i = 0;
// while (i < n){
//     arr[i] = input.question(`enter the ${i+1} string : `);
//     i++;
// }

// function longeststring(){
//     if (arr.length === 0){
//         return null;
//     }

//     let max = arr[0];

//     for(let i = 1; i < arr.length; i++){
//         if (arr[i].length > max.length){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log("largest string :",longeststring(arr));






// Create a function that takes an array of objects with 'name' and 'age' properties and returns the oldest person.

// function list(name,age){
//     return {name,age}
// }
// let arr = [];
// while (true){
//     let name = input.question("enter a name or just press enter to stop : ");
//     if(!name){
//         break;
//     }
//     let age = input.questionInt("enter a age : ");
//     arr.push(list(name,age));
// }
// console.log(arr);
// let max = arr[0];

// arr.forEach(someone => {
//     if (someone.age > max.age){
//         max = someone;
//     }
// })
// console.log("oldest person :",max.name);



// check the input is all alpabetic or not;

// let a = input.question("enter anything : ");
// function alphabet(a){
//     let rightorder = /^[a-zA-Z]+$/;
//     if (rightorder.test(a)){
//         return "yes";
//     }else {
//         return "no";
//     }
// }
// console.log(alphabet(a));


// let n = input.question("enter anything : ");
// function digit(n){
//     let rightorder = /^\d+$/;
//     if (rightorder.test(n)){
//         return "yes";
//     }else {
//         return "no";
//     }
// }
// console.log(digit(n));




// let n = input.questionInt("enter a number : ");
// let a = 1;
// let str = "";
// for (let i = 1; i <= n; i++){
//     let b = a+a;
//     for (let j = 1; j <= i; j++){
//         if (j === 1){
//             str += a + " ";
//         }else{
//             str += b + " ";
//             b += a;
//         }
//     }
//     a++;
//     str += "\n"
// }
// a -= 2;
// for (let i = n-1; i >= 0; i--){
//     let b = a + a;
//     for (let j = 1; j <= i; j++){
//         if (j === 1){
//             str += a + " ";
//         }else {
//             str += b + " ";
//             b += a;
//         }
//     }
//     a--;
//     str += "\n";
// }
// console.log(str);




// let n = input.questionInt("enter a number : ");
// let str = "";
// let h = Math.floor(n/2)+1;
// let x = 1;
// let y = n;
// for (let i = 1; i <= h; i++){
    //      for (let  j = 1; j <= n; j++){
        //         if (i === 1 || j === 1 || j === n){
            //             str += "* ";
            //         }else if(j == x || j == y){
                //             str += "* ";
                //         }else {
                    //             str += "  ";
                    //         }
                    //      }
                    //      str += "\n"
                    //      x++;
                    //      y--;
                    // }
                    // x -= 2;
                    // y += 2;
// for (let i = n-h; i > 0; i--){
    //     for(let j = 1; j <= n; j++){
//         if(i === 1 || j === 1 || j === n){
//             str += "* ";
//         }else if (j == x || j == y){
    //             str += "* ";
    //         }else {
        //             str += "  ";
        //         }
        //     }
        //     str += "\n"
        //     x--;
        //     y++;
        // }
        // console.log(str);
        
        



        
// insertion sort

// let n = input.questionInt("enter the size of array : ");
// let arr = [];
// for (let i = 0; i < n; i++){
//     arr[i] = input.questionInt(`enter the ${i+1} element : `);
// }
// console.log(arr);

// for (let i = 1; i < n; i++){
//     let current = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > current){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = arr[i];
// }
// console.log(arr);




// bubble sort;


// let n = input.questionInt("enter the size of array : ");
// let arr = [];
// for (let i = 0; i < n; i++){
//     arr[i] = input.questionInt(`enter the ${i+1} element : `);
// }
// console.log(arr);
// let x = 1;
// for (let i = 0; i < n; i++){
//     for (let j = 0; j < n - i - 1; j++){
//         if (arr[j] > arr[j+1]){
//             let current = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = current;
//             console.log(`step ${x} :`,arr);
//             x++;
//         }
//     }
// }
   

// let n = input.questionInt("enter a number : ");
// let str = "";
// for (let i = 0; i < n; i++){
//     for(let j = 0; j < n - i - 1; j++){
//         str += "  ";
//     }

//     let char = String.fromCharCode(65 + i);
//     for(let k = 0; k < i * 2 + 1; k++){
//         str += char + " ";
//         if(k < i){
//             char = String.fromCharCode(char.charCodeAt(0)-1);
//         }else{
//             char = String.fromCharCode(char.charCodeAt(0)+1);
//         }
//     }
//     str += "\n";
// }
// console.log(str);


// let n = input.questionInt("enter a number : ");
// let str = "";
// for (let i = 0; i < n; i++){
//     for(let j = 0; j < n - i - 1; j++){
//         str += "  ";
//     }

//     let x = 1;
//     for(let k = 0; k < i * 2 + 1; k++){
//         str += x + " ";
//         if(k < i){
//             x++;
//         }else{
//             x--;
//         }
//     }
//     str += "\n";
// }
// console.log(str);



// let n = input.questionInt("enter the number : ");
// let total = 0;
// let i =1;
// while (i <= n){
//     let a = input.questionInt("enter the value : ");
//     total  = total + a;
//     i++;
// }
// console.log(total);


// const userdetail = {
//     first_Name : "phoolsingh",
//     last_name : "baghel",
//     full_name : function(){
//         return this.first_Name + " " + this.last_name;
//     },
//     age : 21,
//     gender : "male",
//     email : {
//         google_Email : "shalini@google.com"
//     },
// }



// const d = new Date();
// d.setDate(d.getDate() + 5);


// console.log(findprimenumber(2));
// console.log(checkstring());


// setInterval(function() {
//     console.log("hello");
// }, 2000);



// var cars = ["Maruti", "Mercedes", "BMW"];
// for (let car of cars) {
//     console.log(cars[car]);
// }

// var cars = ["Maruti", "Mercedes", "BMW"];
// for (let car of cars) {
//     console.log(car);
// }



// let arr = [45,true,"bunny",function(){},{},[],null]

// function countTheType(arr){
//     var count = {};

//     for (let i = 0; i < arr.length; i++){
//         var type = typeof arr[i];

//         if (type === "Object"){
//             if (Array.isArray(type)){
//                 type = "array";
//             }else if (arr[i] === null){
//                 type = "null";
//             }
//         }
//         if (count.hasOwnProperty(type)){
//             count[type]++;
//         }else{
//             count[type] = 1;
//         }
//     }

//     return count;
// }

// var result = countTheType(arr);
// console.log(result);







// let arr = [1,2,3,4,5,6,7,8];

// const arr1 = arr.filter( (item) => item > 5);
// console.log(arr1);






// let a = input.question("enter the sport : ");
// let w = input.question("enter the weather : ")
// let A = a.toLocaleLowerCase();
// let W = w.toLocaleLowerCase();

// function sunnyweather(){
//     if(A === "running"){
//        return "wear light shoes and sunglasses."
//     }else if(A === "cycling"){
//         return "wear light gear."
//     }else if(A === "hiking"){
//         return "wear sturdy boot and a backpack."
//     }else if(A === "swimming"){
//         return "wear a swimsuit."
//     }else {
//         return "enter a valid sport."
//     }
// }

// function rainyweather(){
//     if(A === "running"){
//         return "wear high boots and a raincoat."
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

// function cloudyweather(){
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

// function hotweather(){
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




// function advise(){

//     if (W === "sunny"){
//         console.log(sunnyweather());
//     }else if (W === "rainy"){
//         console.log(rainyweather());
//     }else if (W === "cloudy"){
//         console.log(cloudyweather());
//     }else if(W === "hot"){
//         console.log(hotweather());
//     }else {
//         console.log("enter a valid weather.");
//     }

// }

// advise();




// let N = input.questionInt("Enter the number of students: ");
// let R = input.question("Enter the roll numbers (space-separated): ").split(" ").map(Number);
// let S = input.question("Enter the scores corresponding to the roll numbers (space-separated): ").split(" ").map(Number);

// if (N % 2 !== 0){
//     let max = Math.max(R);
    
// //     let index = R.indexOf(max);
// //     R.splice(index,1);
// }

// let totalScoreOdd = 0;
// let totalScoreEven = 0;
// for (let i = 0; i < N; i++){
//     if (R[i] % 2 == 0){
//         totalScoreEven += S[i];
//     }else {
//         totalScoreOdd += S[i];
//     }
// }
// if(totalScoreEven > totalScoreOdd){
//     console.log("EVEN");
// }else if (totalScoreEven == totalScoreOdd){
//     console.log("TIE");
// }else {
//     console.log("ODD");
// }




// let binarystr = input.question("enter the binary string : ").split("").map(Number);
// let currentCount = 0;
// let maxCount = 0;
// for (let i = 0; i < binarystr.length; i++){
// if (binarystr[i] == 1){
//     currentCount++;
//     maxCount = Math.max(maxCount,currentCount);
// }else {
//     currentCount = 0;
// }
// }
// console.log(maxCount);



let library = [];

function addBook(Title,Author,Price){
    library.push({Title : Title, Author : Author, Price : Price});
    console.log("book has been added to the library.");
    console.log(library);
}

function searchBook(Title){
    let available = library.some( (tl) => tl.Title.toLocaleLowerCase() === Title);
    if (available){
        console.log("book is available.");
    }else{
        console.log("book is not available.");
    }
}

function removeBook(Title) {
    let index = library.findIndex(bk => bk.Title === Title );
    if (index != -1){
        library.splice(index,1);
        console.log("book has been removed from the library.");
        console.log(library);
    }else {
        console.log("no such book found.");
    }
}

function main() {
    console.log("wellcome to our library...");
    console.log("enter '0' to add book.");
    console.log("enter '1' to search book.");
    console.log("enter '2' to remove book.");
    console.log("enter '3' to exit the programm.");
    for(;;){
        let a = input.questionInt("enter the operation : ");
        if (a === 0){
            let Title = input.question("enter the name of the book : ").toLocaleLowerCase();
            let Author = input.question("enter the name of the author : ");
            let Price = input.question("enter the price : ");
            addBook(Title,Author,Price);
        }else if (a === 1){
            let Title = input.question("enter the name of the book : ").toLocaleLowerCase();
            searchBook(Title);
        }else if (a === 2){
            let Title = input.question("enter the name of the book : ").toLocaleLowerCase();
            removeBook(Title);
        }else if (a === 3){
            console.log("exiting the program.");
            break;
        }else{
            console.log("invalid input please try again.");
        }
    }
}

main();




// const book = [{Title : "champak" , author : "mayank" , price : 234}];
// const Title = "champak"
// let available = book.some(bk => bk.Title === Title);
// console.log(available);
// if (available){
//     console.log("true");
// }else{
//     console.log("false");
// }




// const arr = [1,2,3,4,5];

// const totalvalue = arr.reduce(function (to,cv) {
//     console.log(`to : ${to} and cv : ${cv}`);
//     return to + cv;
// }, 0)


// const totalvalue = arr.reduce( (to , cv) => {
//     console.log(`to : ${to} and cv : ${cv}`);
//     return to * cv;
// },1)
// console.log(totalvalue);



// const shopping_cart = [
//     {
//         cloth : "tshirt",
//         price : 400
//     },  {
//         cloth : "jeans",
//         price : 1000
//     },  {
//         cloth : "shirt",
//         price : 800
//     },  {
//         cloth : "jacket",
//         price : 2000
//     },  {
//         cloth : "tshirt",
//         price : 100
//     }
// ]

// const total_price = shopping_cart.reduce( (total , item) => {
//     console.log(`total : ${total} and current price : ${item.price}`);
//     return total + item.price;
// }, 0);
// console.log(total_price);


//  messege = "good evening";
// function greet(){
//      messege = "good morning";
//     {
//        let messege = "good afternoon"
//         console.log("greet : " + messege);
//     }
//     // console.log(messege);
//     let x =function greet2(){
//         console.log("i am greet 2");
//     }
//     return x;
// }

// x = greet();
// x();



// function outerFunction() {
//     let outerVariable = 'I am from the outer function';
    
//     function innerFunction() {
//         console.log(outerVariable); // Access outerVariable from outer function
//     }
    
//     return innerFunction; // Return inner function
// }

// const innerFunc = outerFunction(); // Call outer function
// innerFunc(); // Call inner function







// let voting = [];


// function candidates(name,party,logo){
//     voting.push({candidate : name , party_name : party , logo : logo , votes : 0})
//         console.log("candidate has been registered for election.");
//         console.log(voting);
// }

// function voting_both(votersName,age,voterID,name){
//     let candidate = voting.find(candidate => candidate.candidate.toLowerCase() === name.toLowerCase());
//     if (candidate){
//         candidate.votes++;
//         console.log(`${votersName} voted for ${name}`);
//         console.log(voting);
//     }else {
//         console.log("Candidate not found.");
//     }
// }


// function finding_winner(){
//     let totalVotes = voting.reduce( (total ,candidate) => total + candidate , 0);
//     if (totalVotes === 0){
//         console.log("no votes were cast.");
//     }else {
//         let maxVotes = Math.max(...voting.map( (candidate) => candidate.vote));
//         let winner = voting.filter(candidate => candidate.votes === maxVotes);
        
//         if (winner.length === 1){
//             console.log(`the winner is ${winner[0].candidate} with ${winner[0].votes} votes.`);
//         }else {
//             console.log("There is a tie between the following candidates:");
//             winner.forEach(candidate => {
//                 console.log(`${candidate.candidate} with ${candidate.votes} votes.`);
//             })
//         }
//     }
// }



// function main(){
//     let N = input.questionInt("enter the number of candidates : ");
//     for (let i = 1; i <= N; i++){
//         let name = input.question(`enter the name of the ${i} candidate : `).toLocaleLowerCase();
//         let party = input.question(`enter the party name : `).toLocaleLowerCase();
//         let logo = input.question(`enter the name of the logo : `).toLocaleLowerCase();
//         candidates(name,party,logo);
//     }
//     console.log("lets start voting....");
//     for (;;){
//         console.log("enter '0' to vote.");
//         console.log("enter '1' to stop voting.");
//         let A = input.questionInt("enter the operation.")

//         if(A === 0){
//         let votersName = input.question(`enter the name of the voter : `).toLocaleLowerCase();
//         let age = input.questionInt("enter the age of the voter : ");
//         let voterID = input.questionInt("enter the voter's ID : ");
//         let name = input.question(`enter the name of the candidate to vote : `).toLocaleLowerCase();
//         voting_both(votersName,age,voterID,name);
//     }else if (A === 1){
//         console.log("election is ending....");
//         finding_winner();
//         break;
//     }else{
//         console.log("enter a valid operation");
//     }
//     }
    

// }

// main();
// console.log(voting);





