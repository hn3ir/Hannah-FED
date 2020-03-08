const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

form.addEventListener('submit', runEvent);

// clear input
taskInput.value = '';

// KEYBOARD EVENT
// KEYDOWN
taskInput.addEventListener('keydown', runEvent);
//key up
taskInput.addEventListener('keyup', runEvent);
//key press
taskInput.addEventListener('keypress', runEvent);


//OTHER INPUT EVENTS
//FOCUS
// CUT
//PAST
// input
// 
taskInput.addEventListener('input', runEvent);
taskInput.addEventListener('paste',runEvent);
taskInput.addEventListener('cut', runEvent);
function runEvent(e) {
    console.log(`Event Type: ${e.type})`;
    console.log(e.target.value);
    
    e.preventDefault();
}
    
// taskInput.addEventListener('focus',runEvent);

//BLUR
taskInput.addEventListener('blur', runEvent);

