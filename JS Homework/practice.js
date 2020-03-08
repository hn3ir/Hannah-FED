/***************************************************************************/

//Given this nested object
var library = [
    {
        title: "Our Revolution",
        author: "Bernie Sanders",
        finishedReading: false
    },
    {
        title: "The Catcher In The Rye",
        author: "J.D. Salinger",
        finishedReading: true
    },
    {
        title: "Animal Farm",
        author: "George Orwell",
        finishedReading: true
    },
    {
        title: "Anthem",
        author: "Ayn Rand",
        finishedReading: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        finishedReading: false
    }
];

/* Display the reading status of all books in the library object.  For example:
    For books you have finished reading, display  
        You have finished reading "Animal Farm" by George Orwell.
    And
        You have not finished reading "Our Revolution" by Bernie Sanders.*/





/* Write a function that checks if the passed string is a palindrome or not.  A Palindrome is a word, phrase, or sequence that reads the same way forward and backwards. For example, the 'madam', 'nun', or 'dad' */

function checkPalindrome(palindrome) {
    // if statement
};

console.log(checkPalindrome("hannah"));






// Combine the elements in the following Array Object to a single string
var words = ["I", "like", "to", "play", "in", "the", "dirt"];
var sentence = words.join(' ');

console.log(sentence);


/* Write a function that reverses any sequence of numbers and consoles the results. For Example: 
    Your function should reverse 1836654 to 4566381 */
//your code goes here

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(32243));

// EXPLANATIOM Assume n = 1000.
// Convert a number to a string :
// Code : -> n = n + "";
// Note : There are different ways to convert number to string :

// String literal -> str = "" + num + "";
// String constructor -> str = String(num);
// toString -> str = num.toString();
// String Literal simple -> str = "" + num;
// The split() method is used to split a String object into an array of strings by separating the string into substrings.
// Code : console.log('1000'.split(""));
// Output : ["1", "0", "0", "0"]

// The reverse() method is used to reverse an array in place. The first array element becomes the last and the last becomes the first.
// Code : console.log(["1", "0", "0", "0"].reverse());
// Output : ["0", "0", "0", "1"]

// The join() method is used to join all elements of an array into a string.
// Code : console.log(["1", "0", "0", "0"].reverse().join(""));
// Output : "0001" /



// Write a program that calculates the average grade of the class in percentage and letter-grade given the following students and scores:  (Assume 100-90% is A, 89-80% is B, and so forth........). Print the results to the console in the following format:

/*
Average Grade: 84.43
Letter Grade : B
*/

// change values to check results
var scores = [
    ['Walter', 100],
    ['Jessie', 67],
    ['Tuco', 64],
    ['Gus', 98],
    ['Saul', 88],
    ['Mike', 92],
    ['Hank', 82]
];


var students = [['Walter', 80], ['Jessie', 77], ['Tuco', 88], ['Saul', 95], ['Mike', 68], ['Saul', 95], ['Hank', 82]];


var Avgmarks = 0;

for (var i = 0; i < scores.length; i++) {
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length);
}

console.log("Average grade: " + (Avgmarks) / students.length);

if (avg < 60) {
    console.log("Grade : F");
}
else if (avg < 70) {
    console.log("Grade : D");
}
else if (avg < 80) {
    console.log("Grade : C");
} else if (avg < 90) {
    console.log("Grade : B");
} else if (avg < 100) {
    console.log("Grade : A");
}

//** */   This program reads three marks, computes their average
//!and determines the corresponding letter grade with
//!the following table: 
