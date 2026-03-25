console.log("Day 5 - Loops");
/* For Loop
 When we know exactly how many times we need to run a block of code.
Syntax:
for (initialization; condition; update) {
    //Code
}
Initialization: from where to start a loop
Condition: how to run it
Update: how to update the value to move forward the loop */
for (let count=1; count <=5 ; count++) {
    console.log("Iteration/Loop", count);
}

// Addition of even numbers between 1 to 100

let sum = 0; // para poder asignar el resultado del loop.
for (let i = 1; i <=100; i++){
    if (i % 2 == 0){
        // console.log("i=", i); - prints all even numbers up to 100
    sum = sum + i; // también se puede expresar como sum +=i;
    }
}
console.log("Sum is", sum); // 2550

// With strings. We want to write each character in one line

let language = "JavaScript"; // starting position is 0, so "javascript" has 9 positions (0-9) but I loop 10 times beacuse there are 10 characters. 
for (let i = 0; i < language.length; i++) { // length es una propiedad de JS que me da el núm de caracteres que tiene un string. Tengo que poner menos que porque son 10 caracteres, pero es hasta la posición 0 y comienza en 1
    console.log(language.charAt(i)) // charAt - character at x position - es una propiedad de JS que me da el caracter en la posición que esté contando
}


// Nested Loop - Multidimentional data - Performance implications

for (let firstLoop = 1; firstLoop <=3; firstLoop++){
    for(let secondLoop=1; secondLoop<=3; secondLoop++){
        console.log("Row", firstLoop, "Col", secondLoop)
    }
}

// Break and Continue 
// Break - exiting the loop
for (let i=1; 1 <=5; i++) {
    console.log(i)
    if (i ===3) // al llegar a tres, sale del loop, regresa 1, 2 y 3
    break;
}
// Continue - skipping a particular iteration and continue with the next.

for(let i=1; i <=5; i++) {
    if (i===3) continue; // sáltate el tres i sigue contando y mostrando números
    console.log(i)
}

// Multiple counters for 1 loop when using multiple variables in a single loop, or when coming from diferent directions.
for(let i=1, j=10; j<=10 && j>=1; i++, j--) { //declaramos dos variables separadas por una coma. Vamos a contar del 1 al 10 y del 10 al 1.
console.log(i, j);
}

/*Task: crate this shape with loops
*
* *
* * *
* * * *
* * * * *
*/

/* While loop - something that we will use an unknown amount of times. - A while loop runs as long as a given condition is true.
while(condition) {
    code
}
*/
let counter = 1;
while(counter <=5) {
    console.log(counter);
    counter++;
}

/* Do-while
A do-while loop ensure that the code executes at least once before checking the condition.
do {
    // Code - executes at least this time
} while(condition); <- when this condition is fulfilled will continue the loop. If not it will exit.*/

let num =1;
do {
    console.log(num);
    num++;
} while(num <=5)

/* Infinte loop - never stops - can cause problem crashing or memory issues.
Avoid.
They happen when we don't give exit conditions
Examples:
for(;;){
    console.log("I am looping forever!!")
    }
Another example:
while(true); <-- siempre es verdadero el loop no termina
*/