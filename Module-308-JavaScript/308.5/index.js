// Write a function named computeArea using the function declaration approach.

// It will have two parameters: width & height.
// It will compute the area of a rectangle (width multiplied by height) and return a string in the following form:

// The area of a rectangle with a width of _ and a height of _ is ___ square units.

// Invoke the function to test it.

// function computeArea (width, height) {
//     return "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + width * height + " square units.";
// }
// console.log(computeArea(10, 20));

// const computeArea = function(width, height) {
//     return "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + width * height + " square units.";
// } 
// console.log(computeArea(5,5));

// const planetHasWater_1 = function(planet) {
//     planet = planet.toLowerCase()
//     if (lowerCasePlanet === "earth" || lowerCasePlanet === "mars") {
//         return true;
//     } else {
//     return false; 
//     }
// };

// console.log(planetHasWater_1("mars"));

const newArr = [1, 2, 3, 4, 5, 6 ,7]
function addSum (a,b,c,d,e,f,g) {
    return a + b + c + d + e + f + g;
}
let total = addSum(...newArr)
console.log(total);

const lengthOfArr = newArr.length
function average (total, lengthOfArr) {
    return total / lengthOfArr;
}
let avg = average(total, lengthOfArr)
console.log(avg)

// Take an array of strings and return the longest string.
const newArr2 = ["to", "quick", "brown", "fox", "jumped", "over", "toe"]
// longestString.reduce()

function longestString (array) {  
    let longWordLength = 0;
    let longestWord;
    for (let i = 0; i < array.length; i++) {
        let currentWord = array[i];
        if (currentWord.length > longWordLength) {
            longWordLength = currentWord.length;
            longestWord = currentWord;
        }
    }
    return longestWord;
}
console.log(longestString(newArr2))