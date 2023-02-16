/* Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list. */

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



