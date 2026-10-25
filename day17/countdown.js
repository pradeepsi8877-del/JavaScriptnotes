const endDate = "24 October 2026 1:54:00 PM";

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll(".col input[readonly]");

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff =(end-now)/1000;


    if(diff<0){
        //timer finished 
        inputs[0].value=0;
        inputs[1].value=0;
        inputs[2].value=0;
        inputs[3].value=0;
        return;
    }

    //days 
    const days =Math.floor(diff/ 3600/24);
    //hours
    const hours = Math.floor(diff/3600)%24;

    //minutes 
    const minutes= Math.floor(diff/60)%60;

    //second
    const seconds = Math.floor(diff)%60

    inputs[0].value=days;
        inputs[1].value=hours;
        inputs[2].value=minutes;
        inputs[3].value=seconds;
    }
clock()
setInterval(clock, 1000);


// Task 2 :- Password Generator 
// otp generator 