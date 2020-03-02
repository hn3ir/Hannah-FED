const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// mouse events

// click
// clearBtn.addEventListener('click', runEvent);

// doubleClick
// clearBtn.addEventListener('dblclick', runEvent);

// mousedown
// clearBtn.addEventListener('mousedown', runEvent);
    // fires when mouse clicks down

// mouseup
//    clearBtn.addEventListener('mouseup', runEvent);
    // fires when mouse clicks up

// mouseEnter
// card.addEventListener('mouseenter', runEvent);
    // fires when entering the element

// mouse Leave
// card.addEventListener('mouseleave', runEvent);
    // big picture

// mouse over
// card.addEventListener('mouseover', runEvent);
    // any element inside of it will fire off.
    // fires when entering any child elements inside the main element, and the elment itself

// mouse out
// card.addEventListener('mouseout', runEvent);

// mousemove
// card.addEventListener('mousemove', runEvent);
    // fires when any mouse movement happens

// card.addEventListener('mousemove', runEvent);

//output - event handler

// function runEvent(e) {
    //console.log(`Event Type: ${e.offsetX}, ${e.offsetY}`);

    //heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
// }



card.addEventListener('mousemove', runEvent);

//output - event handler

function runEvent(e) {
    //console.log(`Event Type: ${e.offsetX}, ${e.offsetY}`);
    heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 147)`; 
}