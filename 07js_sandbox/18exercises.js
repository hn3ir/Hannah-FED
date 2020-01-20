/*
Directions:
Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

Print the total to the JavaScript console.

Hint: 15% in decimal form is written as 0.15_._

TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.
*/

/*
 * Programming Quiz: Out to Dinner
 */

var bill = (10.25 + 3.99 + 7.15);
var tip = 0.15 * bill;
//var total = "$" + (bill + tip).toFixed(2);

var total = bill + tip;
console.log("$"+total.toFixed(2));

//console.log(total);






/*
Directions:

Mad Libs (https://en.wikipedia.org/wiki/Mad_Libs) is a word game where players have fun substituting words for blanks in a story. For this exercise, use the adjective variables below to fill in the blanks and complete the following message.

"The Intro to JavaScript course is __________. James and Julia are so __________. I cannot wait to work through the rest of this __________ content!"

var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";

Assign the resulting string to a variable called madLib.
*/

/*
 * Programming Quiz: MadLibs
 * 
 * 1. Declare a madLib variable
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 */

var adjective1 = 'amazing';
var adjective2 = 'fun';
var adjective3 = 'entertaining';

var madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!"

console.log(madLib);






/*
Directions:
Here are two awesome messages:

Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
Hi, my name is James. I love baseball. In my spare time, I like to read.

Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).

Use your variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. Finally, print your awesome message to the JavaScript console.
*/

/*
 * Programming Quiz: One Awesome Message
 *
 * 1. Create the following variables:
 *     - firstName
 *     - interest
 *     - hobby
 * 2. Create a variable named awesomeMessage and set it to an awesome message using
      string concatenation and the variables above.
 * 3. Log the awesomeMessage variable to the console.
 */

/*
 * Notes:
 * - The `awesomeMessage` should have the format of:
 *   Hi, my name is _____. I love _____. In my spare time, I like to _______.
 *
 * - Using the above as an example, firstName would have been assigned to "Julia",
 *   interest to "cats", and hobby to "play video games" to produce the message:
 *   Hi, my name is Julia. I love cats. In my spare time, I like to play video games.
 *
 * - Be sure to include spaces and periods where necessary!
 */

var firstName = 'Julia';
var interest = 'cats';
var hobby = 'play video games';

var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + "."

console.log(awesomeMessage);



/*
Musical groups have special names based on the number of people in the group.

For example, a "quartet" is a musical group with four musicians. Barbershop quartets were a popular type of quartet in the early 1900s and featured four singers made up of a lead, tenor, baritone, and bass.

Directions:
Write a series of conditional statements that:
   - prints "not a group" if musicians is less than or equal to 0
   - prints "solo" if musicians is equal to 1
   - prints "duet" if musicians is equal to 2
   - prints "trio" if musicians is equal to 3
   - prints "quartet" if musicians is equal to 4
   - prints "this is a large group" if musicians is greater than 4

TIP: Make sure to test your code with different values. For example,

If musicians equals 3, then trio should be printed to the console.
If musicians equals 20, then this is a large group should be printed to the console.
If musicians equals -1, then not a group should be printed to the console.
*/

/*
 * Programming Quiz: Musical Groups
 */

// change the value of `musicians` to test your conditional statements
var musicians = 34985734598734958739485;

// (-)--------------- 0 1 2 3 4 --------------- (+)

if(musicians <= 0) {
  console.log("not a group");
} else if (musicians === 1) {
  console.log("solo");
}
else if (musicians === 2) {
  console.log("duet");
}
else if (musicians === 3) {
  console.log("trio");
}
else if (musicians === 4) {
  console.log("quartet");
} 
// else if (musicians >= 5) {
//   console.log("this is a large group");
// }
else {
  console.log("this is a large group");
};


/*
A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit.

Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. Here's what we know! In this murder mystery there are:
   - four rooms: the ballroom, gallery, billiards room, and dining room,
   - four weapons: poison, a trophy, a pool stick, and a knife,
   - and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.

We also know that each weapon corresponds to a particular room, so...
   - the poison belongs to the ballroom,
   - the trophy belongs to the gallery,
   - the pool stick belongs to the billiards room,
   - and the knife belongs to the dining room.

And we know that each suspect was located in a specific room at the time of the murder.
   - Mr. Parkes was located in the dining room.
   - Ms. Van Cleve was located in the gallery.
   - Mrs. Sparr was located in the billiards room.
   - Mr. Kalehoff was located in the ballroom.

To help solve this mystery, write a combination of conditional statements that:
   1) sets the value of weapon based on the room and
   2) sets the value of solved to true if the value of room matches the suspect's room

Afterwards, print the following to the console if the mystery was solved:
   __________ did it in the __________ with the __________!
If not solved:
   __________ is innocent!

Fill in the blanks with the name of the suspect, the room, and the weapon. For example,
   Mr. Parkes did it in the dining room with the knife!

TIP: Make sure to test your code with different values. For example,

If room equals gallery and suspect equals Ms. Van Cleve, then Ms. Van Cleve did it in the gallery with the trophy! should be printed to the console.
*/

