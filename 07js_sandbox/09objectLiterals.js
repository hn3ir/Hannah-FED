const person = {
    firstName: 'Steve', 
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['eating nachos', 'fish', 'drink cheap beer'],
    address: {
        city: "Frogs Balls",
        state: "Arkansas",

    },
    BirthYear: function () {
        return 1971;
    }
};

// console.log(person);
// curly braces define this variable as an Object Literal
// Inside these curly braces, we put 'key: valye pairs that are separate by commas
// functions stored inside as object parameters are called methods

let val;

val = person;

//get specific value
val = person.firstName;
    //another way of accessing object values, but not recommended
    val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
    //again, another way but not recommended
    val = person.address['city'];

val = person.BirthYear();

// in Object literals, we can access other properties 
    // 'this' keyword
    const person2 = {
        age: 32,
        getBirthYear: function(){
            return 2020 - this.age;
        }

    }

    val = person2.getBirthYear();

//output
console.log(val);


// Arrays that are made out of objects
const people = [
    {name: 'Joe', age: '87'},
    {name: 'Bob', age: '64'},
    {name: 'Buck', age: '24'},
    {name: 'Chunks', age: '68'},
    {name: 'Jim', age: '45'},
    {name: 'John', age: '53'}
];

// iterate through and get names using a for-loop
for (let i =0; i < people.length; i++) {
    console.log(people[i].name);
}


