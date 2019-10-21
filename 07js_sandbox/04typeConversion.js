/* Type Conversion - taking a variable and changing the data type */

let val;

    val = 555;
// Number to a string
    val = String(555);
    val = String(4+4);
// Boolean to string
    val = String(true);
// Date to string
    val = String(new Date());
// Array to string
    val = String([1,2,3,4,5]);
// toString() method
    val = (5).toString;
    val = (true).toString();

// property is built in js feature that allows me to basically assess the behavior of some javascript feature, method is a built in function. usually has parenthesis. property is a value, method is a function - it performs actions. 

//Output
console.log(val);
console.log(typeof val);
console.log(val.length);
    // length property only works on strings; gives you the number of characters in a string

// String to number
    val = Number("5");

// Boolean to number
    val = Number(true);
    // true = 1 OR on, false = 0 OR off

// Null to number
    val = Number(null);
    val = Number("hello"); 
    //NaN is an actual value, means not a number
    //happens when a value tries to get parsed as a number but can't
    val = Number()
// Array to number
    val = Number([1,2,3,4,5]);
// Parse method
    val = parseInt('100.75');
    val = parseFloat('100.75');



// Type Coersion = we take one data type and change it to another, but we dont actually do it, JS will do it for us. when it assumes youre trying to do something and it just does it for you
const val1 = String(5);
const val2 = 6;
const sum= (val1 + val2);

// Output    
console.log(typeof val1);

console.log(sum);
console.log(typeof sum);


