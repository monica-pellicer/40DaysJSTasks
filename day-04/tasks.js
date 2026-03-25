console.log("*** Tasks Day 4 ***");

console.log("*** Withdrawal in multiples of 1000 ***")
let withdrawal = 550;
let valid 
if (withdrawal % 100 === 0) {
    console.log("Withdrawal succes");
 }
    else console.log("Invalid amount");

console.log("*** Calculator with swtich-case ***")
const operator = "+";
const operandoUno = 3;
const operandoDos = 8;

switch (operator) {
    case "+":
        console.log(operandoUno + operandoDos);
        break;
    case "-":
        console.log(operandoUno - operandoDos);
        break;
    case "*":
        console.log(operandoUno * operandoDos);
        break;
    case "/":
        console.log(operandoUno / operandoDos);
        break;
    case "%":
        console.log(operandoUno % operandoDos);
        break;
    default:
        console.log("Invalid operation");
}

console.log("*** Calculate price based on age ***");
const priceChildren = 3
const priceAdults = 10
const priceSeniors = 8
let age = 12;
if (age <= 18) {
    console.log(`Your ticket price is $${priceChildren}`);
} else if (age > 18 && age <=60) {
    console.log(`Your ticket price is $${priceAdults}`);
} else if (age > 60) {
    console.log(`Your ticket price is $${priceSeniors}`);
} else {
    console.log("Invalid input");
}

console.log("*** Horoscope Sign Checker ***")
let month ="Abril";
switch (month) {
    case "Enero": 
    console.log("Acuario o Capricornio");
    break;
    case "Febrero": 
    console.log("Piscis o Acuario");
    break;
    case "Marzo": 
    console.log("Aries o Piscis");
    break;
    case "Abril": 
    console.log("Tauro o Aries");
    break;
    case "Mayo": 
    console.log("Gemenis o Tauro");
    break;
    case "Junio": 
    console.log("Cancer o Gemenis");
    break;
    case "Julio": 
    console.log("Leo o Cancer");
    break;
    case "Agosto": 
    console.log("Virgo o Leo");
    break;
    case "Septiembre": 
    console.log("Libra o Virgo");
    break;
    case "Octubre": 
    console.log("Escorpio o Libra");
    break;
    case "Noviembre": 
    console.log("Sagitario o Escorpio");
    break;
    case "Diciembre": 
    console.log("Capricornio o Sagitario");
    break;
    default:
        console.log("Invalid input");
}

console.log("*** Types of triangles ***")
let a = 3;
let b = 6;
let c = 8;

if (a == b && b == c) {
    console.log("Triángulo equilátero");
} else if (a == b || b == c || c == a) {
    console.log ("Triángulo isósceles");
} else {
    console.log ("Triángulo escaleno");
}

