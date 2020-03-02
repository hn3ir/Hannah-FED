// Replacing Items

// Create a new element to replace the original with
const newHeading = document.createElement('h2');

//add ID
newHeading.id = 'task-title'
// new textnode
newHeading.appendChild(document.createTextNode('New Tasks Heading'));

console.log(newHeading);

// First, get the old element thats to be replaced
const oldHeading = document.getElementById('task-title');

// second, grab the parent of element that's to be replaced
const cardAction = document.querySelector('.card-action');

// finally, and thirdly, to replace old element with new
cardAction.replaceChild(newHeading, oldHeading);


// Removing items

const lis = document.querySelectorAll('li');
    // variable for list-items
const list = document.querySelector('ul');
    // variable for the ul

// remove list-item using remove()
    lis[0].remove();

// remove child element
list.removeChild(lis[3]);


// classes and attributes
const firstLi = document.querySelector('li:first-child');
console.log(firstLi.children[0]);
const link = firstLi.children[0];

let val;

// classes
val = link.className;
    //gives us the string of classes
val = link.classList;
    // not actually an Array, but a Dom-tokenList which is set up like an array 
val = link.classList[0];
val = link.classList.add('test');
    // to add a class
val = link.classList.remove('test');
    // removes a class
val = link;


// other attributes
val = link.getAttribute('href');
// gives us value of attribute
val = link.setAttribute('href', 'https://google.com');
    // changes the value of attribute
        // first parameter is the actual attribute
        // second parameter sets the new value

val = link.hasAttribute('href');
    // returns a boolean value; checks if theres an attribute or not

val = link.setAttribute('title', 'TaskListo4MyBros');
val = link.hasAttribute('title');
val = link.removeAttribute('title');
    // removes attribute

// output
console.log(val);



