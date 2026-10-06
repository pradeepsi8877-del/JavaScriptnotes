// // decleration function 

// function Dec(){
//     console.log("Decleration function")
// }
// Dec()

// function Dec(){
//     return("Decleration function")
// }
// console.log(Dec())

// // parameter and arguments 

// function sum(a,b){  // parameters 
//     console.log(a+b)
// }
// sum(10,20) //arguments

// // function Expression 

// let Exp = function(){
//     console.log("Function Expression")
// }
// Exp()

// // // arrow function 
// let sum = (a,b)=>{
//     console.log(a+b)
// }
// sum(10,20)

// //IIFE

// (function (){
//     console.log("IIFE function")
// })();

// //HOF function
// function HOf(fun){
//     console.log("Hof")
// fun()
// }
// function Call(){
//     console.log("Callback")
// }
// HOf(Call)


// // nested function 

// function parent(){
//     console.log("parent function")

//     let child1 =()=>{
//         console.log("nested")
//     }

//     child1();
// }
// parent()    


// call apply and bind 
// call 
const person ={
    name : "Pradeep"
}

function intro(age,city){
    console.log(`My name is ${this.name}`);

    console.log(`i am ${age} years old`);

    console.log(`i live in ${city}`);
}

intro.call(person,24,"Indore");
// Apply 
const person1 ={
    name : "Pradeep"
}

function introduction(age,city){
    console.log(`My name is ${this.name}`);
    console.log(`i am ${age} years old`);
    console.log(`i live in ${city}`);
}

introduction.apply(person1,[24,"Indore"]);


//bind 
const person2 ={
    name : "Pradeep"
}

function introduce(age,city){
    console.log(`My name is ${this.name}`);
    console.log(`i am ${age} years old`);
    console.log(`i live in ${city}`);
}

const newFunction = introduce.bind(person2, 24, "Indore");
newFunction();


//destructuring 
let state = ["UP","MP","CG"];
let[a,b,c]=state;
console.log(a);
console.log(b);
console.log(c);

let student = {
    name1:"Pradeep",
    age:21,
    city:"Indore"
};
let {name1, age, city} = student;
console.log(name1);
console.log(age);
console.log(city);
