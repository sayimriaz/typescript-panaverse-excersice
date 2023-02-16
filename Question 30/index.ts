/* Q30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */

let usernames: string[] = ["admin", "Sayim", "Ali", "Zaid", "Ubaid"];

/* usernames.forEach(function(username)
{
    if (username === "admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }else {
        console.log(`Hello ${username}, thank you for logging in again.`)
    }
}); */

// fat arrow indicates function

// foreach loops access through everyitem in the array and pass it in the giver object for example we are looping through every object in an array and passing that value in username variable.

usernames.forEach((username) =>
{
    if (username === "admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }else {
        console.log(`Hello ${username}, thank you for logging in again.`)
    }
});
