// // // // 1. array literal 
// // // let arr = [1,2,"Pradeep" , 4, "invertise"];
// // // console.log(arr)

// // // // for accessing the elements in array
// // // for(let i=0; i<arr.length; i++){
// // //     console.log(arr[i]);
// // // }

// // // // 2. with the use of new keyword .
// // // let arr1 = new Array(10, 20, "Invertise");
// // // console.log(arr1);

// // // let arr2 = Array.of(10, 20 ,40)
// // // console.log(arr2)

// // let arr = [1,2,3];
// // arr.push(10,20);
// // console.log(arr)

// // let arr2 = [10,20,30];
// // arr2.pop();
// // console.log(arr2)

// // let arr3 = [10,20,30];
// // let result = arr3.shift();
// // console.log(result); //[10]
// // console.log(arr3) // [20,30]

// // let arr4 = [10,20,30];
// // arr4.unshift(100,200);
// // console.log(arr4) 

// // let arr5= ["hello", "hi","invertise"];
// // console.log(arr5.includes("hello"));

// // let arr6 = [10,20,30,40,60, 50];
// // // console.log(arr6.slice(2))
// // console.log(arr6.slice(2,4))

// // let arr7 = [10,20,30,40];
// // arr7.splice(1,2,400,500,600)
// // console.log(arr7)

// // let arr8 =[1,2,3,4,1,5];
// // console.log(arr8.indexOf(1,2));

//  let arr9= [1,2,3,4,5];
//  arr9.forEach((value, index, array)=> {
//     console.log(value);
//     console.log(index);
//      console.log(array)
//  })

// let arr10 = [1,2,3,4,5];
// let result = arr10.map((num)=>{
//     return num*num;
// })
// console.log(result);

// let arr11 = [1,2,3,4,5];
// let res = arr10.filter((num)=>{
//     return (num>2);
// })
// console.log(res);

// let arr12 = [1,2,3,4,5];
// let res1 = arr10.reduce((num,mul) =>
//     num*mul,1)
// console.log(res1);

// let arr13 = [1,2,3,4,5];
// let results = arr10.some((num)=>{
//     return num%2 === 0;
// })
// console.log(results);

// let arr14 = [1,2,3,4,5];
// let ress = arr10.every((num)=>{
//     return num%2 === 0;
// })
// console.log(ress);

// // manually add without the use of method 
// let arr15 = [1,2,3];
// arr15[arr15.length] = 40;
// console.log(arr15);

// find :- if the condition is true then it will give only one result otherwise it will 
// give undefined if condition is not met .
let arr11 = [1,2,3,4,5];
let res = arr11.find((num)=>{
    return (num>2);
})
console.log(res);
// spread operator :- spread operator is used to merge and copy 
// array and string 
let arr14 = [1,2,3,4];
let arr15 = [6,7,8,9];
let ress = [...arr14,...arr15];
console.log(ress)

// rest operator :- rest operator is used to collect multiple 
// values in a single array .
//when user dosen't know how many arguments it will take then 
// at that time we use rest operator .

function showDetails(name, ...hobbies){
    console.log(name);
    console.log(hobbies)
}
showDetails("pradeep", "cricket","football", "hockey", "singing");



// closure :- inner function rememember the variable vlaue 
// of the the outer function is known as closure .

function outer(){
    let message ="hello";

    function inner(){
        console.log(message)
    }
    inner()
}
outer()