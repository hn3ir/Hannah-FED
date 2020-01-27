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



/*
From the smallest of creatures to the largest of animals, inevitably every living, breathing thing must ingest other organisms to survive. This means that all animals will fall within one of the three consumer-based categories based on the types of food that they eat.

   - Animals that eat only plants are called herbivores
   - Animals that eat only other animals are called carnivores
   - Animals that eat both plants and animals are called omnivores

Directions:
Write a series of ternary statements that sets the variable category equal to:
   - "herbivore" if an animal eats plants
   - "carnivore" if an animal eats animals
   - "omnivore" if an animal eats plants and animals
   - undefined if an animal doesn't eat plants or animals

Use the eatsPlants and eatsAnimals variables to test your code.

TIP: Make sure to test your code with different values. For example,

If eatsPlants equals true and eatsAnimals equals false, then herbivore should be printed to the console.
*/

/*
 * Programming Quiz - Navigating the Food Chain
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = false;

var category = (eatsPlants && eatsAnimals) ? 'omnivore'  
    : eatsPlants ? 'herbivore' 
    : eatsAnimals ? 'carnivore'
    : undefined;
console.log(category);




/*
In 2015, the U.S. Bureau of Labor Statistics conducted research to reveal how average salary is directly related to the number of years spent in school. In their findings, they found that people with:
   - no high school diploma earned an average of $25,636/year,
   - a high school diploma earned an average of $35,256/year,
   - an Associate's degree earned an average of $41,496/year,
   - a Bachelor's degree earned an average of $59,124/year,
   - a Master's degree earned an average of $69,732/year,
   - a Professional degree earned an average of $89,960/year,
   - and a Doctoral degree earned an average of $84,396/year.

Directions:
Write a switch statement to set the average salary of a person based on their type of completed education.

Afterwards, print the following to the console.
   In 2015, a person with __________ earned an average of __________/year.

Fill in the blanks with the type of education and the expected average salary. 
Make sure to use correct grammar in your printed statement. For help, refer to the findings above.
   In 2015, a person with a Bachelor's degree earned an average of $59,124/year.

TIP: To print out the average salary with commas (i.e. 59,124), use the toLocaleString() method and pass it the locale "en-US". For example, salary.toLocaleString("en-US").

TIP: Make sure to test your code with different values. For example,

If education equals "an Associate's degree", then In 2015, a person with an Associate's degree earned an average of $41,496/year. should be printed to the console.
*/

/*
 * Programming Quiz: Back to School
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = 'Associates degree';

// set the value of this based on a person's education
var salary;

switch(education) {
  case 'no high school diploma'
  :  salary = 25636;
    break;
  case 'high school diploma'
  :  salary = 35256;
    break;
  case 'Associates degree'
  :  salary = 41496;
    break;
  case 'Bachelors degree' :  
    salary = 59124;
    break;
  case 'Masters degree'
  :  salary = 69732;
    break;
  case 'Professional degree'
  :  salary = 89960;
    break;  
  case 'Doctoral degree'
  :  salary = 84396;
    break ;

}

console.log("In 2015, a person with " + education + " earned an average of " + salary.toLocaleString("en-US") + "/year" );



/* Loop through the numbers 1 to 100
   If the number is divisible by 3, print "Fizz"
   If the number is divisible by 5, print "Buzz"
   If the number is divisible by both 3 and 5, print "FizzBuzz"
   If the number is not divisible by 3 or 5, print the number

TIP: A number x is divisible by a number y if the answer to x / y has a remainder of 0. For example, 10 is divisible by 2 because 10 / 2 = 5 with no remainder. You can check if a number is divisible by another number by checking if x % y === 0.

Directions:
Write a while loop that:

Loop through the numbers 1 to 50
   If the number is divisible by 3, print "Julia"
   If the number is divisible by 5, print "James"
   If the number is divisible by 3 and 5, print "JuliaJames"
   If the number is not divisible by 3 or 5, print the number
*/
//Programming Quiz: JuliaJames

var x = 1;

while (x<=50) {
  if ((x % 3 === 0) && (x % 5 === 0)) {
    console.log("JuliaJames");
  }
  else if (x % 3 === 0) {
    console.log("Julia");
  }
  else if (x % 5 === 0) {
    console.log("James")
  }
  else {
    console.log(x); 
  }
  x++;
}


/*
Directions:
Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.

   99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
   98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
   ...
   2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
   1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
Some Notes:
1) Note the pluralization of the word "bottle" when you go from 2 bottles to 1 bottle.
2) Your text editor may try to autocorrect your ellipses (...) to the ellipses character (…). Do not use the ellipses character for this quiz; use three consecutive periods instead.
*/

