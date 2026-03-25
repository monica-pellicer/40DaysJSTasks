/*Task: crate this shape with loops
*
* *
* * *
* * * *
* * * * *
*/
console.log("Asterix pyramid");
for (let i = 1; i <=5; i++){
     let estrella ="";
     for(let j=1; j<=i; j++) {
         estrella += "* ";
     }
     console.log(estrella)
}

/*function pintaArbol (pisos) {
    for (let i = 1; i <=pisos; i++){
        let estrella ="";
        for(let j=1; j<=i; j++) {
            estrella += "* ";
        }
        console.log(estrella)
    }
}
pintaArbol(10);*/

/*Task: Create a multiplication table with a given number */
console.log();
console.log("Multiplication table");
    let number = 5
    for(let j=0; j<=10; j++) {
    let multiplo = number*j;
    console.log(number + " * " + j + " = " + multiplo);   
}

/* Task: Summ odd numbers from 1 to 500 */
console.log();
console.log("Sum of odd numbers 1 to 500");
let sum = 0;
for (let i = 1; i <=500; i++){
    if(i % 2 !== 0){
        sum += i;
    }
} console.log("The sum of odd numbers from 1 to 500 is", sum);

console.log();
console.log("Skip multiples of 3");
for (let i=1; i<=20; i++){
    if (i % 3 === 0) continue;
    console.log(i);
}

console.log()
console.log("Reverse the digits in a number");
let num = "57829843275";
let rev = "";
let i = num.length -1;
while (i >=0) {
    rev += num.charAt(i);
    i--;
} 
console.log(rev);

console.log()
console.log("Differences between for, while and do-while loops");
console.log("For - when we know how many loops we need or will use. While - when we don't know how many loops we need. Do-while - to ensure the loops runs once");


