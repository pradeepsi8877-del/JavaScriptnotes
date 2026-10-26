// // const student ={
// //     name:"pradeep",
// //     marks:{
// //         math:90,
// //         science:85
// //     } };

// // const deepCopy = JSON.parse(JSON.stringify(student));

// // //change nested object in copy
// // deepCopy.marks.math =100;
// // //output
// // console.log(student.marks.math)
// // console.log(deepCopy.marks.math)

// // //shallow copy using spread operator 
// // // const shallowCopy ={...student};
// const copy2 = Object.assign({}, student ); // 2nd method of shallow copy
// // // //change nested object in copy 
// // // shallowCopy.marks.math =100;
// // // //output 
// // // console.log(student.marks.math)
// // // console.log(shallowCopy.marks.math)

// // // let obj1 = {
// // //     name: "Pradeep"
// // // };

// // // let obj2 = { ...obj1 };

// // // console.log(obj1 === obj2);


// // let obj1 = {
// //     address: {
// //         city: "Bareilly"
// //     }
// // };

// // // deepcopy 
// // let obj2 = structuredClone(obj1);

// // console.log(obj1 === obj2); 

// // console.log(obj1.address === obj2.address);

// //error handling 
// // try{
// //     console.log("try block executed");
// //     throw new error("something went wrong ");

// // }catch(error){
// //     console.log(error.message);
// // }finally{
// //     console.log("finally block executed")
// // }

// //pure function and impure function 
// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20))
// console.log(add(5,6))

// //impure 
// let count =0;
// function increment(){
//     count++;
//     return count;
// }
// console.log(increment())
// console.log(increment())
// console.log(increment())



// //function carrying
function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}
console.log(add(10)(20)(30))