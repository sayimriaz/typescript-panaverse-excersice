"use strict";
/* 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array” */
let nameArray = ["Sayim"];
let fName = "Sayim";
let age = 18;
let favColour = "Red";
let isStudying = true;
let favCar = "Aqua";
// Tests for equality and inequality with strings
console.log(fName != "Sayim");
// Tests using the lower case function
console.log(fName == "sayim");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(age == 18);
console.log(age < 19);
console.log(age > 19);
// Tests using "and" and "or" operators
// Using "and" operator
console.log(age > 3 && age < 19);
// Using "or" operator
console.log(age > 3 || age < 5); // true, first condition is true
// Test whether an item is in a array
console.log(nameArray.includes("Sayim"));
// Test whether an item is not in a array”
console.log(nameArray.includes("Ali"));
