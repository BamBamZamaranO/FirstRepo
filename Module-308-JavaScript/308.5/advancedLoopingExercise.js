const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (const item in detailedBasket) {
  console.log(item);
}

for (const item of basket) {  // item represents the property, not the value assigned to that property
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    arr.forEach( item => {      // loop over each item in the array

    })           
}

function biggestNumberInArray(arr) {
    if (arr.length === 0) return 0;  // Verified the array is not empty. If it is, return 0
    let max = arr[0];        // Declared and empty array called max
    for (const num of arr) { // Declared a variable num. Each iteration of the loop will assign the current element of the array to num.
        if (num > max) {     // for the current index/item of the array you are looping over...followed by condition
            max = num;
        }
    }
    return max;
}
function biggestNumberInArray2(arr) {

}

function biggestNumberInArray3(arr) {

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {

}