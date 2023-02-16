"use strict";
/* Q27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */
let alien = {
    color: "green"
};
if (alien.color === "green") {
    console.log("The player earned 5 points.");
}
else if (alien.color === "yellow") {
    console.log("The player earned 10 points.");
}
else if (alien.color === "red") {
    console.log("The player earned 15 points.");
}
;
alien.color = "yellow";
if (alien.color === "green") {
    console.log("The player earned 5 points.");
}
else if (alien.color === "yellow") {
    console.log("The player earned 10 points.");
}
else if (alien.color === "red") {
    console.log("The player earned 15 points.");
}
;
alien.color = "red";
if (alien.color === "green") {
    console.log("The player earned 5 points.");
}
else if (alien.color === "yellow") {
    console.log("The player earned 10 points.");
}
else if (alien.color === "red") {
    console.log("The player earned 15 points.");
}
;