/*
 * Programming Quiz: Murder Mystery
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Ms. Van Cleve";

var weapon;
var solved = false;

if (room === "dining room") {
  weapon = "knife";
  if (suspect === "Mr. Parkes") {
    solved = true;
  } 
} else if (room === "gallery") {
    weapon = "trophy";
    if (suspect === "Ms. Van Cleve") {
      solve = true;
    }
} else if (room === "billiards room") {
    weapon = "pool stick"
    if (suspect === "Mrs. Sparr") {
      solved = true;
    }
} else {
    weapon = "poison";
    if (suspect === "Mr. Kalehoff") {
      solved = true;
    }
}

if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else {
  console.log(suspect + " is innocent");
}




/*
Use the following variables in your solution:
   - balance - the account balance
   - isActive - if account is active
   - checkBalance - if you want to check balance

Hint: The variable balance could be a value less than, greater than, or equal to 0. The variables isActive and checkBalance are booleans that can be set to true or false.

TIP: To print out the account balance with decimal points (i.e. 325.00), use the .toFixed() method and pass it the number of decimal points you want to use. For example, balance.toFixed(2) returns 325.00.

TIP: Make sure to test your code with different values. For example,

If checkBalance equals true and isActive equals false, then Your account is no longer active. should be printed to the console.
*/

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 0;
var checkBalance = true;
var isActive = true; 

// Nabeel - your code goes here
if (!checkBalance) { 
  console.log("Than you. Have a nice day.")
} else if (isActive === true && balance > 0) {
  console.log(`Your balance is $${balance.toFixed(2)}.`);
} else if (!isActive) {
  console.log("Your account is no longer active");
} else if (balance === 0) {
  console.log("Your account is empty.");
} else {
  console.log("Your balance is negative. Please contact the bank");
}

// Hannah - your code goes here
  // if (checkBalance === true & isActive === true) {
  //   console.log("Thank you. Have a nice day")
  // } else if (checkBalance === true && isActive === false) {
  //   console.log("Your account is no longer active");
  // } else if (checkBalance === true && isActive === true && balance > 0){
  //   console.log("Your balance is $" + balance.toFixed(2) + ".")
  // } else if (checkBalance === true && isActive == true && balace === 0){
  //   console.log("Your account is empty")
  // } else {
  //   console.log("your account is negative. please contact bank.")
  // }



  /*
Directions:
Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:
   - if flavor is set to vanilla or chocolate and
   - if vessel is set to cone or bowl and
   - if toppings is set to sprinkles or peanuts

If the above conditions are true, then print out: 
   I'd like two scoops of __________ ice cream in a __________ with __________.

Fill in the blanks with the flavor of the ice cream, vessel, and toppings. For example,
   I'd like two scoops of vanilla ice cream in a cone with peanuts.

TIP: Make sure to test your code with different values. For example,

If flavor equals "chocolate", vessel equals "cone" and toppings equals "sprinkles", then "I'd like two scoops of chocolate ice cream in a cone with sprinkles." should be printed to the console.
*/

/*
 * Programming Quiz: Ice Cream
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "chocolate";
var vessel = "bowl";
var toppings = "sprinkles";


if ((flavor === "vanilla" || flavor === "chocolate") && 
    (vessel === "cone" || vessel === "bowl") && 
    (toppings === "sprinkles" || toppings === "peanuts")) {
      console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings)
  }


/*
Directions:
Use the sizing chart, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...
   - var shirtWidth = 23; // size L (large)
   - var shirtLength = 30; // size L (large)
   - var shirtSleeve = 8.71; // size L (large)
Then print L to the console.

Hint: You will need to compare a range of values when checking for shirtWidth, shirtLength, and shirtSleeve. For example, if the shirt's width is at least 20", but no more than 22", then the t-shirt should be medium (M) — as long as the other values for the shirt's length and sleeve measurements match up.

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print N/A to the console. For example, if...
   - var shirtWidth = 18; // size S (small)
   - var shirtLength = 29; // size M (medium)
   - var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

TIP: Make sure to test your code with different values. For example,
   - If shirtWidth equals 19, shirtLength equals 28 and shirtSleeve equals 8.21, then S should be printed to the console.
   - If shirtWidth equals 26, shirtLength equals 33 and shirtSleeve equals 9.63, then 2XL should be printed to the console.
   - If shirtWidth equals 18, shirtLength equals 29 and shirtSleeve equals 8.47, then N/A should be printed to the console.
*/

/*
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 29;
var shirtLength = 36.5;
var shirtSleeve = 14.07;

if (
    ((shirtWidth >= 18) && (shirtWidth < 20)) && 
    ((shirtLength >= 28) && (shirtLength < 29)) &&
    ((shirtSleeve >= 8.13) && (shirtSleeve < 8.38))
) {
    console.log("S");
} else if (
    ((shirtWidth > 19) && (shirtWidth < 22)) &&
    ((shirtLength >= 28) && (shirtLength < 30)) &&
    ((shirtSleeve >= 8.37) && (shirtSleeve < 8.63)) 
  )  {
    console.log("M");
} else if (
    ((shirtWidth > 22) && (shirtWidth < 24)) &&
    ((shirtLength >= 30) && (shirtLength < 31)) &&
    ((shirtSleeve >= 8.63) && (shirtSleeve < 8.88)) 
  )  {
    console.log("L"); 
} else if (
    ((shirtWidth > 24) && (shirtWidth < 26)) &&
    ((shirtLength >= 31) && (shirtLength < 32)) &&
    ((shirtSleeve >= 8.88) && (shirtSleeve < 9.63)) 
  )  {
    console.log("XL");
} else if (
    ((shirtWidth > 26) && (shirtWidth < 28)) &&
    ((shirtLength >= 33) && (shirtLength < 34)) &&
    ((shirtSleeve >= 9.63) && (shirtSleeve < 10.13)) 
  )  {
    console.log("2XL");
} else if (
    (shirtWidth >= 28) &&
    (shirtLength >= 34) && 
    (shirtSleeve >= 10.13) 
  )  {
    console.log("3XL");
} else {
    console.log("N/A");
    }
  
