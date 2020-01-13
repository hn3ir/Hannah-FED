/*
WINDOW OBJECT
    - the 'document' object is actually a part of the window object.
    - 'window' is the most global object in client-side JS
        - your system (or your computer/server side) is your environment when running Node.js, while in client-side your browser/window is the global environment
    - 'window' object has tons of built-in properties and methods that developers use all the time (for debugging and testing purposes)
*/

console.log(window);

// WINDOW METHODS / OBJECTS / PROPERTIES
    // // CONSOLE METHOD
    //     console.log(123);
    //     window.console.log
    // //ALERT METHOD
    //     window.alert('Hello World');
    // //PROMPT METHOD - similar to alert, except it takes an input
    //     const input = prompt();
    //     alert(input);
    // //CONFIRM METHOD - often used when deleting something, just to make sure the user wants to do what they want to. the confirm() method takes a parameter of the message
    //     if (confirm('Are you sure?')) {
    //         console.log('yes');
    //     } else {
    //         console.log('no');
    //     }

    // WINDOW PROPERTIES
        let val;

        // OUTER HEIGHT AND WIDTH PROPERTIES
        val = window.outerHeight;
        val = window.outerWidth;
        val = window.innerHeight;
        val = window.innerWidth;


    // SCROLL POINTS PROPERTY - to figure out where you are in terms of scrolling
        val = window.scrollY;
            // vertical axis
        val = window.scrollX;
            // horiztonal axis

    // LOCATION OBJECT
        val = window.location;
            val = window.location.hostname;
            val = window.location.port;
            val = window.location.search;

    // REDIRECT - redirects to another page
            // window.location.href = 'https://www.google.com';

    // RELOAD - reloads the page
            // window.location.reload();
    
    // HISTORY OBJECT - it's just that, you can get your browsing history
            window.history.go(-2);
            window.history.length;

    // NAVIGATOR OBJECT - has to do with the actual browser 
        val = window.navigator;
        val = window.navigator.appName;
        val = window.navigator.appVersion;
        val = window.navigator.userAgent;
        val = window.navigator.platform;
        val = window.navigator.vendor;
        val = window.navigator.language;
        

        
    
    //output
    console.log(val);
