// 1. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// var userName:string = "Qasim";
// var message1:string = `"Hello ${userName}, would you like to learn some TypeScript today?"`;  // I used Back-tick(``) and notation(${}) to insert a variable value inside the string.
// console.log(message1);
// 2. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// var personName:string = "Usman Yousaf";
// console.log(personName.toLowerCase())
// console.log(personName.toUpperCase())
// console.log(personName)
// 3. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//    Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// var authorName:string = "Sir Francis Bacon";
// var quote1:string = "Knowledge is power.";
// var saying:string = `${authorName} once said, "${quote1}"`;
// console.log(saying)
// 4. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famous_person:string = "Albert Einstein";
// let message_fp:string = `${famous_person} once said, "Life is like riding a bicycle. To keep your balance, you must keep moving."`
// console.log(message_fp)
// 5. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// let person_name:string = "\tUsman\n";
// console.log(person_name)
// console.log(person_name.trim())
// 6. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// var addition_of_nums:number = 6 + 2;
// var subtraction_of_nums:number = 12495 - 12487;
// var multiplication_of_nums:number = 2 * 4;
// var division_of_nums:number = 104/13;
// console.log("Addition: ", addition_of_nums);
// console.log("Subtraction: ", subtraction_of_nums);
// console.log("Multiplication: ", multiplication_of_nums);
// console.log("Division: ", division_of_nums)
// 7. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let fav_num:number = 9;
// let message2:string = `My Favorite Number is ${fav_num}.`;
// console.log(message2)
// 8. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let names:string[] = ['Ahmad', 'Basit', 'Qasim', 'Mohsin', 'Osaf'];
// for(let i=0; i < names.length; i++){
//     console.log(names[i]);
// }
// 9. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// let names:string[] = ['Ahmad', 'Basit', 'Qasim', 'Mohsin', 'Osaf'];
// for(let i=0; i < names.length; i++){
//     let message:string = `Hello ${names[i]}, Good to see you.`;
//     console.log(message)
// }
// 10. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let fav_mode_of_transport:string = "Car";
// let why_i_like_this_mode:string[] = [`I like a ${fav_mode_of_transport} model of Audi`, `That ${fav_mode_of_transport} model is R8`, `Traveling in a ${fav_mode_of_transport} is comfortable as compared to motorcycle.`, `But ${fav_mode_of_transport}s are really expansive in my countary.`];
// for(let i=0; i < why_i_like_this_mode.length; i++){
//     console.log(why_i_like_this_mode[i]);
// }
// 11. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guest_list:string[] = ["Osaf", "Ahmad", "Mohsin", "Basit", "Umer"];
// for(let i=0; i < guest_list.length; i++){
//     let invitation:string = `Hi ${guest_list[i]}, I would like to invite You for a dinner togather.`
//     console.log(invitation)
// }
// 12. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
/*
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */
// let guest_list:string[] = ["Osaf", "Ahmad", "Mohsin", "Basit", "Umer"];
// console.log(`${guest_list[guest_list.length-1]} can't make it for the dinner.`)
// guest_list.pop()
// guest_list.push("Sanan")
// for(let i=0; i < guest_list.length; i++){
//     let invitation:string = `Hi ${guest_list[i]}, I would like to invite You for a dinner togather.`
//     console.log(invitation)
// }
// 13. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
/*
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */
// let guest_list:string[] = ["Osaf", "Ahmad", "Mohsin", "Basit", "Umer"];
// guest_list.pop()
// guest_list.push("Sanan")
// console.log("Guys I have found a better place for dinner and the Table is bigger, I am Going to invite three more friends.")
// guest_list.unshift("Kamran")
// guest_list.splice(3,0,"Umair","Qasim")  // adds at index 3, removes 0, adds 2 elements.
// for(let i=0; i < guest_list.length; i++){
//     let invitation:string = `Hi ${guest_list[i]}, I would like to invite You for a dinner togather.`
//     console.log(invitation)
// }
// 14. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
/*
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
// let guest_list:string[] = ["Osaf", "Ahmad", "Mohsin", "Basit", "Umer"];
// guest_list.pop()
// guest_list.push("Sanan")
// guest_list.unshift("Kamran")
// guest_list.splice(3,0,"Umair","Qasim")  // adds at index 3, removes 0, adds 2 elements.
// console.log("Change of Plans Table won't be available and I only can host two people.")
// /* this loop has unexpected results ask teacher about this.
// With this method the length of the array updates in real-time. Once the length of the array becomes equal to the  i variable of loop the loop stops.
// In this case the length of array becomes 4 after 4 iterations and the loop stops after poping 4 names from the array.
// for(let i=0; i < guest_list.length; i++){
//     console.log(`Sorry ${guest_list.pop()}, You can't come to dinner.`);
// }*/
// for(let i=0; i < 6; i++){
//     console.log(`Sorry ${guest_list.pop()}, You can't come to dinner.`);
// }
// for(let i=0; i < guest_list.length; i++){
//     let invitation:string = `Mr.${guest_list[i]}, I would like to invite You for a dinner togather.`
//     console.log(invitation)
// }
// guest_list.splice(0,2)  /* removes from index 0, 2 elements. */
// console.log(guest_list)
// 15. Seeing the World: Think of at least five places in the world you’d like to visit.
/*
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
// let places:string[] = ['Japan','South Korea','Hawaii','Malaysia','Singapore'];
// console.log(places)
// let sortedList:string[] = [...places].sort();
// console.log(sortedList);
// console.log(places);
// let reverseSortedList:string[] = places.slice().sort().reverse();
// console.log(reverseSortedList)
// console.log(places)
// places.reverse()
// console.log(places)
// places.reverse()
// console.log(places)
// places.sort()
// console.log(places)
// places.reverse()
// console.log(places)
// // 16. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// let guest_list:string[] = ["Osaf", "Ahmad", "Mohsin", "Basit", "Umer"];
// console.log(guest_list.length)
// 17. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
// let Cities:string[] = ["Tokyo","Seoul","London","Paris","Atlanta"];
// let list:string[] = [];
// for(let i = 0; i < Cities.length; i++){
//     list.push(Cities[i]);
// } 
// console.log(list)
// 18. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// type obj = {
//     name: string;
//     age: number;
//     employementStatus: boolean;
// }
// const NewObject: obj = {
//     name: 'Usman',
//     age: 23,
//     employementStatus: false 
// }
// console.log('Age: ', NewObject.age)
// 19. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// const anArray = [1, 3, 6, 8]
// var NumSum = 20 + anArray[5]
// console.log(NumSum)
// 20. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
/*
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
// let trafficLights = ["red", "yellow", "green"]
// for(let i =0; i < trafficLights.length; i++){
//     if(trafficLights[i] == 'red'){
//         console.log("First index of traficLights array is 'red' so the condition 'traficLights[1] == 'red'' I predict True")
//         console.log('Test1: ',trafficLights[i] == 'red')
//     }
//     else if(trafficLights[i] == 'yellow'){
//         console.log("Second index of traficLights array is 'yellow' so the condition 'traficLights[1] == 'yellow'' I predict True")
//         console.log('Test2: ',trafficLights[i] == 'yellow')
//     }
//     else if(trafficLights[i] == 'green'){
//         console.log("Third index of traficLights array is 'green' so the condition 'traficLights[1] == 'green'' I predict True")
//         console.log('Test3: ',trafficLights[i] == 'green')
//     }
// }
// let sumOfNumbers = 22/(11*2) + (12-2*6)/2;
// let productOfNumbers = 4 * 0.11;
// console.log("The Conditon is to check wether 'sumOfNumbers == productOfNumbers'? I predict False")
// console.log('Test4: ',!(sumOfNumbers == productOfNumbers));
// function strConcatination(str1:string,str2:string): string{
//     return str1 + str2
// }
// strConcatination("Us","man")
// console.log("this function adds to strings togather 'if output of strings 'US' and 'man' is equal to 'usman'?' I predict False")
// console.log("Test5: ", strConcatination("Us","man") == 'usman')
// console.log("If is use the method to lowerCase() on this function and the answer will become True");
// console.log("Test6: ", strConcatination("Us","man").toLocaleLowerCase() == 'usman');
// var testStr1: string = '12.99';
// console.log(testStr1);
// var testStr2 = Number(testStr1);
// console.log("What would be the type of 'testStr2' when it is assigned 'testStr1: string', and I guess the equality to be Fasle");
// console.log("Test7", typeof(testStr2) === 'string');
// let testStr3: number = parseInt(testStr1, 10);
// console.log("The value of 'testStr3' would be 13, This won't be the case so I predict False.Because it ignores the numbers after decimal.");
// console.log("Test8", testStr3 === 13);
// let testStr4: number = ~testStr1;
// console.log("The '~' is to negate the value given and then the value of '~testStr1' will be -12, but I will predict below test to be False. Because strangely ~ adds -1 to the negative value.");
// console.log("Test9", testStr4 === -12, "Value: ", testStr4);
// let testStr5: number = ~~testStr1;
// console.log("Now you must be thinking the value should become '-14' but I predict below test to be False as well.");
// console.log("Test10", testStr5 === -14, "Value: ", testStr5);
/* 21. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
var test21Str1 = "Hello World!";
var test21Str2 = "hello world!";
console.log("The test is to check if these to strinngs are equal or not, I predict False. because It test every letter and also equality is case sensitive.");
console.log("Test 21-1", test21Str1 == test21Str2);
console.log("So if we use toLowerCase() method the test output will turn True.");
console.log("Test 21-2", test21Str1.toLowerCase() === test21Str2);
var val_1 = Math.ceil(4 * 3.1);
var val_2 = Math.floor(4 * 3.1);
console.log("If 'val_1' is less than 'val_2', I would say its false not because both values are equal but because 'val_2 is greater");
console.log("Test 21-3", val_1 < val_2);
var val_3 = 13;
console.log("'val_1' is equal to 'val_3', I predict it to be true.");
console.log("Test 21-4", val_1 === val_3);
var any_val = 1324;
console.log("any number stored in 'any_val' variable according to the condition below will return true.");
if (any_val % 4 <= 4) {
    console.log("Test 21-5", any_val % 4 <= 4);
}
else {
    console.log("false");
}
var val_4 = ~~val_2;
console.log("'val_2' is not equal to 'val_4' I predict this condition to be false.");
console.log("Test 21-6", val_4 !== val_2);
console.log("'val_1' + 'val_2' times 4 and 'val_3' + 'val_4' * 4 are both equal to 100., I predict it to be true.");
console.log("Test 21-7", (val_1 + val_2) * 4 === 100 && (val_3 + val_4) * 4 === 100);
console.log("While 'val_1' + 'val_2' times 4 === 1000 or 'val_3' + 'val_4' * 4 equal to 100., I predict it to be true as well.");
console.log("Test 21-8", (val_1 + val_2) * 4 === 1000 || (val_3 + val_4) * 4 === 100);
var array_1 = ["Apples", "Peanuts", "Bananas", "Beef"];
console.log("The following function will tell if the given item is in the array, and returns true if item is available in the array.");
function findItem(item) {
    for (var i = 0; i < array_1.length; i++) {
        if (array_1[i] === item) {
            return array_1[i] === item;
        }
    }
}
console.log("Test 21-9", findItem("Candy"));
console.log("The following function will return true if give item is not avilable in the array.");
function findItem2(item, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== item) {
            return arr[i] !== item;
        }
    }
}
console.log("Test 21-10", findItem2("Candy", ["Fruits", "Meat", "Bread", "Milk", "Chocolates"]));
/* 22. Alien Colors #1: Imagine an alien was just shot down in a game.
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.) */
var alien_color = "yellow";
if (alien_color === "green") {
    console.log("Congrats! You have earn 5 points.");
}
alien_color = "green";
if (alien_color === "green") {
    console.log("Congrats! You have earn 5 points.");
}
/* 23. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block. */
var alien_color2 = "green";
if (alien_color2 === "green") {
    console.log("Congrats! You have earn 5 points.");
}
else {
    console.log("Congrats! You have earn 10 points.");
}
alien_color2 = "red";
if (alien_color2 === "green") {
    console.log("Congrats! You have earn 5 points.");
}
else {
    console.log("Congrats! You have earn 10 points.");
}
/* 24. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien. */
var alien_color3 = "green";
if (alien_color3 === "green") {
    console.log("Congrats! You have earn 5 points.");
}
else if (alien_color3 === "yellow") {
    console.log("Congrats! You have earn 10 points.");
}
else if (alien_color3 === "red") {
    console.log("Congrats! You have earn 15 points.");
}
alien_color3 = "yellow";
if (alien_color3 === "green") {
    console.log("Congrats! You have earn 5 points.");
}
else if (alien_color3 === "yellow") {
    console.log("Congrats! You have earn 10 points.");
}
else if (alien_color3 === "red") {
    console.log("Congrats! You have earn 15 points.");
}
alien_color3 = "red";
if (alien_color3 === "green") {
    console.log("Congrats! You have earn 5 points.");
}
else if (alien_color3 === "yellow") {
    console.log("Congrats! You have earn 10 points.");
}
else if (alien_color3 === "red") {
    console.log("Congrats! You have earn 15 points.");
}
/* 25. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder. */
var person_age = 23;
if (person_age < 2) {
    console.log("The person is baby.");
}
else if (person_age >= 2 && person_age < 4) {
    console.log("The person is toddler.");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("The person is kid.");
}
else if (person_age >= 13 && person_age < 20) {
    console.log("The person is teenager.");
}
else if (person_age >= 20 && person_age < 65) {
    console.log("The person is adult.");
}
else if (person_age >= 65) {
    console.log("The person is an elder.");
}
/* 26. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
var favorite_fruits = ["pomegranates", "grapes", "oranges"];
var fruit = "bananas";
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] === fruit) {
        console.log("You really like ".concat(fruit, "!"));
    }
}
;
fruit = "pomegranates";
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] === fruit) {
        console.log("You really like ".concat(fruit, "!"));
    }
}
;
fruit = "mangos";
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] === fruit) {
        console.log("You really like ".concat(fruit, "!"));
    }
}
;
fruit = "grapes";
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] === fruit) {
        console.log("You really like ".concat(fruit, "!"));
    }
}
;
fruit = "oranges";
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] === fruit) {
        console.log("You really like ".concat(fruit, "!"));
    }
}
;
/* 27. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */
var usernames = ["admin", "usman", "osaf", "ahmad", "mohsin"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log("Hello ".concat(usernames[i], ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
;
/* 28.No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */
var userList = [];
if (userList.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < userList.length; i++) {
        if (userList[i] === "admin") {
            console.log("Hello ".concat(userList[i], ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(userList[i], ", thank you for logging in again."));
        }
    }
    ;
}
/* 29. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
var current_users = ["usman", "osaf", "omar", "ahmad", "amir"];
var new_users = ["basit", "usman", "fahad", "huzaifa", "ahmad"];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i], 0)) {
        console.log("user already exists");
    }
    else {
        console.log("Name is available.");
    }
}
/* 30. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line. */
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] === 1) {
        console.log("1st");
    }
    else if (numArray[i] === 2) {
        console.log("2nd");
    }
    else if (numArray[i] === 3) {
        console.log("3rd");
    }
    else {
        console.log("".concat(numArray[i], "th"));
    }
}
/* 31. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza! */
var Pizzas = ["BBQ-chicken", "malai-boti", "peparoni"];
for (var i = 0; i < Pizzas.length; i++) {
    console.log("I like ".concat(Pizzas[i], " pizza."));
}
console.log("I really love pizza!");
/* 32. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet! */
var animals_list = ["Dog", "Cat", "Rabbits"];
for (var i = 0; i < animals_list.length; i++) {
    console.log(animals_list[i]);
    console.log("A ".concat(animals_list[i], " would make a great pet."));
}
console.log("All of these animals love to be pet and rubbed.");
console.log("Any of these animals would make a great pet.");
/* 33. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */
function make_shirt(size, message) {
    console.log("The size of the shirt is ".concat(size, " and the message on the shirt says:\n ").concat(message));
}
make_shirt("large", "I Love Coding.");
/* 34. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
function make_shirt2(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love TypeScript."; }
    console.log("The size of the shirt is ".concat(size, " and the message on the shirt says:\n ").concat(message));
}
make_shirt2();
make_shirt2("medium");
make_shirt2("xl", "Just Do It");
/* 35. Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country. */
function describe_city(city, countary) {
    if (countary === void 0) { countary = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(countary, "."));
}
describe_city("Faisalabad");
describe_city("Abottabad");
describe_city("Amsterdam", "Netherlands");
/* 36. City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */
function city_country(city, countary) {
    if (city === void 0) { city = "Faisalabad"; }
    if (countary === void 0) { countary = "Pakistan"; }
    return "".concat(city, ", ").concat(countary);
}
console.log(city_country());
console.log(city_country("Paris", "Farance"));
console.log(city_country("Oslo", "Norway"));
/* 37. Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album. */
function make_album(artist, album_title, tracks) {
    var album = {
        name: artist,
        title: album_title,
        num_of_tracks: tracks
    };
    return album;
}
;
var dictionary_1 = make_album("Justin", "Believe");
console.log(dictionary_1);
var dictionary_2 = make_album("Jhon", "Purpose");
console.log(dictionary_2);
var dictionary_3 = make_album("M2four", "Generations");
console.log(dictionary_3);
var new_dictionary = make_album("Orion", "Faded", 12);
console.log(new_dictionary);
/* 38. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array. */
var magician_names = ["Kelly", "Tony", "Harry", "Jena"];
function show_magicians(arr) {
    arr.forEach(function (val) { return console.log(val); });
}
show_magicians(magician_names);
/* 39. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified. */
var magician_names2 = ["Kelly", "Tony", "Harry", "Jena"];
function show_magicians2(arr) {
    arr.forEach(function (val) { return console.log(val); });
}
function make_great(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = "the Great ".concat(arr[i]);
    }
}
make_great(magician_names2);
show_magicians2(magician_names2);
/* 40. Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
 */
