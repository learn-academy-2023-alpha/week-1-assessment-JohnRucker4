// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: Indigo will be added to the end of the array in the output.
// b) Verify and explain: While 'indigo' was added to the end of the array, the output was index at '5'.  The output is the length of the array.  If I run console.log(colors), the output should be the array with 'indigo' added at the end.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: The output will be 10.
// b) Verify and explain: The output was 10.  Length measured the number of characters (including the space) in the string.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: The output will be 'o'.
// b) Verify and explain: The zero-index of 4 returned 'o' from the string, starting from the first character.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: The output will be "Ruby".
// b) Verify and explain: Because the declared variable 'index' equals '1', the zero-index of the 'languages' array is "Ruby".

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: The output will be .toUpperCase is not function.
// b) Verify and explain: Since weekendDays is an array, and .toUpperCase functions for strings, the output shows .toUpperCase is not a function.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: The output will be 4.
// b) Verify and explain: The output came bck as 'number'.  This is because the 'type of' operator describes the datatype to be returned.  The length of the index is 4.  That 'type of' datatype is a 'number'.
