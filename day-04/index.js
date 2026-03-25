console.log("Day 04");
let catchingBus = false;
if (catchingBus){ // if is a reserved keyword - here branching occurs
    console.log("I will be home in time");
} else {
    console.log("I will be home late");
}
/* In this code, if the condition catchingBus is true, the line 4 will be executed.
If the condition catchingBus is false, line 6 will be executed. */

// Can you vote or not. You must be 18 or older.
let age = 8;
if (age >= 18) {
    console.log("You are elegible to vote");
} else {
    console.log("You are NOT elegible to vote");
}
// You can ommit curly brackets when you don't have more sequences to execute. The recommendation is always use it.

/*How to decide between multiple conditions. Determine grading from different number of points.
 if score is >= 90, grade A
 if score is >= 80, grade B
 if score is >= 70, grade C
 anything below, Fail*/
 let score =69;
 if (score >= 90) {
    console.log("Grade A");
 } else if (score >=80) {
    console.log("Grade B");
 } else if (score >=70) {
    console.log("Grade C");
 } else {
    console.log("Fail");
 }

 /* With else and else if, there can be need to have independend if-else statements or "nested" like the exercise above. 
 Here is an example of necessary nested. */

 let x = 0;
 if (x === 0) {
    console.log(0);
 }
 if (x >= 0) {
    console.log("Greater than 0");
 }
 if ( x <= 0) {
    console.log("Less than 0");
 }
 /* If we run this code, console will show:
 0
 Greater than 0
 Less than 0
 We just want the code to say 0, so if we modify the conditions as else if, once the first condition x === 0 is met, js will exit the sequence and ignore the following ifs. */

 if (x === 0) {
    console.log(0);
 } else if (x >= 0) {
    console.log("Greater than 0");
 } else if (x <= 0) {
    console.log("Less than 0");
 }
 /* This code will execute line 56, and ignore the following else-if */
// Recommendation use if else blocks when you need to look into two sides of the conditions if not, just if block.

//If & If else combination for more conditions.
const condition = true
const innerCondition = true
if (condition) {
    console.log("Outer If");
    if (innerCondition) {
    console.log("Inner if");
    } else
    console.log("Inner else");
}  else {
    console.log("Outer else");
}

/* WHen you have too many conditions, use switch case which are faster in certain conditions. */
let position = 10;
switch (position) {
    case 1: 
        console.log("Print 1"); 
        break; // si no agrego eso, no interrumpo la secuencia y se sigue ejecutando el código que sigue.
    case 2:
        console.log("Print 2");
        break;
    case 3:
        console.log("Print 3");
        break;
    case 4:
        console.log("Print 4");
        break;
    default:
        console.log("No match"); // si el input no cumple ninguna de las condiciones es necesario desginar un fallback value, si no se cumple nada, queremos decalrar que no se encontró ningún valor esperado
}

// Determinemos qué día es a partir de un número

// Switch is better than if-else when there are too many conditions, also switch admits any value and if else only true/false. Also with switch you can jump directly to the particular row and if else is sequential, so it will go through all the sequence. Switch is also easier to read. For complex logical conditions, if else is the option. For fixed values, switch is better.

// Para tomar en cuenta varias posibles variables que satisfagan la condición y den un mismo resultado:

const city = "Mexico";
switch (city) {
    case "Bangalore":
    case "Kolkata":
    case "Agra":
    case "Jaipur":
        console.log("India");
        break;
    case "New York":
        console.log("USA");
        break;
    default:
        console.log("Unknown country");
}

let day ="Monday";

switch (day) {
	case "monday":
		console.log("It's the start of the week");
		break;
	default:
		console.log("It's a normal day");
		} 