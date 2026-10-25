const student = {
    name :"Rahul",
    age:21
}

//object to json string 
const jsonData = JSON.stringify(student);
console.log(jsonData);
console.log(typeof jsonData); //string

//json string to object
const originalData = JSON.parse(jsonData);
console.log(originalData.name); //Rahul
console.log(typeof originalData);  //object



//localstorage and session storage 
const student1 = {
    name :"Rahul",
    age:21
}

localStorage.setItem("student1", jsonData.stringify(student1));
const data = JSON.parse(localStorage.getItem("student1"));
console.log(data.name) // Rahul

// session Storage
sessionStorage.setItem("username", "Rahul");
console.log(sessionStorage.getItem("username"));

//remove on value 
sessionStorage.removeItem("username");