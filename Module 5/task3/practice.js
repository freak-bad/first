const body = document.body;

const div1 = document.createElement("div");
div1.classList.add = "bimage";
div1.style.display = "flex";
div1.style.flex = "column";
div1.style.justifyContent = "center";
div1.style.backgroundImage = 'url("https://i0.wp.com/picjumbo.com/wp-content/uploads/pink-violet-orange-stripe-wallpaper-free-photo.jpg?w=2210&quality=70")';
div1.style.backgroundSize = "cover";
// div1.style.height = "100vh";
div1.style.padding = "30px";
div1.style.borderColor = "#4Bee59";
div1.style.borderWidth = "5px";
div1.style.borderStyle = "solid";
div1.style.height = "100vh";
div1.style.width = "100vw";
body.appendChild(div1);


const h1 = document.createElement("h1");
h1.classList.add = "top";
h1.textContent = "Code is more than some bytes in a file";
h1.style.color = "White";
h1.style.fontFamily = "verdana sansserif";
h1.style.backgroundColor = "#000000";
h1.style.padding = "15px";
h1.style.fontSize = "30px";
div1.appendChild(h1);
