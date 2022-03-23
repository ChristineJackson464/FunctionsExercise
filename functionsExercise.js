// Functions Exercise:
//! VERY Difficult Exercise for me: NEED TO REVIEW: Possibly one-on-one w/ JF

// 1. Create a declaration function called fozzieBear that displays the string "Wocka Wocka!" in the console/terminal when the function is run/executed. Run/execute the function.
function fozzieBear () {
    console.log("Wocka Wocka!");
};
fozzieBear();
// DISPLAY: Wocka Wocka!


// 2. Create another declaration function named beaker that has a parameter named speak. Using multiple console logs in the function, have whatever is passed as an argument display 4 times in the console/terminal. Finally, run/execute the function and pass "Meep" as the argument.
function beaker (speak) {
    console.log("Meep", "Meep", "Meep", "Meep");
}
beaker ();
// DISPLAY: Meep Meep Meep Meep


// 3. Create a function called muppetShow that has two parameters named a and b. Inside the function create a conditional statement (A.K.A. If statement) where if the string argument "Muppet" is passed in for "a" AND the string argument "Show" is passed in for "b", then "It's time to play the music. It's time to light the lights." displays in the console/terminal when the function is run/executed. (NOTE: If anything other than "Muppet" and "Show" are passed in as arguments for a and b, then the function should display nothing when run/executed)
function muppetShow(a, b) {
    if (a=== `Muppet` && b=== `Show`) {
        console.log(`It's time to play the music. It's time to light the lights.`)
        };
    };
    muppetShow(`Muppet`, `Show`);
// DISPLAY: It's time to play the music. It's time to light the lights.

// 4. Create another declaration function called kermit that RETURNS the following string value "Kermit The Frog" when it is run/executed

function kermit() {
    console.log (`Kermit The Frog`);
}
kermit();
// DISPLAY: Kermit The Frog
/*
        OR
        function kermit(quote = "Kermit the Frog") {
            console.log ("Kermit the Frog");
        }
        kermit();
*/

// 5. Create another declaration function called muppetShowSeasons that has a parameter named seasons. In the function create a conditional statement where if the number argument passed for seasons is 5 have the function RETURN the boolean value of true. Also, if it is NOT 5 have the function RETURN the boolean value of false.
function muppetShowSeasons(seasons) {
    if (seasons === 5) {
        return true;
    } else {
        return false;
    }
};
console.log (muppetShowSeasons(5)); // true
console.log (muppetShowSeasons(3)); // false


// 6. Create a function expression that is a const variable called manOrMuppet which displays the following string value when the function is run/executed "Am I a man or am I a Muppet?".
const manOrMuppet = function () {
    console.log ("Am I a man or am I a Muppet?")
};
manOrMuppet();
// DISPLAY: Am I a man or am I a Muppet?


// 7. Create an Arrow function called rainbowConnection which RETURNS a string value of "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me" (Do this without using brackets "{}" or the return keyword)
rainbowConnection = () => 
console.log ("Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me.");
rainbowConnection();
// DISPLAY: Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me.


//! QUESTION 8 & 9:
/* Per Jamie F:
Scope = where you can access the variable
If a variable is within a function it is only accessible or able to use within the function. Therefore within the scope of the function. Particular attention should be paid to this when you start nesting functions.
If the variable is outside in the main document, it is accessible within the entire document. Therefore globally scoped.
*/

// 8. QUESTION: If a let or const variable is created/declared inside a function, loop, or conditional can the value of it be accessed outside of the function, loop, or conditional? (Just use a comment to answer yes or no)
        // No: Because the variable lies ONLY within the scope of the function and therefore cannot be used/accessed outside of it

// 9. QUESTION: If a let or const variable is created outside the scope of a function and the value of the variable is updated inside a function, then assuming the function has been run, could the updated value of the variable be accessed outside of the function (Again, just use a comment to answer yes or no)
        // Yes: Because the variable lies outside of the function and therefore is scoped to the entire JS document, or Globally Scoped

