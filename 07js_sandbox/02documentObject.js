/* EXAMINE THE DOCUMENT OBJECT MODEL

- properties of the DOM are attributes
- selectors are the methods

*/

let val

val = document

// Types of structures in the DOM
    // HTML collection
        // HTML collection looks like an array but does not behave like one
    // Node-Lists
        // look and behave like an array
        
val = document.all;
    // looks like an array and gives us a collection of all tags
val = document.all[2];
    // just like array, we can a ccess the values of our document using indexes
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.characterSet;
    // used for selecting the type of characters you want to use for the language
val = document.contentType;


// selecting stuff (elements) without selectors, not recommended but just showing
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].action;
val = document.forms[0].method;


val = document.links;
val = document.links[5];
val = document.links[5].className;
    // shows all the classes 
// val = document.link[5].classList;
    // collection of classes


val = document.scripts;
val = document.scripts[2].getAttribute('src');


// let scripts = document.scripts;
// scripts.forEach(function(script){
   // console.log(script);
// })
 // in order to convert a collection into an array, we use the array.from() method = 

let scriptsArray = Array.from(scripts);
scriptsArray.forEach(function(script){
console.log(script);
console.log(script.getAttribute('src'));

})

console.log(val)

// objects use for each method


