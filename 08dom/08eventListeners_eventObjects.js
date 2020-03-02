/*
Event Listeners and Event Objects
*/

// HOW TO ADD AN EVENT LISTENER TO THE 'CLEAR TASK' BUTTON
    // we first select the element
    // then, addEventListener, which takes two parameters
        // 1. the actual type of event (aka the Event Object) that we want to listen for
        // 2. an anonymous/callback function and what we put in this function is what will happen when we run the 'click' event-object

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//    console.log('Hello World');
//    e.preventDefault();
// })

// in addition to putting in an anonymous function, we can also use named functions

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
    // console.log('clicked');

    let val;

    val = e.target;
        // gives us actual element
    val = e.target.id;
        // nothing, because there's no id

    val = e.target.className;
        // we get the classes the element has

    val = e.target.classList;
        // DOM token list

    e.target.innerHTML = 'Hello World';

    val = e.type;
        // tells us what type of event its listening for (event object)

    val = e.clientY;
    val = e.offsetY;
        // client Y counts from the edge of the page
        // offset Y counts from the top of the element
    val = clientX;
    val = offsetX;

    console.log(val);
}
