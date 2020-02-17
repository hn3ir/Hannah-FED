/*
CREATING ELEMENTS
- create elements and add attributes to them like classes and id's
- then we are going to insert them into the DOM
    - we will be adding an extra list-item

*/

// CREATE ELEMENT
const li = document.createElement('li');

// ADD CLASS
li.className = 'collection-item';

// ADD ID
li.id = 'new-item';

// ADD OTHER ATTRIBUTES
li.setAttribute('title', 'New Item');
//li.setAttribute('href', 'url link');

// CREATE TEXT NODE AND APPEND (adding the text part)
 // we want to add some text inside the list item (li)
 // create a text-node and then append using the appendChild() method

const textNode = document.createTextNode('New List Item');
li.appendChild(textNode);

//li.appendChild(document.createTextNode('New List Item'));
// both the same thing


// APPEND LI AS A CHILD TO THE UL
// document.querySelector('ul.collection').appendChild(li);

// CREATE NEW LINK ELEMENT
const link = document.createElement('a');
link.className ='delete-item secondary-content';
// ADD HREF
link.setAttribute('href', '#');
// ADD ICON/I TAG
link.innerHTML = '<i class="fa fa-remove"></i>';

// APPEND LINK INTO LI
li.appendChild(link);

// APPEND LI AS CHILD INTO UL 
document.querySelector('ul.collection').appendChild(li);

// 

// output
console.log(li);
console.log(link);