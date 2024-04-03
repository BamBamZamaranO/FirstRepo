let antonio = new Object();

antonio.name = "Antonio";
antonio.age = 38;
antonio.occupation = "Software Developer";

let christian = new Object ();

christian.name = "Christian";
christian.age = 41;
christian.occupation = "Ramper"

let nofal = new Object();

nofal.name = "Nofal";
nofal.age = 46;
nofal.occupation = "Pilot";

const primos = [antonio, christian, nofal]
// console.log(primos);

// map function returns a new array with the results applied by the callback function
const names = primos.map((person) => {
    return person.name;
});


const age = primos.map((person) => {
    return person.age; 
});

const occupation = primos.map((person) => {
    return person.occupation;
});
// console.log(names, age, occupation);


// filter() Does not modify orginial array but creates new array with all elements that passed a certain test implemented by the function.
const overFourties = primos.filter((person) => {
    return person.age >= 40;
}) .map((person) => {
    return person.age;
})
// console.log(overFourties)

// reduce()  iterates over and updates an accumulator value returning a single value
const totalAge = primos.reduce((total, person) => {
    return total + person.age;
}, 0);
// console.log(totalAge);

// find() function iterates over each element and returns the element that meets the condition. If no element is satisfied >> 'undefined'
const findPrimo = primos.find((person) => { // returns undefined; don't understand why;
    return person.name === "antonio";
});
// console.log(findPrimo);

// forEach doesn't return a value nor changes existing array but allows us to iterate over the array
primos.forEach((person) => {
    // console.log(person.name);
    // console.log(person.age);
    // console.log(person.occupation);
});

// the some() will iterate over each element and returns 'true' for the whole array if any one element satisfies the condition
const youngestPrimo = primos.some((person) => {
    return person.age <= 40;
});
// console.log(youngestPrimo);

// the every() will iterate over each element and returns 'true' for the whole array if all values/element satisfies the condition.
// Useful: 1) VALIDATION - to validate an array and make sure all elements meet specific criteria. IE use to validate user input or to check if all 
// elements in array are within certain range. 2) CONDITIONAL LOGIC - to perform conditional logic based on elements of an array. IE use to determine
// if all numbers in an array are positive or if all strings meet a certain length requirement. 3) ERROR HANDLING - to perform error
// handling or data consistency checks. IE you can use it to ensure that all elements in an array are of the expected data type before 
// proceeding with further processing. 4) PREDICATE FUNCTIONS - used in combination with predicate functions to filter or transform
// array. By checking if every element satisfies a condition, you can determine whether to preform additional operations on the array.  
const allAges = primos.every((person) => {
    return person.age <= 40;
});
// console.log(allAges);

// Useful when you want to check if a specific element exists in an array and you don't need to know its index.

// In this example the 'includes()' will not work because it executes using ('===') meaning its look for a standalone element in the array, 
// not as a property value of the ojbects. In this case to find out if any object in the array primos has and 'age' property with the 
// value '38', I would need to iterate over the array and manually check each objects 'age' property. You should use methods like
// 'some()' or 'find()' for this. 
const includesAge = primos.includes(38);
// console.log(includesAge);

// join() method is used to join all elements in an array into a single string. It concatenates each element of the array using a 
// specified separator and returns the resulting string. BUT!! this will not be enought to join an array of Objects. You will need
// to use map() to extract the 'name' property from each object in the array resulting in a NEW array containing just the names. 
// THEN use join() 
let joinNames = primos.join(" and "); // will work for an array but not for an array of ojbects
let joinNames_Obj = primos.map((person) => {
    return person.name
}).join(" and ");
// console.log(joinNames_Obj);

// OR... use in a single line
let joinNames_SingLine = primos.map((person) => person.name).join(" and ");
// console.log(joinNames_SingLine);

// use toString() to convert the array into a string with no way to add comas or spaces. Use join() for that. Reason for using toString
// useful to send it over the network or storing it in a database. Somehow also used for debugging, displays easily.
let stringNames = primos.map((person) => { // convert the object property (name) into an array and then apply array method
    return person.name;
}).toString(primos);
// console.log(stringNames);

let primosSac = [
    {name: "Gabe", age: 35, occupation: "Ramper"},
    {name: "Anthony", age: 21, occupation: "Ramper"},
    {name: "Daniel", age: 49, occupation: "Ramper"},
    ["Marcela", "Alicia"]
]
let numbers = [1, 2, 4, 5, 6 ,7]
let stringIE = ["apple", "banana", "orange", "apple"]
let emojis = ["sad", "tired", "excited"]

let nestedArray = [numbers, stringIE]
// console.log(nestedArray)

let lvl3NestedArr = [nestedArray, emojis]
// console.log(lvl3NestedArr);

// flat() used to flatten an array by removing nested arrays. Passing no arguments (leaving () blank) flattens the array by one level.
let flattenedArr = lvl3NestedArr.flat()
// console.log(flattenedArr);


// concat() 1) usefeul to combine arrays, arrays of objects etc 2) Creates a new array instead of mutating the original. 3) CHAINING - 
// used to chain with other array methods to perform complex operations like map() or filter(). 4) PARAMETER FLEXIBILITY - accepts 
// multiple arguments, not just arrays. You can pass individual elements or arrays as arguments to 'concat()'. 
let coloradoCaliPrimos = primos.concat(primosSac, numbers, stringIE);
// console.log(coloradoCaliPrimos);


// splice() returns an array with the removed elements as in the example below. In order to replace values you must add a third parameter
let primosNotVisiting = primosSac.splice(3,1, {name: "Andrea", age: 19, occupation: "student"});
// console.log(primosNotVisiting)
let primosNotVisiting2 = primosSac.splice(1)
console.log(primosNotVisiting2);
console.log(primosSac);

// findIndex() was used to find the first object in the array where the 'name' property matched. Could not use indexOf b/c its an object 
let index = primos.findIndex(person => person.name === "Nofal");
// console.log(index);

// indexOf()
let stringIndex = stringIE.indexOf("orange");
// console.log(stringIndex);

let stringIndex2 = stringIE.lastIndexOf("apple");
// console.log(stringIndex2);

// sort()
let sortPrimos = primos.sort()
console.log(sortPrimos);