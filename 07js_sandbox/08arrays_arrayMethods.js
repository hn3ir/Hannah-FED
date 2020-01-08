/*
Arrays are a very important part of many programming languages that allow us to store multiple values in one variable. They can be mutated, iterated through, and can be used in some really complex algorithms!
*/

// let's create some arrays!
const numbers = [43,56,33,23,44,26,5];
    // this is the conventional way of creating arrays
const numbers2 = new Array(22,45,12,87,34);
    // using the array-constructor or array-object
const fruits = ["Orange", "Apple", "Pear", "Banana"];
const age = [62,56,78,34,19,41];
const mixedArray = [22, "Hello", true, undefined, null, {city: "Chicago, zip: 60625"}, ["thing 1", "thing 2"], new Date()];
//console.log(mixedArray);

let val;
val = numbers.length;

//check if is an Array
val = Array.isArray(numbers);
val = Array.isArray(2342352523);

// get a single value
val = numbers[3];

// insert and replace into Array
numbers[2] = 100;

//find the index of a certain value
val = numbers.indexOf(36);



// * ==== mutating arrays ==== * //
// add to front of the array 
numbers.unshift(120);
//remove from front of the array
numbers.shift();
// ADD to the end of the array
numbers.push(250);
// remove from end of the array
numbers.pop();

//splice values
numbers.splice(1,3);
    // the parameters are where we want to stop and where to finish. meaning, in this case we're taking values off from index 1 to 3

// concatenate arrays
val = numbers.concat(numbers2);    

//sorting arrays
val = fruits.sort();

//sorting numbers in arrays
val = numbers.sort();
    //sorts by first digit of the number
// use the 'compare function' to sort
    // val = numbers.sort(function(x,y){
    //    return x-y;
    //    });
    // reverse sort  val = numbers.sort(function(x,y){
    //    return y-x;
    //    });


// find method (takes in a testing function)
    // to use the Find method, we must first create a testing function
    var under50 = (number) => {
        return numbers < 50;
    }
val = age.find(under50)
    // found the first number in the array that was less than 50
// output
console.log(val);
console.log(numbers);