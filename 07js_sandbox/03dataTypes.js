/* Data types in JavaScript 


*/

/*Primitive Data Types vs Reference Data Types
 - Primitive Data Types
    >stored directly in the location the variable can access
    >stored on the stack
    - when you access primitive data, you access it by it's actual value
- Reference Data Types
    >accessed by reference, data not stored in the variable itself.
    >Objects are stored on the heap, not in the variable, which has to do with dynamically allocated memory
    >pointer to a location in memory.

Primitive Data Types
    - String - text (sequence of characters)
    - Numbers - integers, decimals, floats
    - Booleans - true or false
    - Null - intentional empty value
    - Undefined - result of a variable that hasnt been assigned a value yet. keyword yet. all variables are undefined by default.


Reference Data Types/Objects (not primitive, not accessed by actual value but via reference and they are also considered objects)
    - Arrays
    - Object Literals
    - Functions
    - Dates
    - Anything else that we can store in a variable


JS is considered a Dynaically Typed Language
    - data types are associated with the actual values, not the variables themselves (number inside a string is still a string)
    - the same variable can hold multiple types
        > it can hold a string, and then be set to a number with no errors or issues
    - we do not need to specify types
    - 

*/

// Primitive Types
// Strings
const name = "Jack"
console.log(typeof(name));

// Number Types
const age = 33;
console.log(typeof(age));

// Boolean Types
const hasKids = true;
const doesChores = false;
console.log(typeof(hasKids));
console.log(typeof(doesChores));

// Nulls
const car = null;
console.log(typeof(car));
    // null is not an object. its a data type, a primitive one. 

// Undefined
let gotNothingtoSay;
console.log(typeof(gotNothingtoSay));

// Symbol
const sym = Symbol();
console.log(typeof(sym));




// Reference Types
// Arrays
const hobbies = [
    "coding", 
    "soccer", 
    "pitachios"
];
console.log(typeof(hobbies));

// Object Literals
const address = {
    street: "1234 Pitaschio Ave",
    city: "chicago",
    zip: 60074
}
console.log(typeof(address));

// Dates
const today = new Date();
console.log(today);
console.log(typeof(today));