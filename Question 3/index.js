"use strict";
/* Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let fName = "Sayim";
console.log(`Lowercase: ${fName.toLowerCase()}`);
console.log(`Uppercase: ${fName.toUpperCase()}`);
console.log(`Titlecase: ${fName.replace(/\b\w/g, (l) => l.toUpperCase())}`);
