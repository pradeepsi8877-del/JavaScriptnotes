// const person ={
//     name:"ayush",
//     age:22,
//     id:101,
//     demo: function(){
//     return "hy"    
//     }
// }
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.demo());

//suppose i want to 100 object we need of blueprint
//this:- point to the current object
//before es6

// function Person(name, age, address){
//     this.name =name;
//     this.age= age;
//     this.address= address;
// }

// const p1= new Person("jay",23,"indore");
// const p2= new Person("Pradeep",21,"rewa");

// console.log(p1);
// console.log(p1.name);
// console.log(p2.age);


//after ES6
// class:- name of the Program ;
//constructor :- for the initialization when obj is created .
//this :- point to the current object.


// class Person{
//     constructor(name, age, address){
//     this.name =name;
//     this.age= age;
//     this.address= address;
//     }
// }
// const p1= new Person("jay",23,"indore");
// const p2= new Person("Pradeep",21,"rewa");

// console.log(p1);
// console.log(p1.name);
// console.log(p2.age);

//we can manipulate the object 
const pen ={
    color :"red",
    brand :"cello"
}
// console.log(pen);

// //add the key and value 
// pen.price = 10;
// console.log(pen);
// console.log(pen["color"]);

// //update the value 
// pen.color ="green";
// console.log(pen);

// //delete the key
// delete pen.color ;
// console.log(pen);

// if you want to access the keys
// console.log(Object.keys(pen));
// console.log(Object.values(pen));
// console.log(Object.entries(pen)); // it will give the array key value both

// console.log(pen.hasOwnProperty("age")); // it will return boolean value 

// freeze :- it will hold the object , you can not change/delete/add the key value

// Object.freeze(pen);
// pen.id =101;
// console.log(pen);

// Object.seal(pen);
// pen.id =101;
// console.log(pen);

