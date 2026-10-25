    async function getPosts(){
        console.log("fetching data..");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json();
        console.log(posts)
    }

    // async function getUsers(){
    //     console.log("fetching users...");
    //     const response = await fetch("https://jsonplaceholder.typicode.com/users")
    //     const users = await response.json();
    //     console.log(users);
    // }


    // by using promise we fetch the data 
    function getUsers(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json()).then(users =>{
            console.log(users);
        }).catch(err =>{
            console.log("error fetching user",err);
        })
    }

    async function runAll(){
        await getPosts();
        await getUsers();
    }
    
    runAll();