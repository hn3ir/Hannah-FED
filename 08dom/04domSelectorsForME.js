/*
DOM Selectors
 - Document Object Methods allow us to pull elements/nodes from the DOM that we can manipulate
    1. single-element selectors
        - will allow you to grab one element by its class/ID and it only stores one thing.
        - if you use a single element selector on a class that appears more than once, its going to grab just the very first one.
            - getElementById()
                - selects an element by its ID
                - you can't select an element/node with a class or tag name
            - querySelector()
                - newer and much more powerful because we dont have to select items just by IDs anymore.

    2. multiple-element selectors
        - will allow you to grab all the elements/nodes with the same class and return an HTML collection or a node-list depending on which selector you use.
            - getElementsByClassName
            - getElementByTagName
            - querySelectorAll()
*/

// document.getElementsByClassName()
const items = document.getElementsByClassName('collection-item');
console.log(items);
 // we get an HTML collection
 // each list-item is in an index, just like arrays (starts at 0 instead of 1) (looks like an array but its not); all the properties are there, just not the methods. therefore, technically not an array
console.log(items[0]);
    // gives us the first li


items[0].style.color ='red';
items[3].textContent= 'Hello peeps';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.background = 'lightblue';
lis[3].textContent = 'Hello Creeps';

// lis.reverse();
    // errors, because its an HTML collection and not an array..... yet
    // it looks like a duck but doesnt quack like one, therefore not a duck

// convert HTML collection into an array
lis = Array.from(lis);
console.log(lis);
lis.reverse();

// since it's now an array, we can do forEach() loop
lis.forEach(function(li){
    console.log(li.className);
})

lis.forEach(function(li){
    li.textContent = 'Hello';
})

lis.forEach(function(li, index){
    li.textContent = `${index}: Hello`;
})

console.log(lis);


//document.querySelectorAll()
    // this method returns a "node-list" instead of an HTML collection, and there is a difference
        // a node-list not only counts the actual elements, but also counts things like "text-nodes"
        // a node-list is already an array, so no need to convert

const lItems = document.querySelectorAll('ul.collection li.collection-item');
console.log(lItems);

//forEach without Array conversion
lItems.forEach(function(lItem, index){
    lItem.textContent = `${index}: Hello node-list`;
})

// odds and evens
const liOdd = document.querySelectorAll('li:nth-child(odd');
const liEven = document.querySelectorAll('li:nth-child(even');

liOdd.forEach(function(li){
    li.style.background = '#ccc'
})
liEven.forEach(function(li){
    li.style.background = '#f4f4f4'
})



