// let day = "monday";

// switch(day){
//     case  "monday" :
//     console.log("today is monday")
//     break;

//     case "tuesday":
//         console.log("tommorrow is tuesday")
//         break;

//         default :
//         console.log("i can't say")
// }

// // browser input output 
// let monthDay = prompt("enter your month:-");
// // let monthDay = parseInt(prompt("enter your month:-"));

// switch(monthDay){
//     case "january":
//         case "march":
//             document.writeln("january and March are 31 days");
//             break;

//             case "february":
//                 document.writeln("feb is 28 days ")
//                 break;

//                 default :
//                 document.writeln("wrong data ");

// }


// let a =10;
// let b = ++a + a++ ;
// console.log(a,b)

// let c = 22;
// let d = ++c - c++ + ++c + c++ - --c;
// console.log(c,d)


let a =5;
// if( ++a && (a++ + ++a)){
//     console.log(a)
// }

if((a++ || (a++ + ++a)) || ++a){
    console.log(a)
}
