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
            -
*/

// document.getElementById()
console.log(document.getElementById('task-title'));
// grab the id
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Changing Style
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.padding = '5px';
    // this code is wet, need to keep it DRY - don't repeat yourself!


const taskTitle = document.getElementById('task-title')

// changing styles with DRY code
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';
        // gets rid of the h5

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
 // research the difference between textContext and innerText
taskTitle.innerHTML = '<span style="color:red;">Task List</span>'


// document.querySelector()
// selecting element by id
console.log(document.querySelector('#task-title'));
// select element by class name
console.log(document.querySelector('.card-title'));
// seect element by tag name
console.log(document.querySelector('li'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
//just getting more specific

// to select last li
document.querySelector('li:last-child').style.color = 'green';
// to specifically select the 3rd li 
document.querySelector('li:nth-child(3)').style.color = 'yellow';
// change the text-content on the 4th li
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// odd and even
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

