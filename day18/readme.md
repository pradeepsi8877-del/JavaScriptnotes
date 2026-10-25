event delegation in JavaScript:-

Answer: Event delegation is a technique in which we attach one event listener to a parent element instead of attaching separate listeners to multiple child elements.


JSON:-JSON stands for JavaScript Object Notation. It is a lightweight format used to store and exchange data between a client and a server.

JSON.stringify :-JSON.stringify() converts a JavaScript value into a JSON string.

JSON.parse:- JSON.parse() converts a valid JSON string into a JavaScript value.

Example of json
{
  "name": "Rahul",
  "age": 21,
  "course": "MERN Stack"
}

LocalStorage and SessionStorage :- 
store the data in the browser side.
Broswer -> Inspect -> Application -> Local , Session
LocalStorage 
1. it will store the data till we delete the mannual.
2. it will take the data upto 10mb.

sessionStorage 
1. it will delete the data when change the tab or close the browser.
2. it will take the data upto 5mb.

setItem methods for the saving  :- 2 paramter which is key value 
getItem methos for the getting  :- 1 paramter  which is key and return the value

document.getElementById
Event :- onclick.

: Explain the difference between localStorage, sessionStorage

// localStorage  methods.
localStorage.setItem('key', 'value');
const v = localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear();

// sessionStorage methods.
sessionStorage.setItem('key', 'value');
const s = sessionStorage.getItem('key');
sessionStorage.removeItem('key');
sessionStorage.clear();


event loop in JavaScript:-
Answer: The event loop helps JavaScript handle asynchronous callbacks. It checks whether the call stack is available and schedules eligible callbacks to run when the stack is clear.

The call stack tracks the functions currently executing. Queues hold callbacks waiting to run; promise reactions use the microtask queue, while timer callbacks are generally processed as tasks.

console.log()

 microTask :-high priority
promise.then()
promise.catch()
promise.finally()
queueMicrotask()
async/await

MacroTask :-
setTimeout
setInterval 

Async and Await 

we can write the asynchronous code , but it will behave like Synchronous.

Real time example :- 
Complex Asynchornous Operations [if you want to call the api one after one ]

Async :- Async make a function asynchorous . meaning it always returns a promise.

Async function Demo(){
    await statement.
}

await :- await is used inside the function to pause the code until a promise is resolved.

async function Demo1(a,b){
    await a+b;// 30
}
Demo1(10,20)


write the defination of all the question .....

what is event bubbling capturing and delegation
json.stringfy and json.parse and preventDefault
diff b/w synchronous and asynchronous
diff b/w local storage session storage methods also
what is event loop types also
what is promise and promise.all method
