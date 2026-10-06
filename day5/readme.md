loops:- when we want to perform any task repetedaly is known as loop 

in javascript there are are five loops 
1.for loop
2.while loop
3.do while loop
4.for in 
5. for of 



for loop :- when we know the iteration then we use for loop .

syntax:-

for(init ; condi ; incr/decr){
    statement;
}


while loop :- when we know the condition and also this loop is entry control loop.

syntax:- 
init ;
while(condition){
    statement;
    incre/decrement;
}



do while :- it execute once and it is also known as exit control loop:-

syntax :-

init;
do{  
 statement
increment /decrement
}(condition)



for in :- it will return the keys or index of array and object.

let num = [1,2,3,4];
for(let value in num){
    console.log(value);
}

for of:- it will return the value of array string .

let num = [1,2,3,4];
for(let value of num){
    console.log(value);
}


interview que 
diff b/w for in and for of loop 
diff b/w for and while loop 
diff b/w while and do while loop 

<!-- while loop questions  -->
1.Find the sum of all the digits of the number 34567.
2.Find the square of each digit of a number, calculate their sum, and display the result.
Input: 34567
3.Find the largest digit in a given number using a while loop.
Input: 45732
4.Count the number of digits in a number using a while loop.
Input: 34543
5.Calculate the factorial of a number using a while loop.
Input: 10
6.Check whether a given number is a Perfect Number or not using a for loop.
Input: 6
7.Write a program to reverse a number.
Input: 9856
8.Write a program to check whether a number is a Palindrome or not.
Input: 121

9.Write a program to check whether a number is an Armstrong Number or not.
Input: 153
10.Write a program to check whether a number is a Neon Number or not.
Input: 9
11.Write a program to convert a decimal number into binary.
Input: 10
12.Write a program to check whether a number is a Strong Number or not.
Example: 145 → 1! + 4! + 5! = 145
