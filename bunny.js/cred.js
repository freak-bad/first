const input = require("readline-sync")
let data = [];

let masterKey = 2023;


function create(name,email,number,pass){
    data.push({NAME : name , EMAIL : email, CONTACT_NUMBER : number , PASSWORD : pass})
    // console.log(data);
}

function read(name){
    const namefound = data.find((da) => da.NAME === name);
    if(namefound){
        let pass = input.questionInt("Enter the password: ");
        if (namefound.PASSWORD === pass){
            console.log(namefound);
        }else{
            console.log("incorrect password.");
        }
    }else {
        console.log("there is no registered user with this name.");
        let x = input.question("want to register [yes or no] : ");
        if(x == "yes"){
        let name = input.question("enter the name : ");
        let email = input.question("enter the email : ");
        let number = input.questionInt("enter the contact number : ");
        let pass = input.questionInt("enter the password : ");
        create(name,email,number,pass);
        }else if(x == "no"){
            console.log("fine then.");
        }else{
            console.log("fine then."); 
        }
    }
}


function readAll(pass1){
    let i = 2;
    for(; i > 0; i--){
        if(pass1 === masterKey){
            console.log(data);
            break;
        }else{
            console.log("wrong password.");
            console.log(`you have only ${i} attempts left.`);
        }
        pass1 = input.questionInt("enter the master key : ");
    }
    if(i === 0){
    console.log("oops sorry");
    console.log("all your attempts are finished.");
    }
}


function editname(name) {
    const namefound = data.find((data) => data.NAME === name);
    if (namefound) {
        let pass = input.questionInt("Enter the password: ");
        if (namefound.PASSWORD === pass) {
            let A = input.question("Enter new name: ");
            namefound.NAME = A;
            console.log("Name updated successfully.");
        } else {
            console.log("Oops, sorry. Wrong password.");
        }
    } else {
        console.log("No user with this name.");
    }
}


function editemail(email){
    const mailfound = data.find((data) => data.EMAIL === email);
    if (mailfound) {
        let pass = input.questionInt("Enter the password: ");
        if (mailfound.PASSWORD === pass) {
            let A = input.question("Enter new email: ");
            mailfound.EMAIL = A;
            console.log("Email updated successfully.");
        } else {
            console.log("Oops, sorry. Wrong password.");
        }
    } else {
        console.log("No user with this email.");
    }
}


function editnumber(number){
    const numberfound = data.find((data) => data.CONTACT_NUMBER === number);
    if(numberfound){
        let pass = input.questionInt("Enter the password: ");
        if(numberfound.PASSWORD === pass){
            let A = input.questionInt("enter new number : ");
            numberfound.CONTACT_NUMBER = A;
            console.log("Contact_number updated successfully.");
        }else{
            console.log("Oops, sorry. Wrong password.");
        }
    }else {
        console.log("No user with this Contact_number.");
    }
}


function editpass(name){
    const namefound = data.find((data) => data.NAME === name);
    if(namefound){
        let pass = input.questionInt("Enter the previous password: ");
        if(namefound.PASSWORD === pass){
            let A = input.questionInt("enter new password : ");
            namefound.PASSWORD = A;
            console.log("Password updated successfully.");
        }else{
            console.log("Oops, sorry. Wrong password.");
        }
    }else {
        console.log("No user with this name.");
    }
}



function deletedata(name) {
    const index = data.findIndex((data) => data.NAME === name);
    if (index !== -1) {
        let pass = input.questionInt("Enter the password: ");
        if (data[index].PASSWORD === pass) {
            data.splice(index, 1);
            console.log("User deleted successfully.");
        } else {
            console.log("Oops, sorry. Wrong password.");
        }
    } else {
        console.log("No user with this name.");
    }
}



function deleteall(pass){
    if(pass === masterKey){ 
    data.length = 0;
    console.log("All users deleted successfully.");
    }else{
        console.log("incorrect password.");
    }
}



function main(){
    console.log("welcome to the programm.");
    for(;;){
        console.log("enter 0 to register.");
        console.log("enter 1 to see data.");
        console.log("enter 2 to reset your data.");
        console.log("enter 3 to delete data.");
        console.log("enter 11 to stop the program.");
    let a = input.questionInt("enter the operation : ");
    if(a === 0){
        let name = input.question("enter the name : ");
        let email = input.question("enter the email : ");
        let number = input.questionInt("enter the number : ");
        let pass = input.questionInt("enter the password : ");
        create(name,email,number,pass);
    }else if (a === 1) {
        console.log("press 0 to see your data.");
        console.log("press 1 to see all data.");
        let d = input.questionInt("enter the operation : ");
        if(d === 0){
            let name = input.question("enter the name : ");
            read(name);
        }else if(d === 1){
            let pass1 = input.questionInt("enter the master key : ")
            readAll(pass1);
        }else{
            console.log("invalid operation.");
        }
    }else if (a === 2){
        console.log("press 1 to edit your name.");
        console.log("press 2 to edit your email.");
        console.log("press 3 to edit your contact number.");
        console.log("press 4 to edit your number.");
        for(;;){
        let B = input.questionInt("whta to you want to edit : ");       
        if(B === 1){
        let name = input.question("enter the name : ");
        editname(name);
        break;
        }else if(B === 2){
            let email = input.question("enter the email : ");
            editemail(email);
            break;
        }else if(B === 3){
            let number = input.questionInt("enter the contact number : ");
            editnumber(number);
            break;
        }else if(B === 4){
            let name = input.question("enter the name : ");
            editpass(name);
            break;
        }else{
            console.log("invalid operation");
        }
    }
    }else if (a === 3){
        console.log("enter 0 to delete your data");
        console.log(("enter 1 to delete all data."));
        let c = input.questionInt("enter the operation : ");
        if(c === 0){
        let name = input.question("enter the name : ");
        deletedata(name);
        }else if (c === 1){
            let pass = input.questionInt("enter the password : ");
            deleteall(pass);
        }else{
            console.log("invalid operation.");
        }
    }else if(a === 11){
        console.log("ending the programm.......");
        break;
    }else{
        console.log("invalid operation.");
    }
}
}


main();







// // shopDailyTransaction


// let cashBook = [];
// let creditBook = [];

// function cashTransection(customer){
//     const totalPrice = customer.reduce((accumulator, item) => accumulator + item.PRICE * item.QUANTITY,0)
//     customer.push({TOTAL_PRICE:totalPrice});
//     cashBook.push(customer);
//     console.log(cashBook);
//     console.log("Transection recorded sucessfully.");
// }



// function creditTransection(customer,creditor_name){
//     const totalPrice = customer.reduce((accumulator, item) => accumulator + item.PRICE * item.QUANTITY,0);
//     customer.push({TOTAL_PRICE:totalPrice});
//     creditBook.push(customer);
//     console.log(creditBook);
//     console.log("Transection recorded sucessfully.");
// }



// // function creditUpadte(creditor_name)



// function main(){
//     for(;;){
//         console.log("Enter '0' to enter transection.");
//         console.log("Enter '1' to update");
//     }
// }






