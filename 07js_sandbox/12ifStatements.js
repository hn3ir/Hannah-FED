/*
IF STATEMENTS - used to evaluate some kind of condition and then do something based on that condition or something else if that condition isnt met
 
Syntax:
if (givenCondition) {
    do something
} else {
    do something else
}

 */


 /* ======== Comparison Operators ======== */
 const id = 100;

 // equal to
 if(id == 100) {
     console.log('id is 100')
 } else {
     console.log('id is not 100');
 }

 // not equal to 
 if(id != 100) {
    console.log('id is not 100')
} else {
    console.log('id is 100');
}

// equal to in value and type
if(id === 100) {
    console.log('id is 100 in value and type')
} else {
    console.log('id is not 100 in value and type')
}

// not equal to in value and type
if(id !== 100) {
    console.log('id is not 100 in value and type')
} else {
    console.log('id is 100 in value and type')
}

//greater or less than
if(id > 100) {
    console.log('id is greater than 100');
} else if (id < 100){
    console.log('id is less than 100');
} else {
    console.log('your id is 100');
}

const color = 'red';
if(color === 'red') {
    console.log('color is red');
} else if (color === 'blue'){
    console.log('color is blue');
} else {
    console.log('color is neither red nor blue');
}

 /* ======== Logical Operators ======== */
const name = "Steve";
const age = 70;


// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if (age>= 15 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65) {
    console.log(`${name} cannot participate in the 80k triathalon`);
} else {
    console.log(`${name} is registered for the race`)
}


// Ternary operators - short way of doing the exact same thing as an if-else statement
console.log(id === 100 ? 'Id is 100' : 'Id is not 100');


/* 

interview question!
you can use if else statements without brackets.

if(id===100)
    console.log('id is 100 without braces');
else
    console.log('id is not 100 without braces');

*/