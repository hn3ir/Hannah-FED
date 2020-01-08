/* 
Switches - just like and if-elseif-else statement, they are another way to validate conditions and work the same way. Best use case is when there's lots of else-if cases in order to help us avoid repeating those else-if cases over and over
    - Ultimately, to help you krrp your code DRY (Dont Repeat Yourself)
*/

//Example 1
const color = 'red';
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('Color is neither red nor blue');
        break;
}

// Example 2
let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}
console.log(`Today is ${log}`);