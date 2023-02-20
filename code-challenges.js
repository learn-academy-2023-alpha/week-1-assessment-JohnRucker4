// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:  
// Create declarations and parameters 
// Create if statement, using .length and greater symbol that will compare the two strings
// Create else if statement, using .length and greater symbol that will compare the two strings if the opposite were true
// Run the function using console.log to verify proper returns

// const fruit1 = "apple"
// const fruit2 = "banana"

// const longerFood = (fruit1, fruit2) => {
//     if(fruit1.length > fruit2.length)
//         return `${fruit1}`
//     else if(fruit2.length > fruit1.length)
//         return `${fruit2}`
    
//     }
// console.log(longerFood(fruit1 , fruit2))

// // // Expected outcome: "banana"

// const fruit3 = "cherry"
// const fruit4 = "kiwi"

// const foodLonger = (fruit3, fruit4) => {
//     if(fruit3.length > fruit4.length)
//         return `${fruit3}`
//     else if(fruit4.length > fruit3.length)
//         return `${fruit4}`
// }
// console.log(foodLonger(fruit3, fruit4))

// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// Create declarations and parameters, where temp is the number as it relates to 212 degrees F
// Create if, else if statements along with greater/lesser/strictly equal symbols to determine below/at/boiling temps based on variables given
// Run the function using console.log to verify accuracy of function


// const temp1 = 42
// const temp2 = 350
// const temp3 = 212

// const boilingPoint = (temp) => {
//     if(temp < 212)
//         return `${temp} is below boiling point.`
//     else if(temp > 212)
//         return`${temp} is above boiling point.`
//     else if(temp === 212)
//         return `${temp} is at boiling point.`
// }
// console.log(boilingPoint(temp1))
// console.log(boilingPoint(temp2))
// console.log(boilingPoint(temp3))
//     42 is below boiling point.
//     350 is above boiling point.
//     212 is at boiling point.
// Expected output: "42 is below boiling point"
// Expected output: "350 is above boiling point"
// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Create declarations of Padres World Series runs as arrays
// Create concatentation of array variables
// Run using console.log with .length to determine length of combined arrays

// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// const padres1984And1998WSRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

// console.log(padres1984And1998WSRuns.length)
// 9
// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// In console.log, use use Mutators to modify output
// Use .split to turn string into array
// Use .reverse to reverse array
// Use .join to combine elements in array
// Run console.log with .split("").reverse("").join("")

// const currentCohort = "Alpha 2023"

// console.log(currentCohort.split("").reverse("").join(""))
// 3202 ahplA
// Expected output: "3202 ahplA"
// *Feedback request* "I know that I need to restructure the data type in the declared variable with .split.  I need a little more clarification on the 'why'.  Is it because I need to change the string into an array first in order for .reverse to be considered a function?"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// In console.log, use Accessor .lastindexof() to return the last index of variables given
// Run console.log to verify values

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42

// console.log(myNumbers.lastIndexOf(givenValue1))
// 7
// Expected output: 7

// const givenValue2 = 10
// console.log(myNumbers.lastIndexOf(givenValue2))
// 8
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// In console.log, use Mutators to arrange the elements of the array
// Use .sort to arrange elements in ascending order
// Use .reverse to arrange elements in descending order
// Run console.log to verify descending order array elements

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]

// console.log(sanDiegoSummerTemperatures.sort().reverse())
// 82, 80, 79, 77, 76, 73, 72
// Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// console.log(sanDiegoWinterTemperatures.sort().reverse())
// 68, 67, 66, 66, 62, 59, 59
// Expected output: [68, 67, 66, 66, 62, 59, 59]
