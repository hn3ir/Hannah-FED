/*
general loops and iteration

LOOPS
    - instruction that repeats until a specific condition is reached/met
    - used to run the same block of code using different values each time
    - there are multiple ways to run iterations in JS, but the most popular types of general loops (used in most programming languages) are:
        1. for loops
            - takes in 3 parameter, separated by semi-colons
                - First parameter is the declaration of a variable. We have to use either var or let; we cant use const in a for loop parameter because as we iterate through the list, the value of the variable will keep changing. its going to keep changing value as it iterates.
                - Second parameter is the condition
                - Third parameter is the increment
        2. while loops
            - we set the variable outside the loop
            - while(condition) {}
            - inside the curly braces we do what we want (console.logging and incrementing)
        3. do while loops
            - a bit different, because it's always going to run at least once no matter what
            - 
    - loops that are array specific, meaning there are special loops that can run in arrays. (**method means its a function, parenthesis means function too)
        - forEach() method - takes in a callback function (aka anonymous function) that accepts 3 parameters
            1. iterator - naming convention: it's a singular name/syntax of the array
            2. index
            3. the actual entire array
        - map() method 
    - for in
        - used to loop/iterate through objects so we can get key value pairs
*/

// FOR LOOPS
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// OTHER THINGS WE CAN DO
// Concatenation 
for (let i = 0; i < 10; i++) {
    console.log('Number ' + i);
}

//SKIP AN ITERATION AND BREAK OUT OF LOOP
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        console.log('2 is my favorite number');
    }
    console.log('number ' + i);
}
    // this doesnt skip iteration at i === 2, still gets fired from both console.log statements. to skip an iteration, we use the 'continue' keyword in the if-statement

    //    for (let i=0; i<10; i++) {
            //skip iteration
    //        if(2) {
    //            console.log('2 is my favorite number');
    //            continue;   
    //        }
    //        // break out of loops
    //        if(i===5) {
    //            console.log('stop the loop');
    //            break;
    //        }
    //        console.log('Number ') + i);
    //    }
        

/*
NOTE TO SELF:
Which type of loop to use?
        - it's general preference, not black or white. 
        - HOWEVER, 
            - use a FOR LOOP when you know how many times its going to run (how many iterations it has)
            - use a WHILE LOOP when you don't, when it's unclear how many times it can run (or how many iterations there should be)
*/


//WHILE LOOPS
let i = 0;
while(i < 10) {
    console.log('while loops ' + i);
    i++;
}

//DO WHILE LOOP
let e = 0;
do {
    console.log('do while loop ' + e);
    e++;
}
while(e <10);
    // do while example # 2
        let f = 100;
        do {
            console.log('do while loop ex.2 ' + f);
            f++;
        }
        while(f <10);


// LOOPING THROUGH ARRAYS
const cars = ['Ford', 'Nissan', 'Honda', 'Toyota'];
// console.log(cars.length); (gives you 4)
for(let i = 0; i < cars.length; i++) {
    console.log(i);
        // this is consoling just the index numbers
        // REMEMBER: we can access values in arrays by doing something like cars[1] ie console.log(cars[1]); would give you Nissan
        // because it's looping through i, we can wrap it in cars as below
    console.log(cars[i]);
        // this will console the actual values
}

// ForEach() Method
cars.forEach(function(car, index, theEntireArray){
    console.log('forEach ' + car);
    console.log('with index ' + index);
    console.log(theEntireArray);
});

//map() Method
const users = [
    {id:0, name:"Jim"},
    {id:1, name:"Ray"},
    {id:2, name:"Bob"},
    {id:3, name:"Tim"},
    {id:4, name:"Wes"},
    {id:5, name:"Jeb"}
];
// create another variable called ids and names and grab those values from the users array
const ids = users.map(function(user){
    return user.id;
});
console.log(ids);

const name = users.map(function(user){
    return user.id;
});
console.log(ids);

// FOR IN LOOPS
const user = {
    firstName: "Jack",
    lastName: "Ryan",
    age: 36,
    superHeroGoodGuy: true
};

for(let x in user){
    console.log(x);
        // prints all the keys
    console.log(`${user[x]}`);
        //prints all the values
    console.log(`${x} : ${user[x]}`);
        
}

