let myPromise = new Promise((resolve,reject)=>{
    let day ="morning";
    if(day === "morning"){
        resolve("it is morning")
    }else{
        console.log("it is not morning")
    }
})

myPromise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})

//user datafetch by promise 
function fetUserData(userId){
    return new Promise((res,rej)=>{
        console.log("fetching user data from the server");

        setTimeout(()=>{
            const users = {
                1: {name:"ayush", age:22, city:"indore"},
                 2: {name:"Pradeep", age:24, city:"bhopal"},
                  3: {name:"ravi", age:21, city:"jabalpur"}
            }
            if(users[userId]){
                resuser[userId];
            }else{
                rej("user id is not found on server...")
            }
        },3000)
    })
}
fetchUserData(3).then((user)=>{
    console.log("data recieved");
    console.log("userName",user.name);
    console.log("userName",user.age)
    console.log("userName",user.city)
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("request completed (connection close")
})

//promise dot all method 
const p1 = Promise.resolve("Student data")
const p2 = Promise.resolve("Course data")
const p3 = Promise.resolve("Marks data")

Promise.all([p1,p2,p3]).then((results)=>{
    console.log(results);
}).catch((error)=>{
    console.log("Error",error)
})