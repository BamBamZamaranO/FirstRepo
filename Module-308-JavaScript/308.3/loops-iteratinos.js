// let i = 10

// while (i >= 0) {
//     console.log(i);
//     i--;
// }

// Log integers in multiples of 3 as long as they are less than 35.

// let i = 5

// while (i < 100) {
//     console.log(i);
//     i+=5;
// }

// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.

// let i = 2

// while (i < 20) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// const cookieCost = 4; // Cost of the cookie in dollars
// const amountPaid = 10; // Amount Romeo paid in dollars
// let change = amountPaid - cookieCost; // Calculate the change in dollars

// // Calculate the number of quarters in the change
// let quarters = 0;
// while (change >= 0.25) {
//     quarters++;
//     change -= 0.25;
// }

// console.log("Romeo received", quarters, "quarters as change.");
// i = 0

// while (i < 100) {
//     i += 10;
//     console.log(i);
// }

// const cookieCost = 4;
// const amountPaid = 10;
// let change = amountPaid - cookieCost;

// let quarters = 0;
// while (change >= 0.25) {
//     quarters++;
//     change -= 0.25;
// }

// console.log("Romeo received", quarters, "quarters as change.");

// n = 0

// while (n < 100) {
//     n += 10;
//     console.log(n);
// }

// i = 500

// while (i <= 800) {
//    console.log(i);
//    i++;
// }

// ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26

// const iD = cell1
// const name_ = cell2
// const occupation = cell3
// const age = cell4

// const bruce = [iD, name_, occupation, age]
// const bob = [iD, name_, occupation, age]
// const blaine0 = [iD, name_, occupation, age]
// const bill = [iD, name_, occupation, age]
// let i = bruce
// // console.log(cell1, cell2, cell3, cell4)

// for () {
//   for (i) {

//   }
// }

// Sample CSV string
const csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n";

// // Function to parse CSV data
// function parseCSV(csvString) {  //create an operation (function) to apply some data (input)
//     // Initialize variables to STORE cell data
//     let cell1 = "", cell2 = "", cell3 = "", cell4 = "";     // Create 4 empty containers to store individual characters
//     let currentCell = 1;    // To track the current container being filled

//     // Loop through each character in the CSV string
//     for (let i = 0; i < csvString.length; i++) {
//         if (csvString[i] === ",") { // Check for comma delimiter
//             currentCell++;  // Move to the next cell
//             continue; // skip the current loop and continue to next loop
//         }

//         // Check for line break (\n)
//         else if (csvString[i] === "\n") { //or else if the loop comes across a line break Log the row data

//             console.log("1-" + cell1, "2-" + cell2, "3-" + cell3, "4-" + cell4); // print these 4 containers
//             cell1 = cell2 = cell3 = cell4 = ""; // Reset cell variables for the next row
//             currentCell = 1; // Signal starting over at the first container
//             continue; // skip the current loop and continue to next loop
//         }
//         // Check for carriage return (\r)
//         else if (csvString[i] === "\r") { // Skip carriage return and continue
//             continue; // skip the current loop and continue to next loop
//         }
//         // Store the character in the appropriate cell
//         switch (currentCell) {
//             case 1:
//                 cell1 += csvString[i];
//                 break;
//             case 2:
//                 cell2 += csvString[i];
//                 break;
//             case 3:
//                 cell3 += csvString[i];
//                 break;
//             case 4:
//                 cell4 += csvString[i];
//                 break;
//         }
//     }
// }

// // Call the function with the provided CSV data
// parseCSV(csvData);

const csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
csvString.split("\n");

let rows = csvString.split("\n");
console.log(rows);

let arrayOfRows = [];
for (let i = 0; i < rows.length; i++) {
  let column = rows[i].split(",");
  arrayOfRows.push(column);
}
// arrayOfRows[0].push("Marital Status");
let row_length = arrayOfRows[0].length;

for (let i = 0; i < arrayOfRows.length; i++) {
  // Want the length of all the arrays to = the first array
  arrayOfRows[i].length = row_length;
}
console.log(arrayOfRows);

//
let arrayOfObjects = []; // create an empty array to push objects inside it
for (let i = 1; i < arrayOfRows.length; i++) {
  // iterate the outer array
  let object = {}; // create empty object
  arrayOfRows[i].forEach((value, j) => {
    // iterate each row within outer array
    object[arrayOfRows[0][j].toLowerCase()] = value; // giving each element inside of the row a key value pair
  });
  console.log(object);
  arrayOfObjects.push(object);
}
console.log(arrayOfObjects);

let csvStr = ""
for (let i = 0; i < arrayOfObjects.length; i++) {
    csvStr += arrayOfObjects[i].id+"," + arrayOfObjects[i].name + "," + arrayOfObjects[i].occupation + "," + arrayOfObjects.age
}
console.log(csvStr)