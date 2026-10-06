// let student ={
//     name:"Ravi",  
//     age:"24",
//     section:"d",
//     demo:function(){ 
//         console.log("hello invertise");
//     }
// }
// console.log(student)
// console.log(student.name) // [property]
// console.log(student.demo())  // method 

// // blueprint of object when we need 1000 
// // of data then we easily use by object 
function Person(name,age,salary){
    this.name =name,
    this.age=age,
    this.salary=salary
}
let p1 =new Person("Sohan", 23, 100000);
let p2 =new Person("Mohan", 26, 200000);

console.log(p1)
console.log(p1.name)



//add ,update, delete

let pen ={
    color:"red",
    brand:"cello"
}

// add 
// pen.price= 10;
// console.log(pen) 
// console.log(pen["color"]);

//update
// pen.price =20;
// console.log(pen)

//delete
// delete pen.color;
// console.log(pen)

// access keys values and key value both 

console.log(Object.keys(pen)); // keys
console.log(Object.values(pen)); // value
console.log(Object.entries(pen));  // key value both

//nested object

let student ={
    name:"Ravi",  
    age:"24",
    section:["a","b","c","d"],
    address: {
        state:"MP",
        city:"Bhopal"
    }
}

 console.log(student.address.state) 
console.log(student.address.city)  