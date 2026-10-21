function task1(callback){
    setTimeout(()=>{
        console.log("Task 1");
        callback();
    },2000)
}

function task2(callback){
    setTimeout(()=>{
        console.log("Task 2");
        callback();
    },3000)
}

function task3(callback){
    setTimeout(()=>{
        console.log("Task 3");
        callback();
    },1500)
}

function task4(callback){
    setTimeout(()=>{
        console.log("Task 4");
        callback();
    },4000)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=> console.log("All task Completed"))
        })
    })
})

//setTimeout
setTimeout(()=>{
    console.log("hy")
},2000)

//setInterval
let count=0;
let interval = setInterval(()=>{
count++;
console.log(`interval time : ${count}`)
},2000)

//setInterval stop condition 
let countt=0;
let intervall = setInterval(()=>{
countt++;
console.log(`interval time : ${countt}`)
if(count ===5){
    clearInterval(intervall);
    console.log("stopped")
}
},2000)