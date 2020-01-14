// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

// FUNCTION SCOPE
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope:',a,b,c);
}
test();
    // the variables inside the test() function (function scope) are separate variables in the global scope. WHY??? because they are in a different scope
    // var is a function-scope declaration, which means you can have a different variable of the same name inside of a function than on the outside (global-scope), so 'var a' in the function-scope does not affect the 'var a' in the global scope

// BLOCK LEVEL SCOPE - for if-statements, loops and anything wrapped inside curly-braces
    // IF statement
    if(true) {
        var a = 7;
        let b = 8;
        const c = 9;
        console.log('Block Level If Scope:', a,b,c);
    }


// TAKEAWAY:    
// VAR DECLARED INSIDE A BLOCK-LEVEL SCOPE ALTERS VAR IN A GLOBAL-SCOPE
// LET/CONST HAVE A BLOCK-LEVEL SCOPE AND VAR HAS A FUNCTION-SCOPE


    // FOR LOOP
    for(let a=0; a<10; a++) {
        console.log(`Block-Level For Loop Scope with let: ${a}` );
    }



// global scope output
console.log('Global Scope: ', a, b, c);