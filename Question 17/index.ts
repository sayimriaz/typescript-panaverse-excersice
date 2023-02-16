/* 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */

let invitedFriends: string[] = ["Ali", "Umer", "Sayim"];

// List out each freinds in the given array

for(let invite of invitedFriends){
    console.log(`I would like to invite ${invite} for dinner`);
};

// Find out the index of absentFreind

let absentFreind: string = "Umer";
let indexOfAbsentFriend = invitedFriends.indexOf(absentFreind);

// Remove the Absent friend from the array the 1 represent 1 element

if (indexOfAbsentFriend >= 0){
    invitedFriends.splice(indexOfAbsentFriend, 1);
    console.log(`${absentFreind} is unable to attend the party.`);
}else{
    console.log(`The name is not in the guest list`);
};

// Add Ubaid In the Given Array

invitedFriends.push("Ubaid");

console.log(`The new Guest list is:`)

// Print Out All the updated friends in the array

for(let invite of invitedFriends){
    console.log(`${invite}`);
};

for(let invite of invitedFriends){
    console.log(`I would like to invite ${invite} for dinner`);
};

console.log(`I Have found a Bigger Dinning Table so I would Like to invite more people`);

// Declare 2 New Guests

let newGuest: string = "Zaryab";
let newGuest2: string = "Zaid";

// Unshift method adds the item in start of array and Push method add the item at the end of the array

invitedFriends.unshift(newGuest);

// Find the middle index

let middleIndex = invitedFriends.length / 2;

// Finded the middle index 0 item and added new guest 2

invitedFriends.splice(middleIndex, 0, newGuest2);

// Invited all the remaining friends

for(let invite of invitedFriends){
    console.log(`I would like to invite ${invite} for dinner`);
};

console.log(`you can invite only two people for dinner.`);

// Remove guests from the list one at a time until only two names remain we used while condition because we dont know the starting and ending point. like we dont know how many items will it remove.

while(invitedFriends.length > 2){
    let removedFriends = invitedFriends.pop();
    console.log(`Sorry, ${removedFriends} you cant be invited.`);
};

// Print a message to each of the two people still on your list

console.log(`${invitedFriends[0]} you guys are still invited`);
console.log(`${invitedFriends[1]} you guys are still invited`);

// Remove the last two names from the list and print it to confirm it's empty

while(invitedFriends.length > 0){
    invitedFriends.pop();
};

console.log(`${invitedFriends}`)