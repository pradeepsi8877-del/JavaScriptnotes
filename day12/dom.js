// 1. getElementById()

const username = "";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? "Guest" : username;


// 2. getElementsByClassName()

const fruits = document.getElementsByClassName("fruits");

for (let fruit of fruits) {
    fruit.style.backgroundColor = "yellow";
}


// 3. getElementsByTagName()

const headings = document.getElementsByTagName("h4");

for (let heading of headings) {
    heading.style.color = "red";
}


// 4. querySelector()

const firstFruit = document.querySelector(".fruits");

firstFruit.style.fontSize = "25px";


// 5. querySelectorAll()

const allFruits = document.querySelectorAll(".fruits");

for (let fruit of allFruits) {
    fruit.style.fontWeight = "bold";
}


// 6. textContent

const title = document.getElementById("title");

title.textContent = "JavaScript DOM";


// 7. innerHTML

const message = document.getElementById("message");

message.innerHTML = "<b>Welcome to JavaScript</b>";


// 8. style

const box = document.querySelector(".box");

box.style.backgroundColor = "lightblue";
box.style.color = "black";
box.style.padding = "20px";


// 9. classList.add()

const heading = document.querySelector("h1");

heading.classList.add("active");


// 10. classList.remove()

heading.classList.remove("active");


// 11. classList.toggle()

heading.classList.toggle("active");


// 12. getAttribute()

const link = document.querySelector("a");

const url = link.getAttribute("href");

console.log(url);


// 13. setAttribute()

link.setAttribute("href", "https://www.google.com");


// 14. removeAttribute()

link.removeAttribute("target");


// 15. createElement()

const newElement = document.createElement("p");

newElement.textContent = "This paragraph is created using JavaScript";


// 16. appendChild()

document.body.appendChild(newElement);


// 17. remove()

const oldElement = document.querySelector(".remove-item");

oldElement.remove();