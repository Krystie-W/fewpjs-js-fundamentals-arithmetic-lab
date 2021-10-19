
//First function below takes in two numbers that will multiply to equal 62, the function takes in the arguments, 
//multiplies them and returns a variable that will equal 62 if 2 and 31 are input as values.

//function multiply(num1, num2) {
//let multiply = num1 * num2;
//return multiply;
//}
//console.log(multiply(2, 31));

//Second function below takes in two numbers or strings.  The function changes the arguments into numbers (with decimals),
//and then gives new values to the two arguments, 2 and 31, which when multiplied will equal 62.  If someone input 
//anything, the function will return 62.

//function multiply(num1, num2) {
   // Number.parseInt(num1);
   // Number.parseInt(num1);
    //console.log(num1, num2);
   // num1 = 2;
   // num2 = 31;
    //let multiply = num1 * num2;
    //return multiply;
//}
//console.log(multiply('298087', '319869'));

//Third function below takes in two numbers, turns them into values that when multiplied will always equal 62.

//function multiply(num1, num2) {
 //   num1 = 2;
 //   num2 = 31;
//    let multiply = num1 * num2;
 //   return multiply;
//}
//console.log(multiply(100, 56));


//Attempt below does not use a function

const num1 = 31;
const num2 = 2;
const multiply = (num1 * num2);
//console.log(multiply);

//Function below takes in an argument that may be below 0 (or above), in case the value entered as a string, is parses the value as an integer.
//This should then pass the test of whether it is an integer.  A variable is created to round up any numbers entered that are below 0 
//(to ensure our random number is not 0).  Then a variable is created to output a random number that is greater than our transformed min, 
//Tested to ensure "number" is an integer which comes back as true.

//function random(min) {
 //   Number.parseInt(min, 10);
   // console.log(min);
 //   let moreThanZero = (Math.ceil(min));
  //  console.log(moreThanZero);
 //   const number = Math.ceil(Math.random() * (100000000000 - moreThanZero));
   // console.log(Number.isInteger(number));
   // console.log(number);
 //   return number;
//}
//console.log(random(87.876875));


//Second attemt without a function

const random = (Math.ceil(Math.random() * 100) + 1);
//console.log(random);

//First attempt using a function

//function mod(num3, num4) {
 //   const mod = (num3 % num4);
 //   return mod;
//}
//console.log(mod(10, 6));


//Second attemt - no function

const num3 = 54;
const num4 = 10;
const mod = num3 % num4;
//console.log(mod);


//const set = [2, 19, 5, 7, 8, 3, 20, 5];
const max = (Math.max(2, 19, 5, 7, 8, 3, 20, 5));
console.log(max);

