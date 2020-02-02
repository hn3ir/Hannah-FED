/*
FUNCTIONS
    - one of the most important control structures in any programming language
    - what are they: blocks of code that perform a certain task/operation/action
    - functions can be defined and then called at a later time
    - functions can take in parameters, which can later be passed as arguments (by the user) when the function is called
    - 

    2 ways to create functions
        1. function declaration - a general way of creating a function
        2. function expression - a function that is inside a variable.
            - can either be named or anonymous
*/

/* === function declarations === */

function greet1() {
    // anything inside here is part of the function scope
    var a = 1
    console.log(a)
    // at this point, the function is declared. to 'call it' (thats what we do with functions) we write the name of the function and () immediately after. end the statement with a semi-colon
}

// to call a function
greet1();

    // THE 'return' KEYWORD
        // consoling for other than testing is not something we usually do with functions. Most often we'll be 'returning the results in real life.  
    function greet2() {
        return 'Hello';
    }
    console.log(greet2());


    // PARAMETERS AND ARGUMENTS 
        // PARAMETER - like a variable in a method definition (fancy word for function)
        // ARGUMENT - data the user passes into the method's parameter
    function greet3(firstName, lastName, age) {
        return `Hi, my name is ${firstName} ${lastName} and I am ${age} years old`;
    }
    console.log(greet3("Hannah", "Neirman", 21));
    console.log(greet3());
        // without passing arguments, we get 'undefined' in our results; before ES6, we'd have to do an if-statement to replace each parameter to a default value, because arguments were not passed
            // the old/pre-ES6 way of passing default arguments
                function greet4(firstName, lastName) {
                    if(typeof firstName === 'undefined'){
                        firstName = 'John';
                    }
                    if(typeof lastName === 'undefined'){
                        lastName = 'Smith';
                    }
                    return 'Hello ' + firstName + " " + lastName;
                } 
                console.log(greet4("bill"));

        //new way of passing default arguments
        function greet5(firstName = 'John', lastName = 'Doe') {
            return 'Hello ' + firstName + " " + lastName;
        }
        console.log(greet5());


//** ====== FUNCTION EXPRESSIONS ===== **//
/* - basically, a function as a ariable assignment
- it can be named or anonymous, AND USUALLY THEY ARE ANONYMOUS*/

// Anonymous function expression
const square = function(x) {
    return x*x;
};
console.log(square(8));

// named function expression
const operation = function add(num1, num2) {
    return num1 + num2;
}
console.log(operation(2,4));


// Expression vs Declaration: Which one to use?
    // in most cases, using a declaration vs an expression won't make much of a difference, but there are times when expressions have some benefits to them when it comes to hoisting(scope issues), closures and a few other advanced topics/techniques

/* === IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs === 
    - basically it's a functin that you delare and run at the same time
    - to do this, we need it  to be an expression and we do that by putting the function inside parenthesis and then call it with a pair of parenthesis right after it
    - they can also take parameters
    - use case: when designing 'modular patterns'
*/
// Basic IFEE
(function(){console.log('IFEE ran.....')})();
// declaring the function in the first (), calling it in the other set(arguments go in the second set of parenthesis)


// IIFE with parameters
(function(name){console.log('Hello ' + name)})('IIFE with parameter');

/* === PROPERTY METHODS ===
    - we can put functions inside of object literals as well, as opposed to just in global scope
    - when a function is put inside an object, it's called a 'Method'
*/

const todo =  {
    add: function(){
        console.log('add todo');
    },
    edit: function(id) {
        console.log(`edit todo ${id}`);
    }
}
todo.add();
todo.edit(2394);

// we can also define functions for this 'todo' object outside of its scope, consider the following:
todo.delete = function() {
    console.log('delete todo');
}
todo.delete();



