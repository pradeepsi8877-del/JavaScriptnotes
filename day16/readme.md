Callback Hell:- Situation to javascript where callbacks are nested within other callbacks to the degree 
where the code is difficult to read old pattern to handle async functions 

Avoid:- use promise + async /await to avoid callback hell 

settime out :- it will work after the specified time.
real time example :-
1.animation delay [time delay]
2.pop up show [time functionality]

syntax:-
setTimeOut(()=>{

},time)


setInterval :- every fixed time interval [repeated task]
real time example :-
1.stock price 
2.cryptocurrency market 

syntax:-
setInterval (()=>{

},time)


Promise:- 
Promise is a js object . a prmise is a way to handle the asynchronous programming/operation.

2. it represent the task either completed/fullfill/resolve or reject/failed in the future.
3. promise help to write cleaner the readable 


phases/stages :-
1.pending
2.resolve
3.reject

we have two methods in promise :-
.then() -> when our task will be resolved .
.catch()-> when iour task will be reject

syntax :-
new Promise ((resolve, reject)=>{

})

real time example:-
Instagram :- 10, 11
1. like , pending , request sent to the instagram server .
2. 10 - 11 successfully increment my like 
3. applicartion crash , disconnect 10 - 10


Event Bubbling And Event Capturing :-
Event Bubbling and Event Capturing are two ways events travel through HTML elements when we click or interact with them.

Event Bubbling:- Event Bubbling Means the events starts from the child element and moves upward to its parent Elemnt .

Event Capturing:-Event Capturing means the event travels from the parent element  to the child which means parent to child.