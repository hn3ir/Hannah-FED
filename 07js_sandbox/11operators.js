// i++
// operand

var book = "catch 22"
// = is an assignment operator

/* 
   -  3 + 4
        3 and 4 are the 'operands'
        + is a binary operator, meaning it has operands before and after
   -  = is an assignment operator
   -  i++ is a unary operator
        where we have only one operand and an operator
*/

const x = 5;
const y = 9;

let val; 

/*
COMPARISON OPERATORS (assuming x=5)
Operator    Name
==================================
>           greater than
>=          greater than or equal to
<           less than
<=          less than or equal to
==          equal to
!=          not equal to
===         equal to in value and type
!==         not equal to in value and type
 */

 val = x > 5;
 val = x>= 5;
 val = x < -50;
 val = x <= 100;
 val = x =='5';
 val = x != 'v';
 val = x === "5";

/*
Logical Operators - AND, OR, and NOT (assuming x=5 and y=9)

Operator    Name
============================
&&          AND two ampersands
||          OR  two pipe characters
!           NOT exclamation mark

*/

val = (x <10) && (x !== 5);
    // when using the AND operator, both expressions surrounding the operator must be true for the entire statement to be true. If any one expression is false, the entire statement is false.

val = (y > 9) || (x=== 5);


val = !(x ===y);



console.log(val);