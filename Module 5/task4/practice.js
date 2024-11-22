const body = document.body;
body.style.height = "100%";
body.style.margin = "5%";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

const div1 = document.createElement("div");
div1.style.backgroundImage = 'url("https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad")';
div1.style.display = "flex";
div1.style.justifyContent = "center";
div1.style.alignItems = "center";
div1.style.height = "80vh";
div1.style.width = "50vh";
div1.style.backgroundSize = "cover";
div1.style.backgroundPosition = "center";
body.appendChild(div1);


const div2 = document.createElement("div");
div2.style.backgroundColor = "#f6c56e";
div2.style.height = "30vh";
div2.style.width = "55vh";
div2.style.marginTop = "92%";
div2.style.marginBottom = "-10%";
div2.style.borderTopLeftRadius = "40px";
div2.style.borderTopRightRadius = "40px";
div2.style.display = "flex";
div2.style.flexDirection = "column"
div2.style.justifyContent = "center";
div2.style.alignItems = "flex-start";
div1.appendChild(div2);


const heading = document.createElement("h1");
heading.textContent = "Happy Meals";
heading.style.fontSize = "40px"
heading.style.marginTop = "-20%";
heading.style.marginLeft = "8%";
heading.style.fontFamily = "Bree Serif , serif";
heading.style.fontWeight = 100;
heading.style.fontStyle = "normal";
heading.style.color = "#323f4b";
div2.appendChild(heading);


const p1 = document.createElement("p");
p1.textContent = "Discover the best food over the 1,000 restaurants"
p1.style.marginLeft = "8%";
p1.style.marginTop = "-4%";
p1.style.fontFamily = "Bree serif , serif";
p1.style.fontSize = "25px" ;
p1.style.fontStyle = "normal";
p1.style.color = "#323f4b";
div2.appendChild(p1);



const button = document.createElement("button");
button.textContent = "BOOK NOW";
button.style.backgroundColor = "#ffffff";
button.style.padding = "10px"
button.style.marginLeft = "39px";
button.style.marginBottom = "-100px"
button.style.fontSize = "20px";
button.style.borderTopLeftRadius = "10px";
button.style.borderTopRightRadius = "10px";
button.style.borderBottomLeftRadius = "10px";
button.style.borderBottomRightRadius = "10px";
button.style.borderWidth = "0"
div2.appendChild(button);