/*
 * Programming Quiz: 99 Bottles of Juice
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".

 */
var num = 99;

while ( num >= 1) {
  if (num > 2) {
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
  } 
  else if (num === 2) {
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num-1) + " bottle of juice on the wall!");
  } 
  else {
    console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num-1) + " bottles of juice on the wall!");
  }
    // print lyrics using num
    // don't forget to check pluralization on the last line!
  num = num - 1;
}


/*
NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

   - Orbiter transfers from ground to internal power (T-50 seconds)
   - Ground launch sequencer is go for auto sequence start (T-31 seconds)
   - Activate launch pad sound suppression system (T-16 seconds)
   - Activate main engine hydrogen burnoff system (T-10 seconds)
   - Main engine start (T-6 seconds)
   - Solid rocket booster ignition and liftoff! (T-0 seconds)

NOTE: "T-50 seconds" read as "T-minus 50 seconds".

Directions:
Write a while loop that counts down from 60 seconds and:
   - If there's a task being completed, it prints out the task
   - If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.

Your Code:
Your output should look like the following:
   T-60 seconds
   T-59 seconds
   T-58 seconds
   ...
   T-51 seconds
   Orbiter transfers from ground to internal power
   T-49 seconds
   ...
   T-3 seconds
   T-2 seconds
   T-1 seconds
   Solid rocket booster ignition and liftoff!
*/
/*
 * Programming Quiz: Countdown, Liftoff!
 * 
 * Using a while loop, print out the countdown output above.
 */

var time = 60 

while(time >= 0) {
  if(time === 50) {
    console.log("Orbiter transfers from ground to internal power (T-50 seconds)");
  } else if (time === 31) {
    console.log("Ground launch sequencer is go for auto sequence start (T-31 seconds)");
  } else if (time === 16) {
    console.log("Activate launch pad sound suppression system (T-16 seconds)");
  } else if (time === 10) {
      console.log("Activate main engine hydrogen burnoff system (T-10 seconds)");
  } else if (time === 6) {
      console.log("Main engine start (T-6 seconds)");
  } else if (time === 0) {
      console.log("Solid rocket booster ignition and liftoff! (T-0 seconds)");
  } else {
    console.log("t-" + time + "seconds");
  }
  time = time - 1;
}


/*
Theater seats often display a row and seat number to help theatergoers find their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for loop to print out all of the different seat combinations in the theater.

Example output for row-seat information: output each row and seat number on a separate line
   0-0
   0-1
   0-2
   ...
   25-97
   25-98
   25-99
*/
/*
 * Programming Quiz: Find my Seat
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

for(var row = 0; row <=25; row++) {
  for (var seat = 0; seat <= 99; seat++) {
    console.log(row + "-" + seat);
  }
}



/*
Directions:
Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

TIP: You might need a loop to solve this!

Here's an example of the output and how to call the function that you will write:

console.log(laugh(2));
Prints: "haha!"
*/

function laugh(num) {
  var ha = "";
  for (var i = 0; i < num; i++) {
    ha = ha + "ha";
  }
  return(ha + "!");
}
console.log(laugh(3));



/*
Directions:
For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle.

You will need to call this makeLine() function in buildTriangle().

This will be the most complicated program you've written yet, so take some time thinking through the problem before diving into the code. What tools will you need from your JavaScript tool belt? Professionals plan out their code before writing anything. Think through the steps your code will need to take and write them down in order. Then go through your list and convert each step into actual code. Good luck!
*/

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + '\n';
}

// your code goes here.  Make sure you call makeLine() in your own code.

function buildTriangle(width) {
var triangle = "";
for (var i = 1; i <= width; i++) {
  triangle += makeLine(i)
}
return triangle + '\n';
}





// test your code by uncommenting the following line
console.log(buildTriangle(10));


/*
Directions:
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
   Returns: hahaha!
*/

var laugh = function(x){
  var ha = "";
  for(let i = 0; i < x; i++) {
    ha += "ha";
  }

  return ha + "!";
}
  
  /* finish the function expression */

console.log(laugh(10)); 



// Directions:
// Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:

// cry();
//    Returns: boohoo!

var cry = function crying() {
  return 'boohoo!';
}
console.log(cry());



/*
Directions:
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("dead inside", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am dead inside, haha!"
*/

// don't change this code
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes below here
// call the emotions function here and pass in an inline function expression

emotions("sad", function upset(x){
var cry = "";
 for(var i = 0; i < x; i++){
  cry += "ha";
 }
return cry + "!";
});
