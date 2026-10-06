DOM:-
DOM stands for Document Object Model.

DOM is a programming interface that represents an HTML document as a tree of objects and allows JavaScript to dynamically access and manipulate the content, structure, and style of a web page.

It allows JavaScript to:

Select HTML elements
Change HTML content
Change CSS style
Add or remove classes
Change HTML attributes
Create new HTML elements
Remove existing elements
Handle user interactions

Important DOM Methods Cheat Sheet

getElementById()
getElementsByClassName()
getElementsByTagName()
querySelector()
querySelectorAll()
textContent
innerHTML
style
classList.add()
classList.remove()
classList.toggle()
getAttribute()
setAttribute()
removeAttribute()
createElement()
appendChild()

 Interview Questions

1. What is DOM?

Answer:

DOM stands for Document Object Model. It represents an HTML document as a tree of objects and allows JavaScript to dynamically manipulate HTML elements, content, attributes, and styles.

2. What is the difference between DOM and HTML?

Answer:

HTML is the markup used to create the webpage, while the DOM is the browser's object representation of that HTML document.

3. Difference between getElementById() and querySelector()

getElementById()
→ Selects using ID only.

querySelector()
→ Can use any CSS selector.

Example:

document.getElementById("title");

document.querySelector("#title");

4. Difference between querySelector() and querySelectorAll()

querySelector()
→ Returns the first matching element.

querySelectorAll()
→ Returns all matching elements.

Example:

document.querySelector(".fruit");

Selects first fruit.

document.querySelectorAll(".fruit");

Selects all fruits.

5. What is HTMLCollection?

HTMLCollection is a collection of HTML elements returned by methods such as getElementsByClassName() and getElementsByTagName().

6. What is NodeList?

NodeList is a collection of nodes returned by methods such as querySelectorAll().

7. Difference between textContent and innerHTML?

textContent
→ Treats content as text.

innerHTML
→ Treats content as HTML.

Example:

element.textContent = "<b>Hello</b>";

Displays:

<b>Hello</b>

While:

element.innerHTML = "<b>Hello</b>";

Displays:

Hello

8. How do you create an element using JavaScript?

const p = document.createElement("p");

p.textContent = "Hello";

document.body.appendChild(p);

9. How do you remove an element?

element.remove();

10. How do you change CSS using JavaScript?

element.style.color = "red";
element.style.backgroundColor = "yellow";

11. What is classList?

classList provides methods for working with CSS classes.

element.classList.add("active");

element.classList.remove("active");

element.classList.toggle("active");