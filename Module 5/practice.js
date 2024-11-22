const button = document.createElement("button");
button.textContent = "change heading";
button.onclick = function(){
    console.log("click event triggered");
}
document.getElementById("mycontainer").appendChild(button);