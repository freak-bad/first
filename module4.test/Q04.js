const input = require('readline-sync');

let cart = [];
function addtocart(id,name,price,quantity){
    cart.push({ID:id,NAME:name,PRICE:price,QUANTITY:quantity});
}
console.log(cart);


function removefromcart(id){
    let av = cart.findIndex(item => item.ID == id);
    if(av != -1){
        cart.splice(av,1);
        console.log(cart);
    }else{
        console.log("no item with that id.");
    }
}

function main(){
    for(;;){
        console.log("enter 0 to add item.");
        console.log("enter 1 to remove item.");
        let y = input.questionInt("enter the operation : ");
        if(y == 0){
        let id = input.questionInt("enter the ID : ");
        let name = input.question("enter the name of the item : ");
        let price = input.questionInt("enter the price of the item : ");
        let quantity = input.questionInt("enter the quantity of the item : ");
        let findName = cart.find((it) => it.ID == id);
        if(findName){
            findName.QUANTITY = quantity;
            console.log("quantity updated.");
            console.log(cart);
        }else{
            addtocart(id,name,price,quantity);
            console.log("item added sucessfully.");
            console.log(cart);
        }
    }else if(y == 1){
        let id = input.questionInt("enter the ID : ");
        removefromcart(id);
    }else if(y == 2) {
        console.log("exiting the programm...");
        break;
    }else{
        console.log("invalid operation try again");
    }
    }
}

main();