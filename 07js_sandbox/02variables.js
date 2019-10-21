// Variables - var, let, const

/*
Variable and declarations
    1. var - been around since the beginning of JavaScript
    2. let and const - introduced in ES6, in an update to the JS language that included many awesome features

*/

// var keyword
var name = "Hannah";
console.log(name);
name = "Stevie McNicksOGarrington"
console.log(name);


// initializing a variable
var greeting;
console.log(greeting);
greeting = "hello world, this is a greeting";
console.log(greeting);

/**
 Rules and Conventions of JavaScript
  - variables can include letters, numbers, underscores, or even $
  - cannot start with a number
  - multiword variables = naming conventions
    - camelCasing = conventional way
    - under_score
    - PascalCasing - is only recommended when we create a constructor function in OOP(object oriented programming)
 */

 //**  let keyword - works very similar to var, identical in global scope */
let dudeName = 'dude';
console.log(dudeName);
dudeName = "not so cool dude";
console.log(dudeName);

// initializing variable with let
let dudetteName;
console.log(dudetteName);
dudetteName = "Hannah";
console.log(dudetteName);




/** Const - stands for constant, cant be changed or re-assigned */

//working with object literal variables
const person = {
    name: "Hannah",
    age: "27"
}

console.log(person);
person.name = "Sara";
person.age = "39";
console.log(person);

/** working with object array variables
 */
const numbers = [1,2,3,4,5];
console.log(numbers);
// we can accomplish adding more numbers, but using an array method
numbers.push(6);
console.log(numbers);


// use const unless you plan on chaning the value! unless you need to initiliaze it, or unless were using it in an iterator or loop, if you plan on changing the value, always use let. 



