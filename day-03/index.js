/* Odd or Even?
    1. Take a number and find if the number is an odd or even number.
    2. Print the number and result in the console. */
   // 1.
console.log("*** Decide si es Par o Impar ***");
let number ="3";
let result = (number % 2 === 0) ? "Par" : "Impar";
console.log(result);
/* Flujo:
1. Declara la variable número para tener un número con el cual trabajar
2. Declara como obtener el resultado según la siguiente condición y lógica: Del número que definí, dame el remanente de dividirlo entre 2, si no sobra nada === 0 la condición es verdadera y se debe regresar el primer string, si es falso regresa el segundo string. 
Operadores que utilizamos:
    - Operador de residuo/módulo (%): del número que te dí, % dame el remanante de dividirlo entre 2
    - Operador de comparación estricta (===): si el remanente es cero, declara la condición como verdadera
    - Operador terniario (if...then): [(number % 2 === 0) condición] [(?) <- separador de condición] [("Par") resultado si condición es verdadera"] [(:) <- separador de resultado] [("Impar") si la condición es falsa"]
 */

/*Do you have a Driving License?
    Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.
    1.  Manage age as a variable.
    2. Check if the age is elligible for a driving license and print it on the console accordingly. */
    console.log("*** Decide si puede obtener su licencia o no ***");
    let edad ="21";
    let resultado = edad <= 17 ? "Can't get driver's license" : "Approved for driver's license";
    console.log(resultado);
    /* Flujo:
        1. Declara la variable edad con un valor para hacer la comparación.
        2. Declara como obtener la variable resultado =
        3. Crea una comparación utilizando la variable edad con la expresión aritmética menor igual que <=.
        4. Utilizamos el condicional terniario (if...then) para determinar que si resultado es verdadero, muestre el primer string, y si es falso, muestre el segundo.
        5. Le pedimos a la consola que nos muestre el contenido de la variable resultado.
    */

/* Calculate CTC with a Bonus
Let's calculate how much you earn from your office.
    You get 12,300 rupees as your monthly salary.
    You get a 20% bonus on your annual salary.
    How much money do you make per annum as a CTC?
*/
console.log("*** Calcula sueldo anual y mensual con un bono del 20% ***");
const monthlySalary = 12300;
const annualBonus = 0.20;
const year = 12;
let yearlySalary = (monthlySalary * year);
let ctcSalary = yearlySalary + (yearlySalary * annualBonus);
console.log("El sueldo anual (CTC) es " + ctcSalary + " rupias");
let ctcMonthlySalary = (ctcSalary/year);
console.log(`El sueldo mensual (CTC) es ${ctcMonthlySalary} rupias`);
/* Flujo:
1. Declarar las constantes de sueldo mensual, bono anual, meses en el año.
2. Comenzar con los cálculos: Suelo anual, sueldo anual con el bono.
3. Pedirle a console que entregue el resultado. */

/* Vamos a hacer el cálculo otra vez, pero usando operadores de asignación de multiplicación.*/
const sueldoMensual = 12300;
const bonoAnual = 0.20;
const anio = 12;
let sueldoAnual = sueldoMensual * anio;
let sueldoAnualConBono = sueldoAnual + (sueldoAnual *=bonoAnual);
console.log(sueldoAnualConBono);
/* Este código tiene el problema de que al usar (sueldoAnual *=bonoAnual) estoy reasignándole un valor nuevo a sueldoAnual. De modo que si en adelante quiero seguir usando esta variable, va a estar modificada por la operación del final. Para resolver lo anterior, crearemos una nueva constante*/
console.log("*** Calcula sueldo anual y mensual con un bono del 20% v3***");
const sueldoMensual2 = 12300;
const bonoAnual2 = 0.20;

const anio2 = 12;
//1. Calculamos el sueldo base anual
const sueldoAnual2 = sueldoMensual2 * anio2;
//2. Calculamos el total con el bono sin destuir la variable original
const sueldoTotalConBono = sueldoAnual2 * (1 + bonoAnual2); // esto queda como $12,300 * 1.20 = $177,120
console.log(`El sueldo total con bono es: $${sueldoTotalConBono}`);

/*Write a program for a traffic light simulator.
1. Create a color variable.
2. Based on the color variable's value, print in the console if you must STOP or can GO. Red is Stop, Green is Go. */
console.log("*** Stop or Go ***");
let color = "red";
console.log(color === 'red' ? "Stop" : "Go");
/* Para este ejercicio funciona, pero hay que tener en cuenta que solo va a ser estricto con el rojo para detenerse y cualquier otra cosa que pongamos va a decir Go. */

/* 5. Create an Electricity Bill Calculator
1. Create a units variable. Based on this value you will calculate the total electricity bill for a months.
2. If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
3. If there is a 20% discount on the annual payment, how much will you be charged for an annual payment? */
console.log("*** Electricity Bill ***");
const units = 20;
const costUnits = 150;
const daysPerMonth = 30;
const descuento = 0.2;
const mesesDelAnio = 12;
const costoMensual = (units * costUnits) * daysPerMonth;
console.log(`El costo de luz al mes es de $${costoMensual} pesos.`);
const costoPorAnio = costoMensual * mesesDelAnio;
console.log(`El costo de luz por año es $${costoPorAnio} pesos.`)
const anioConDescuento = costoPorAnio - costoPorAnio * descuento; // Para usar la misma fórmula simplificada y estñandar sería: constAnioConDescuento = costoPorAnio * (1 - descuento);
console.log(`Por haber hecho su pago anual, su total es de $${anioConDescuento.toLocaleString()} pesos.`)

/*6. Leap Year Checker: Is 2025 a Leap Year?
 Take year as input.
 Use the arithmetic operator and ternary operator to print if a year is a leap year or not.*/
console.log("*** Determine the year is a leap year***");
 const queAnio = 2025;
 let leapYear = (queAnio % 4 ===0) ? "Sí es bisiesto" : "No es bisiesto";
 console.log(leapYear);

 /*7. Max of Three Numbers
 Take three numbers and assign them to variables p, q, and r.
 Now find the maximum of these three numbers using the comparison operators.
 */
console.log("*** find the highest number ***");
const p = 4, q = 29, r = 13;
let highest = p > q ? (p > r ? p : r) : (q > r ? q : r);
console.log(highest);
/* Compara p contra q. El resultado de esa comparación decide cuál de los dos se comparará después contra r.*/

/*8. Bitwise doubling
1. Create a variable count and assign a value, say, 5.
2.  Now use the Bitwise shift operator to make the number double.
3. Print it on the console.
*/
let numero = 5;
console.log("*** double a number (5) with bitwise ***");
console.log(numero << 1);

