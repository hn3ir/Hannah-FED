const name = "John";
const age = 30;
const job = "Web Developer";
const city = "Chicago";

// old way of inserting HTML from JS
html = "<ul><li>name: " + name + "</li><li>age: " + age + "</li></ul>"

// another way of doing the same thing
html = "<ul>" +
        "<li>Name: " + name + "</li>";


// with Template String/Literals (ES6)
    // using backticks `` and we use $ {}
    // much cleaner and easy to write
    function hello() {
        return "Hi Hannah!";
    }


    html = `
        <ul>
            <li>name: ${name}</li>
            <li>age: ${age}</li>
            <li>job: ${job}</li>
            <li>city: ${city}</li>
            <li>${4+4}</li>
            <li>${hello()}</li>
            <li>${age > 20 ? 'Over 20' : 'Under 20'}</li>
        </ul>  
    `;
    
    
// output in html
document.body.innerHTML = html;

