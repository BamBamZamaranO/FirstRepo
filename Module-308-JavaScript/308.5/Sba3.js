// Declare variables properly using let and const where appropriate.



// Use operators to perform calculations on variables and literals.
// Use strings, numbers, and Boolean values cached within variables.
// Use at least two if/else statements to control program flow. 
//     Optionally, use at least one switch statement.
// Use try/catch statements to manage potential errors in the 
//     code, such as incorrectly formatted or typed data being fed into your program.
// Utilize at least two different types of loops.
    // for loop
    // while loop
// Utilize at least one loop control keyword such as break or continue.
// Create and/or manipulate arrays and objects.
// Demonstrate the retrieval, manipulation, and removal of items in an array or properties 
//     in an object.
// Use functions to handle repeated tasks.
// Program outputs processed data as described above. Partial credit will be earned depending
//     on the level of adherence to the described behavior.
// Ensure that the program runs without errors (comment out things that do not work, and 
//     explain your blockers - you can still receive partial credit).
// Commit frequently to the git repository.



// Function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions):
//     Initialize an empty array to store the formatted result
    let arr_1 = []

//     // Validate input data
//     If the course ID of the assignment group does not match the course ID of the courseInfo:
//         Throw an error indicating invalid input data

//     // Process each learner's data
//     For each learnerSubmission in learnerSubmissions:
//         Initialize variables to store total points, total weighted points, and late submission penalty
const ptsPossible = {id: 1, score: 50, id: 2, score: 150}

//         Initialize an object to store the learner's scores for each assignment
let finalGrades = {}

//     For each assignment in assignmentGroup.assignments:
    // If the due date of the assignment has passed:
 

//                 If the learner's submission is late:
//                     Deduct 10% of the total points possible from the learner's score for that assignment

//                 Calculate the percentage score for the assignment

//                 Add the assignment ID and the percentage score to the learner's scores object

//                 Add the assignment's points possible to the total points
//                 Add the learner's score for the assignment multiplied by the assignment's points possible to the total weighted points

//         // Calculate weighted average score
//         Calculate the weighted average score by dividing the total weighted points by the total points

//         // Create the learner data object
//         Initialize an object to store the learner's data
//         Set the ID of the learner
//         Set the average score of the learner
//         Add the learner's scores object to the learner data object

//         Add the learner data object to the result array

//     Return the formatted result array


function grablearnerId (LearnerSubmission) {
    for (const item of LearnerSubmissions) {
     const learnerId = item.learner_id;
     console.log("Learner ID: " + learnerId)
    }
  };
//   grablearnerId()   === 
  
//   Learner ID: 1
//   Learner ID: 1
//   Learner ID: 2
//   Learner ID: 2

let names = ["jaime", "Christian", "Nofal"]
let ages = [38, 41, 46]

function createPersons(name, age) {
    let arrOfObj = [];
    for (let i=0; i < names.length; i++) {
        let obj = {
            name: name[i], age: age[i]
        } 
        arrOfObj.push(obj)
    }  
    return arrOfObj;
} 

// console.log(createPersons(names, ages))



// let cCourseInfo = [125, 132]
// let aAssignmentGroup = [0.985, 0.82]
// let lLearnerSubmissions = [ [0.94, 1.0] , [0.78, 0.833] ]

// function getLearnerData(course, ag, submissions) {      // Creates array of objects
//    let arrOfObj = []                                    
//    for (let i = 0; i < cCourseInfo.length; i++) {
//     let obj = {                                         // creates each object; equal to the # of arguments
//         id: course[i], 
//         avg: ag[i],
//         submissions: submissions[i]
//     }
//         arrOfObj.push(obj);
//    }    return arrOfObj
// }
// console.log(getLearnerData(cCourseInfo, aAssignmentGroup, lLearnerSubmissions))


