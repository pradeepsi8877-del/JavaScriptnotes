function :- function is a block of code or peice of code which is perform the specific tasks. instead of writting  the same code multiple times we write it once and use through it .

it is reusable .

there are many types of functions 
1.function decleration.
2. function expression.
3.arrow function (Es6) 
4.IIFE (immidiate invoke function expression)
5. HOF (higher order function)
6. callback function
7.nested function

1.function decleration:- it write with its function name .

 2.function expression:- it hold the function into the variable.

  3.arrow function (Es6) :- it concise or reduce the code it is also a ES6 function.

  4.iife :- it is not reusable when the developer use only one time then this fuction use  .
  
  5.Higher order function :- higher order function is a function which take another function as parameter .

  6. callback :- callback function is a function which sends as an argument to another function .

7. nested function :- a function have another function is known as nested function .



hoisting :- when we call variable or function at the top above the decleration  is known as hoisting.

hoisting is possible on 
var :- it gives undefined
and function decleration 

otherwise it give TDZ(Temperoral dead zone) in the 
let and const and 
function expression

TDZ :- it is a time b/w initialisation and creation is known as TDZ.

interview que :-

define function and its types 
explain hoisting in javascript with examples.
what is TDZ(temporal dead zone) and in what condition it will give TDZ.
what is Higher order function and Callback with example
what is arrow function and IIfE function  with example
difference b/w call apply and bind method with example .
what is destructuring in javascript


<!-- call, apply, bind  -->
all three methods are used to control the value of this inside a function .

1.call :- immidiately calls the function and passes arguments one by one .

syntax:- call(object, arg1, arg2 ,......)

2.Apply :- Apply is almost same as call(), but arguments are passed as an array.
->immidiatly calls the function.
syntax:- apply(object, [arg1,arg2,....])

3. bind :-bind() does not immidiately call the function . it return a new function ,which call later .
syntax:- newFunction()

//destructuring:- destructuring is a javascript feature that allow us to extract the values from arrays and properties from object and store them in separate variable.

