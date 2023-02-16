/* Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

let invitedFriends: string[] = ["Ali", "Umer", "Sayim"];

for(let invite of invitedFriends){
    console.log(`I would like to invite ${invite} for dinner`);
};

let absentFreind: string = "Umer";
let indexOfAbsentFriend = invitedFriends.indexOf(absentFreind);

if (indexOfAbsentFriend >= 0){
    invitedFriends.splice(indexOfAbsentFriend, 1);
    console.log(`${absentFreind} is unable to attend the party.`);
}else{
    console.log(`The name is not in the guest list`);
};

invitedFriends.push("Ubaid");

console.log(`The new Guest list is:`)

for(let invite of invitedFriends){
    console.log(`${invite}`);
};

for(let invite of invitedFriends){
    console.log(`I would like to invite ${invite} for dinner`);
};

console.log(`I Have found a Bigger Dinning Table so I would Like to invite more people`);

let newGuest: string = "Zaryab";
let newGuest2: string = "Zaid";

invitedFriends.unshift(newGuest);

let middleIndex = invitedFriends.length / 2;

invitedFriends.splice(middleIndex, 0, newGuest2);

for(let invite of invitedFriends){
    console.log(`I would like to invite ${invite} for dinner`);
};