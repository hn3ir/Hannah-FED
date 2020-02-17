/*
TRAVERSING THE DOM
- simply means moving up and down the DOM; where we're dealing with parents and children of specific nodes or whatever we select

*/

let val;

const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item');
    // same as below, getting more specific
const listItem = document.querySelector('li.collection-item:first-child');

val = list;

val = listItem;

// Get child-nodes
val = list.childNodes;
    // childNodes property gives us a NodeList of all the child nodes
    // these text-nodes we see are line breaks

val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;
    /* most common nodeTypes
    1 - actual Element
    2 - Attributed (deprecated)
    3 - text Node (line-breaks)
    8 - comment
    9 - Document, itself
    10 - Doctype
    */
  
val = list.childNodes[1].nodeType;

// Get Children element nodes
val = list.children;
    // gives us HTML collection
    // the .children property returns just the children elements without the extra nodes; however it's an HTML-collection
val = list.children[1];
list.children[1].textContent = 'hello world';

// get children of children
val = list.children[3].children[0];
val = list.children[3].children[0].id;
val = list.children[3].children[0].className;
val = list.children[3].children[0].classList[0];
val = list.children[3].children[0].children[0];
val = list.children[3].children[0].children[0].classList;
val = list.children[3].children[0].children[0].classList[1];


// get the last child
val = list.lastChild;
    //returns last node-child
val = list.lastElementChild;
    // returns the last element (html code)

// count child elements
val =  list.childElementCount;
    // childElementCount property does not count nodes, only elements


// Get Parent Node
val = listItem.parentNode;
    // returns the ul entirely
val = listItem.parentElement;
    // in most cases it will be the same thing.
val = listItem.parentElement.parentElement;
    // returns the parent on the ul, which is div = card-action

// get Next Siblings
val = listItem.nextSibling;
    // returns text-node, just like childNodes property, firstChild and lastChild, returning nodes and not just the elements
val = listItem.nextElementSibling;
    // gives us the next sibling element

val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling;
    // if we keep digging and run out of siblings, the console will return 'null' meaning theres nothing to see here

// get previous sibling
val = listItem.previousSibling;
    // returns text node because we're counting all nodes, not just elements
val = listItem.previousElementSibling;
    // null because there is nothing there

let val1 = listItem.nextElementSibling.nextElementSibling.previousElementSibling.parentElement.classList[0];

val1 = 'collection-item';

val = val1;

console.log(list);





//output
console.log(val);