const { loggamma } = require('maths');
const input = require('readline-sync');

let a = input.question("enter the direction key : ").toLowerCase();
if(a == "w"){
    console.log("you move west...");
}else if(a == "n"){
    console.log("you move north...");
}else if(a == "e"){
    console.log("you move east...");
}else if(a == "s"){
    console.log("you move south...");
}else{
    console.log("Invalid direction. try again.");
}