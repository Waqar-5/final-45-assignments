// Question-3
// Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Asad Ali"
console.log(personName.toUpperCase());

console.log("===================");

console.log(personName.toLowerCase());

console.log("===========================");

console.log(personName.replace(/\b\w/g,c=> c.toUpperCase()));



console.log("===========================");


// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// let personName1: string = ("Albert Einstein");
// console.log(personName1,"once said, “A person who never made a mistake never tried anything new.”");
 
console.log("=====================");
let Quote: string = ("A person who never made a mistake never tried anything new.");
let Author: string = ("Albert Einstein");
console.log(`${Author} once said, “${Quote}”`);