var magician_names3 = ["Kelly", "Tony", "Harry", "Jena"];
function show_magicians3(arr) {
    arr.forEach(function (val) { return console.log(val); });
}
function make_great2(arr) {
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
        new_arr.push("the Great ".concat(arr[i]));
    }
    return new_arr;
}
var seperate_array = make_great2(magician_names3);
show_magicians3(magician_names3);
show_magicians3(seperate_array);
/* 41. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered.
Call the function three times, using a different number of arguments each time. */
function sandwichMaker(arr) {
    console.log("Little Summary of your ordered sandwich:");
    arr.forEach(function (val) { return console.log(val); });
}
sandwichMaker(["bread", "eggs", "tomato", "chicken", "cheese", "mayo"]);
sandwichMaker(["bread", "beef-patty", "mayo", "cheese"]);
sandwichMaker(["bread", "butter", "chicken", "mayo", "tomato", "mustered", "salad", "beef-minced", "potato-sliced"]);
/* 42. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly. */
function carMaker(manufacturer, model, car_type, car_color) {
    var car = {
        brand: manufacturer,
        name: model,
        type: car_type,
        color: car_color,
    };
    return car;
}
;
var newCar = carMaker("Audi", "R8 coupe", "sports", "Daytona Gray");
console.log(newCar);