// BONUS…

// B-10a. Create a const variable called newMuppetMovies and set the value to an array with the following values: "The Muppets" and "Muppets Most Wanted"
const newMuppetMovies = [
    "The Muppets",
    "Muppets Most Wanted"
];

// B-10b. Using the Map method on the newMuppetMovies array, create an anonymous declaration function to pass as an argument for the Map method that changes the letters of each array item to uppercase. Also, set the returned value to a new const variable called upperMovies.
const upperMovies = newMuppetMovies.map (function(x){
    return x.toUpperCase();
});
console.log (upperMovies);
// DISPLAY: [ 'THE MUPPETS', 'MUPPETS MOST WANTED' ]


// B-11a. Create a const variable called oldMuppetMovies and set the value to an array with the following values: "The Muppet Movie", "The Muppets Take Manhattan", "The Great Muppet Caper", "The Muppet Christmas Carol", "Muppet Treasure Island" and "Muppets From Space"
const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
];

// B-11b. Using the Filter array method on the oldMuppetMovies array, create an anonymous arrow function to pass as an argument for the Filter method that will return/create a new array with only the "The Great Muppet Caper" and "Muppet Treasure Island" items in it. Also, set the value of the new array that is returned/created to a const variable called twoMovies. (HINT: The length property)
const a = oldMuppetMovies.filter (twoMovies => twoMovies.length === 22);
console.log (a);
// DISPLAY: [ 'The Great Muppet Caper', 'Muppet Treasure Island' ]


// B-12a. Create a const variable called charactersOne and set the value to an array with the following values: "Statler" & "Waldorf"
const charactersOne = [
    "Statler",
    "Waldorf"
];

// B-12b. Create a const variable called charactersTwo and set the value to an array with the following values: "The Swedish Chef", "Animal", and "Rowlf"
const charactersTwo = [
    "The Swedish Chef",
    "Animal",
    "Rowlf"
];

// B-12c. Create an arrow function called randomMuppet with a parameter called characters that accepts an array of strings for an argument. Inside the function use Math.random() and a console log to have the value of a random item (AKA Character) in the array that is passed in display in the console/terminal (NOTE: You will need more than just Math.random and a console log to complete this)
randomMuppet = (characters) => {
    console.log (`${characters[Math.floor (Math.random () * characters.length)]}`)
} ;

// B-12d. Run/execute the randomMuppet function twice (Passing charactersOne as the argument for the first one and charactersTwo for the second)
randomMuppet(charactersOne); // DISPLAY:  Waldorf
randomMuppet(charactersTwo); // DISPLAY:  The Swedish Chef


//! Did not complete Bonus 13, Did not understand even with review
//! NEED ASSISTANCE
// B-13. Create an arrow function called caps with a parameter called string that accepts a string argument and RETURNS a new string value with every other letter capitalized starting with the first letter. For an extra bonus have the function set up so that it ignores spaces (For Example it would change "Hello World" to "HeLlO wOrLd" instead of "HeLlO WoRlD").
//! The Following would NOT RUN:
/*
caps = string => {
    let char = string.toLowerCase(.split (" "));
    for (i=0; i<char.length; i+= 2()) {
        char [i] = char[i].toUpperCase();
    } 
    console.log (char.join (" "));
}
caps ("Hello World");
*/
//! Incomplete Answer:
/* OR
caps = (string) => {
    return string.split (``).map ((v,i) =>)
}
*/
//! Incorrect Answer as Well...
/* 
caps = (string) => {
    let newString = "";
    for (i=0; i<string.length; i++) {
        if (i % 2 === 0) {
            newString += string[i].toUpperCase();
        } else {
            newString += string[i].toLowerCase();
        }
        return newString;
    }
};
console.log (caps("Hello World"));
*/


// When finished, create a repository in the “FunctionsExercise” Folder as well as on GitHub. Add and commit everything in the FunctionsExercise folder and push it up to your GitHub repository. Then paste the link to your GitHub repository page in the form.


