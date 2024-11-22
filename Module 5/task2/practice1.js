const body = document.body
const div = document.createElement("div");
// div.classList.add("background");
div.style.backgroundImage = 'url("https://wallpapers.com/images/high/abstract-nebula-psychedelic-4k-6diwrmh43ln4x0zz.webp")';
div.style.backgroundSize = "cover";
div.style.backgroundPosition = "center"
div.style.height = "100vh";
div.style.width = "100vw";
body.appendChild(div);


const heading1 = document.createElement("h1");
heading1.classList.add("heading");
heading1.textContent = "CHAT";
heading1.style.color = "#ffffff";
heading1.style.backgroundColor = "#323f4b";
heading1.style.fontSize = "20px"
heading1.style.textAlign = "center";
heading1.style.fontFamily = "roboto";
heading1.style.fontWeight = "bold";
heading1.style.padding = "14px";
div.appendChild(heading1);


const div1 = document.createElement("div");
div1.classList.add("whole");
div1.style.padding = "14px";
div1.style.color = "#ffffff";
div1.style.fontFamily = "roboto";
div1.style.fontSize = "28px";
div.appendChild(div1);

const p1 = document.createElement("p");
p1.classList.add("text-sent");
p1.textContent = "Hello,how are you?";
p1.style.backgroundColor = "#47a3f3";
p1.style.padding = "12px";
p1.style.borderTopLeftRadius = "12px";
p1.style.borderTopRightRadius = "12px";
p1.style.borderBottomLeftRadius = "12px";
p1.style.textAlign = "right";
div1.appendChild(p1);


const p2 = document.createElement("p");
p2.classList.add("text-rec");
p2.textContent = "Hi varakumar, I am good. How are you?";
p2.style.backgroundColor = "#FF4500";
p2.style.padding = "12px";
p2.style.borderTopLeftRadius = "12px";
p2.style.borderTopRightRadius = "12px";
p2.style.borderBottomRightRadius = "12px";
p2.style.textAlign = "left";
div1.appendChild(p2);


const p3 = document.createElement("p");
p3.classList.add("text-sent");
p3.textContent = "I'm fine. I am learning HTML and CSS";
p3.style.backgroundColor = "#47a3f3";
p3.style.padding = "12px";
p3.style.borderTopLeftRadius = "12px";
p3.style.borderTopRightRadius = "12px";
p3.style.borderBottomLeftRadius = "12px";
p3.style.textAlign = "right";
div1.appendChild(p3);


const p4 = document.createElement("p");
p4.classList.add("text-rec");
p4.textContent = "HTML and CSS?";
p4.style.backgroundColor = "#FF4500";
p4.style.padding = "12px";
p4.style.borderTopLeftRadius = "12px";
p4.style.borderTopRightRadius = "12px";
p4.style.borderBottomRightRadius = "12px";
p4.style.textAlign = "left";
div1.appendChild(p4);


const p5 = document.createElement("p");
p5.classList.add("text-sent");
p5.textContent = "Yes , by doing projects parallelly , i am learning it.";
p5.style.backgroundColor = "#47a3f3";
p5.style.padding = "12px";
p5.style.borderTopLeftRadius = "12px";
p5.style.borderTopRightRadius = "12px";
p5.style.borderBottomLeftRadius = "12px";
p5.style.textAlign = "right";
div1.appendChild(p5);


const p6 = document.createElement("p");
p6.classList.add("text-rec");
p6.textContent = "Awesome , can you tall how you are learning it";
p6.style.backgroundColor = "#FF4500";
p6.style.padding = "12px";
p6.style.borderTopLeftRadius = "12px";
p6.style.borderTopRightRadius = "12px";
p6.style.borderBottomRightRadius = "12px";
p6.style.textAlign = "left";
div1.appendChild(p6);


const p7 = document.createElement("p");
p7.classList.add("text-sent");
p7.textContent = "can i call you?";
p7.style.backgroundColor = "#47a3f3";
p7.style.padding = "12px";
p7.style.borderTopLeftRadius = "12px";
p7.style.borderTopRightRadius = "12px";
p7.style.borderBottomLeftRadius = "12px";
p7.style.textAlign = "right";
div1.appendChild(p7);

