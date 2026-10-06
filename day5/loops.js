// for loop 
// for(let i=0; i<=10; i++){
//     console.log(i);
// }
// while loop 
// let i=0;
// while(i<=5){
//     console.log(i)
//     i++;
// }

// do while loop by students 

// for in loop 
// let num = [1,2,3,4];
// for(let value in num){
//     console.log(value);
// }

let student ={
    name : "ram",
    age: 20,
    section: "d"
}

// for(let value in student){
//     console.log(value);
// }



// for of loop 
// let num = [1,2,3,4];
// for(let value of num){
//     console.log(value);
// }

// Find the sum of all the digits of the number 34567.

let num =34567;
let sum=0;
while(num>0){
    let digit= num%10;
    sum = sum + digit;
    num = Math.floor(num/10);
}
console.log(sum);