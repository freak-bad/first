const body = document.body
const div = document.createElement("div")
div.classList.add("background")
body.appendChild(div)

const heading = document.createElement("h1");
heading.classList.add("head");
heading.innerHTML = "<strong>TODOLIST</strong>";
heading.style.textAlign = "center";
div.appendChild(heading)


const para = document.createElement("p");
para.textContent = "Each day i will accomplish one thing on my todo list.";
para.classList.add("center")
div.appendChild(para);


const heading1 = document.createElement("h4");
heading1.textContent = "READ BOOK";
heading1.classList.add("read")
div.appendChild(heading1);



const para1 = document.createElement("p");
para1.textContent = "i don't think that the human race will survive the next thousand years, unless we spread into space. there are too many accidents that can befall life on a single. but i'm an optimist..."
para1.classList.add("book");
div.appendChild(para1)


const div1 = document.createElement("div");
div1.classList.add("buttonDiv");
div.appendChild(div1);


const button = document.createElement("button");
button.textContent = "start";
button.classList.add("start");
div1.append(button);



const para2 = document.createElement("p");
para2.textContent = "Don't skip introduction";
para2.style.textDecoration = "underline";
para2.classList.add("end")
div1.appendChild(para2)