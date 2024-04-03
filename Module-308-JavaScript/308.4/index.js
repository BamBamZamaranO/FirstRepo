const csvString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
//Part 2
csvString.split("\n");
let rows = csvString.split("\n");
// console.log(rows);
let arrayOfRows = [];
for (let i = 0; i < rows.length; i++) {
  let column = rows[i].split(",");
  arrayOfRows.push(column);
}
// arrayOfRows[0].push("Marital Status");
let row_length = arrayOfRows[0].length;

for (let i = 0; i < arrayOfRows.length; i++) { // Want the length of all the arrays to = the first array
  arrayOfRows[i].length = row_length;
}
// console.log(arrayOfRows);


let arrayOfObjects = [] // create an empty array to push objects inside it
for (let i = 1; i < arrayOfRows.length; i++) { // iterate the outer array 
    let object = {} // create empty object
    arrayOfRows[i].forEach((value,j) => { // iterate each row within outer array
        object[arrayOfRows[0][j].toLowerCase()] = value // giving each element inside of the row a key value pair
    }) 
    console.log(object)
    arrayOfObjects.push(object)
}
console.log(arrayOfObjects)

// //Part 5
// let csvStr = ""
// for (let i = 0; i < arrayOfObjects.length; i++) {
//   csvStr += arrayOfObjects[i].id + "," + arrayOfObjects[i].name + "," + arrayOfObjects[i].occupation + "," + arrayOfObjects[i].age
// }
// console.log(csvStr)