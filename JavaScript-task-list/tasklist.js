// 1. Define UI variables
// Add task button as an event. Passes when the user sets add task button
//
//
//
//


const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


function newItem() {
	var item = document.getElementById("task").value;
	var ul = document.getElementsByClassName("collection");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("- " + item));
	ul.appendChild(li);
	document.getElementById("task").value = "";
	li.onclick = removeItem;
}

document.body.onkeyup = function (e) {
	if (e.keyCode == 13) {
		newItem();
	}
};

function removeItem(e) {
	e.target.parentElement.removeChild(e.target);
}







// // load all event listeners in one function
// loadEventListener();

// function loadEventListener() {
// 	form.addEventListener('submit', addTask);
// 	addTaskButton.addEventListener("click", () => {
// 		let taskItem = document.createElement("li");
// 		taskItem.textContent = addTaskInput.value;
// 		taskList.appendChild(taskItem);
// 		addTaskInput.value = " ";
// 	});

// 	document.onclick = function (e) {
// 		if (e.target.tagName == 'LI') {
// 			e.target.remove();
// 		}
// 	}


// 	taskList.addEventListener('click', removeTask);

// 	function removeTask(e) {
// 		var ul = document.querySelector('.tasks');
// 		var listLength = ul.children.length;

// 		while (ul.children.length != 0) {
// 			ul.removeChild(ul.childNodes[0]);
// 		}


// 	}
// 	removeTask(e);


// 	clearBtn.addEventListener('click', clearTask);


// 	taskInput.addEventListener('keyup', filterTask);

// }

// function addTask(e) {

// 	if (taskInput.value === '') {
// 		alert('Hey! Add a task dummy!');
// 		return;
// 	}


// 	var li = document.createElement('li');
// 	li.className = 'collection-item';
// 	li.appendChild(document.createTextNode(taskInput.value));


// 	var link = document.createElement('a');
// 	link.className = 'delete-item secondary-content';
// 	link.innerHTML = '<i class="fa fa-remove"></i>';
// 	li.appendChild(link);

// 	taskList.appendChild(li);


// 	taskInput.value = '';



// 	console.log(li);
// 	console.log(link);
// 	e.preventDefault();
// }


// function removeItem(e) {
// 	e.target.parentElement.removeChild(e.target);
// }



// function clearTask(e) {
// 	var parent = this.parentElement.parentElement;
// 	parent.removeChild(this.parentElement);
// }


// function filterTask(e) {

// }




// function newItem() {
// 	var item = document.getElementById("task").value;
// 	var ul = document.getElementById("list");
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode("- " + item));
// 	ul.appendChild(li);
// 	document.getElementById("input").value = "";
// 	li.onclick = removeItem;
// }

// document.body.onkeyup = function (e) {
// 	if (e.keyCode == 13) {
// 		newItem();
// 	}
// };

// function removeItem(e) {
// 	e.target.parentElement.removeChild(e.target);
// }