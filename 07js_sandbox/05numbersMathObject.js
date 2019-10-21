const num1 = 100;
const num2 = 50;

let value;

// Simple math with numbers
value = num1 + num2;
value = num1 * num2;
value = num1 - num2;
value = num1 / num2;
value = num1 % num2;


// Math Object
    // Math, here, is an object meaning it has properties and methods
value = Math.PI;
value = Math.E;
    // Euler's number

value = Math.round(2.4);
value = Math.round(2.8);
value = Math.ceil(2.4);
//rounds up
value = Math.floor(2.9);
//rounds down
value = Math.sqrt(64);
value = Math.abs(-3);

value = Math.pow(8,2);
value = Math.min(2,33,4,1,55,6,3,-2);
value = Math.max(2,33,4,1,55,6,3,-2);

value = Math.random();
    // generates a random number between 0 and 1
value = Math.random() * 20;
    // generates a random number between 0 and 19
value = Math.random() * 21;
    // generates a random number between 0 and 20
value = Math.floor(Math.random() * 20 + 1);
value = (Math.random() * 20 + 1).toFixed(2);
    // generates random number between 0 and 20, in 2 decimal places.


// Output
console.log(value);

//methods usually have a parenthesis, as a side note
