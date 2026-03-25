console.log("1. Count up from 0 to 20");
/* for (keyword); () grouping operator; let i = 0 <- variable initiation (i - index or iterator); i<=20 condition if true continue, if false, stop; i++  runs at the end of every iteration, updates de counter varialbe. i++ = i = i +1, adds one to the counter on each round.
Flow:
Start: i is set to 0.
Check: is 0<=20? Yes.
Execute: the code between curly braces {} runs.
Update: i becomes 1.
Check: is 1<=20? Yes.
Execute: the code betwenen curly braces {} runs.
Update: i becomes 2.
... repeats until i = 21.
Check: is 21<=20. No. The loop finishes.
In total it will execute 21 times 0 – 20.
*/
for(let i=0; i <=20; i++){
    console.log(i);
}

console.log();
console.log("2. Count down from 20 to 0");
for(let j=20; j >=0; j--){
    console.log(j);
}

console.log();
console.log("3, Print even numbers");
for(let a = 1; a <= 20; a++){
    if (a % 2 == 0){
        console.log(a);
    }
}

console.log();
console.log("3, Print every third number from 1 to 30");

