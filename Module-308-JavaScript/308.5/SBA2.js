function calculateWeightedAverage(CourseInfo, AssignmentGroups, LearnerSubmissions) {
    const learnerScores = {};
  
    // Iterate over LearnerSubmission objects to collect submission data
    LearnerSubmissions.forEach(submission => {
      if (!learnerScores[submission.learner_id]) {
        learnerScores[submission.learner_id] = {};
      }
//                      125                     1                   =           47                                          50
      learnerScores[submission.learner_id][submission.assignment_id] = submission.submission.score / getPointsPossible(submission.assignment_id, AssignmentGroups);
    });
  
    const output = [];
  
    // Iterate over AssignmentGroup objects to calculate the weighted average score for each learner
    for (const learnerId in learnerScores) {
      const learnerData = learnerScores[learnerId];
      let totalScore = 0;
      let totalWeight = 0;
  
      for (const assignmentId in learnerData) {
        const score = learnerData[assignmentId];
        const weight = getWeight(assignmentId, AssignmentGroups);
        totalScore += score * weight;
        totalWeight += weight;
      }
  
      const weightedAverage = totalScore / totalWeight;
  
      const learnerOutput = {
        id: parseInt(learnerId),
        avg: weightedAverage
      };
  
      // Add scores for each assignment
      for (const assignmentId in learnerData) {
        learnerOutput[assignmentId] = learnerData[assignmentId] * 100; // Convert score to percentage
      }
  
      output.push(learnerOutput);
    }
  
    return output;
  }
  
  function getPointsPossible(assignmentId, AssignmentGroups) {
    for (const group of AssignmentGroups) {
      const assignment = group.assignments.find(a => a.id === assignmentId);
      if (assignment) {
        return assignment.points_possible;
      }
    }
    return 0; // If assignment not found
  }
  
  function getWeight(assignmentId, AssignmentGroups) {
    for (const group of AssignmentGroups) {
      const assignment = group.assignments.find(a => a.id === assignmentId);
      if (assignment) {
        return group.group_weight;
      }
    }
    return 0; // If assignment not found
  }
  
  // Example usage:






  const CourseInfo = { "id": 1, "name": "JavaScript Course" };

  const AssignmentGroups = 
  [
    { "id": 1, "name": "Group 1", "course_id": 1, "group_weight": 25, "assignments": 
      [
        { "id": 1, 
          "name": "Assignment 1", 
          "due_at": "2023-01-25", 
          "points_possible": 50 }, 

        { "id": 2, 
        "name": "Assignment 2", 
        "due_at": "2023-02-27", 
        "points_possible": 150 }
      ] 
    }
  ];


const ptsPsbleId_1 = AssignmentGroups[0].assignments[0].points_possible
const ptsPsbleId_2 = AssignmentGroups[0].assignments[1].points_possible
const totalPtsPossible = ptsPsbleId_1 + ptsPsbleId_2
// console.log(ptsPsbleId_1)

const LearnerSubmissions = 
[
    { "learner_id": 1, 
      "assignment_id": 1, 
      "submission": 
      { "submitted_at": "2023-01-25", "score": 40 } 
    }, 
    { "learner_id": 1, 
      "assignment_id": 2, 
      "submission": 
      { "submitted_at": "2023-02-26", "score": 120 } }, 
    { "learner_id": 2, 
      "assignment_id": 1, 
      "submission": 
      { "submitted_at": "2023-01-25", "score": 45 } }, 
    { "learner_id": 2, 
      "assignment_id": 2, 
      "submission": 
      { "submitted_at": "2023-02-27", "score": 140 } }
];

/*
// first method to retreive the scores I could think of
let getScore40 = LearnerSubmissions.find(currentObj => { // returns the whole ojbect containing the score. Only way I could figure out how to get the score of the second assignment
  return currentObj.submission.score === 40;
});
let score40 = getScore40.submission.score  // Grabs the score

let getScore120 = LearnerSubmissions.find(currentObj => { // returns the whole ojbect containing the score. Only way I could figure out how to get the score of the second assignment
    return currentObj.submission.score === 120; // Grabs the score
});
let score120 = getScore120.submission.score

let iD125TotalScore = score120 + score40 // total score for both assignments = 160

const weightedAvg125 = iD125TotalScore/totalPtsPossible // 80% weighted average of Learner 125
*/

// Second attempt, this time creating a function
function grabSubmissions(LearnerSubmission){            // store this function to use again
  let submittedScores = []                // Create empty arrayto store the results
  for(const item of LearnerSubmissions){  // Use the for... of loop for arrays
    for(const j in item) {                // Use the for... in loop for objects
      if (j === "submission") {            // if 'placeholder' j in obj is equal to submission
        submittedScores.push(item[j]);      // push the value of submissions to empty array
      }
    }
  } 
  return submittedScores;
}
let submissions = grabSubmissions(LearnerSubmissions)   // Stores an array with the 4 objects containing the submissions
// console.log(submissions)
let score40 = (submissions[0].score)
let score120 = (submissions[1].score)
let score45 = (submissions[2].score)
let score140 = (submissions[3].score)

let iD_1TotalScore = score120 + score40 // total score for both assignments = 160
let iD_2TotalScore = score45 + score140

let weightedAverage_1 = iD_1TotalScore/totalPtsPossible
let weightedAverage_2 = iD_2TotalScore/totalPtsPossible
// console.log(weightedAverage_1)
// console.log(weightedAverage_2)


// created function to grab learner IDs
function grablearnerId (LearnerSubmissions) {  
  let learnerIds = []                          // declare empty array to store IDs
  for (const item of LearnerSubmissions) {     // for of loop to iterate over 
    learnerIds.push(item.learner_id);           // store each ID in empty array
  }
  return learnerIds;                            // return the array 
};
let learnerIds = grablearnerId(LearnerSubmissions)  // stores the results

// Learning how to use the new Date() to verify if assignment is not yet due
const currentDate = new Date();     // date obj with no arguments returns current date and time


console.log(currentDate)


// console.log(learner125)
// const learner125_Id_1 = LearnerSubmissions[0].submission.score
// const learner125_Id_2 = LearnerSubmissions[0].submission.score 
// This is why I need to iterate over the object with the appropriate condition and store it in an array.
// Begin by iterating over the ojbect and converting to a more pracitcal data structure... arrays!

  const result = calculateWeightedAverage(CourseInfo, AssignmentGroups, LearnerSubmissions);
  // console.log(result);
  function getLearnerData(course, ag, submissions1, submissions2) {
    let arrOfObj = [];
    // Check if all arrays have the same length
    if (course.length !== ag.length || course.length !== submissions1.length || course.length !== submissions2.length) {
        throw new Error("Arrays have different lengths");
    }
    for (let i = 0; i < course.length; i++) {
        let obj = {
            id: course[i],
            avg: ag[i],
            submissions: [submissions1[i], submissions2[i]] // Array of submissions
        };
        arrOfObj.push(obj);
    }
    return arrOfObj;
 }
 
 // Sample data
//  const courseInfo = [125, 132];
//  const avgScores = [0.985, 0.895];
//  const lrnr125pctg = [0.94, 1.0];
//  const lrner132pctg = [0.78, 0.833];
 
 // Call the function
 let results = getLearnerData(courseInfo, avgScores, lrnr125pctg, lrner132pctg);
 console.log(results);
 