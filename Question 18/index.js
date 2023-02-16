"use strict";
/* Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
// Slice method is used to create a new array
let favouritePlaces = ["Abbottabad", "Lahore", "Islamabad", "Peshawar", "Balochistan"];
// Print your array in its original order.
console.log(`Original order of the array ${favouritePlaces}`);
//Print your array in alphabetical order without modifying the actual list.
let sortPlaces = favouritePlaces.slice().sort();
console.log(`Alphabetical order of the array ${sortPlaces}`);
//Show that your array is still in its original order by printing it.
console.log(`Order After sorting the array ${favouritePlaces}`);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Reverse Alphabetical order of the array ${sortPlaces.reverse()}`);
// Show that your array is still in its original order by printing it again.
console.log(`Order After sorting the array ${favouritePlaces}`);
// Reverse the order of your list. Print the array to show that its order has changed.
let reversedOrder = favouritePlaces.reverse();
console.log(`Reversed order of the array ${reversedOrder}`);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`Original order of the array after reverse ${reversedOrder.reverse()}`);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`Alphabetical order of the array ${sortPlaces}`);
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. 
console.log(`Reverse Alphabetical order of the array ${sortPlaces.reverse()}`);
