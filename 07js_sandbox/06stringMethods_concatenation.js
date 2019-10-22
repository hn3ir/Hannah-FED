const firstName = "Bugs";
const lastName = "Bunny";
const age = 70;
const str = "Yeeeep Whatsup Doc"
const tags = "Carrots,Cayotes,Elmer-Fudd";

let val;

val = firstName + lastName;

// Concatenating
val = firstName + " " + lastName;
val = "Hello, my name is " +firstName+ " and I am " +age;

// Append - adding onto a variable without replacing it
val = "Daffy ";
val += "Duck";


// Escaping Characters
val = "The boy cried, \"Wolf!\"";

// Length property
val = firstName.length;
// properties dont have parenthesis, side note

//concat() method
val = firstName.concat(" ", lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();


// How to treat strings like read-only arrays
    // to find specific characters or values using the index
    // not very useful, but still something to consider
val = lastName[2];

// indexOf() - to find the index of a value or characters, we use this method
val = lastName.indexOf("n");
val = lastName.lastIndexOf("n");


// charAt() - opposite of indexOf()
val = lastName.charAt("2");
val = lastName.charAt(lastName.length - 1);

// substring() - pulls a substring out of a string
val = lastName.substring(0, 3);
 // first parameter is starting point (index-wise), 2nd parameters counts the number of characters to pull.

// slice() - mostly used with arrays to pull things out of them, but we can also use it with strings
val = lastName.slice(0,3);
val = lastName.slice(-2);
    // when we use negative value as parameter, we are starting from the back and slicing off characters

// split() - splits a string into an array based on a separator
val = str.split(" ");
val = tags.split(",");


// replace()
val = str.replace("Doc", "Daffy");

// includes() - gives a true or false value (boolean value) based on if something is present/exists in a string. a way of testing if something is inside a string
val = str.includes("Whatsup");
val = str.includes("hello");

// Output

console.log(val);