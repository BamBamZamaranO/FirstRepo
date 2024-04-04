// Your goal is to analyze and transform this data such that the output of your program is an array of objects, each object containing the 
// following information in the following format:
// {
//     // the ID of the learner for which this data has been collected
    // "id": number,
//     // the learner’s total, weighted average, in which assignments
//     // with more points_possible should be counted for more
//     // e.g. a learner with 50/100 on one assignment and 190/200 on another
//     // would have a weighted average score of 240/300 = 80%.
    // "avg": number,
//     // each assignment should have a key with its ID,
//     // and the value associated with it should be the percentage that
//     // the learner scored on the assignment (submission.score / points_possible)
    // <assignment_id>: number,
//     // if an assignment is not yet due, it should not be included in either
//     // the average or the keyed dictionary of scores
// } 


// The provided course information.

//   c) Store in variable (assignmentid_1) score of 47 is @   [{ 0 {1 	assignment_id: 1;
//   d) Store in variable (assignmentid_2) score of 150 is @  [{ 1 {1 	assignment_id: 2;
//   e) Store in variable (Points_possible_id_1) max points possible for assignment_id1 in AssginmentGroup { [ {0}
//   f) Store in variable (Points_possible_id_1) max points possible for assignment_id2 in AssginmentGroup { [   {}, {1}



const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  
  // The provided assignment group.
  
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };

  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,                    // the student 
      assignment_id: 1,                   // assingment number
      submission: {                       
        submitted_at: "2023-01-25",        // date
        score: 47                         // score
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];




  function grabPtsPossbile(AssignmentGroup) {
    let ptsPossible = []
    for (const currObj of AssignmentGroup.assignments) {
    ptsPossible.push(currObj.points_possible);
    } return ptsPossible;
  }
  let ptsPossible = grabPtsPossbile(AssignmentGroup)
      ptsPossible.splice(-1)


  function grabSubmissions(LearnerSubmission){     // store this function to use again
    let submittedScores = []                       // Create empty arrayto store the results
    for(const item of LearnerSubmissions){         // Use the for... of loop for arrays
      for(const j in item) {                       // Use the for... in loop for objects
        if (j === "submission") {                  // if 'placeholder' j in obj is equal to submission
          submittedScores.push(item[j]);           // push the value of submissions to empty array
        }
      }
    } 
    return submittedScores;
  }
  let submissions = grabSubmissions(LearnerSubmissions)  // Stores an array with the 4 objects containing the submissions
// console.log(submissions)

// First attempt at grabbing the scores I need but this is inefficient. Will try the forEach() next
                                                                // let score47 = (submissions[0].score)
                                                                // let score150 = (submissions[1].score)
                                                                // let score39 = (submissions[3].score)
                                                                // let score140 = (submissions[4].score)
  
// Second attempt; Used array method to iterate over objects and store values. Problem with this method
// is all student scores were returned instead of separating scores for each student [47, 150, 400, 39, 140]
                                                                // let scores = []                   // initialize empty array
                                                                //  submissions.forEach(item => {    // iterate over each object in submissions (5 objects total)
                                                                //   scores.push(item.score);        // store the scores values
                                                                // });

// Thirst attempt to obtain scores categorized for each student. Destructuring...
const [s47, s150] = submissions;
const learner125score = [s47.score, s150.score]  // learner125score = [47, 150]

const [ , , , s39, s140] = submissions
const learner132score = [s39.score, s140.score]  // learner132score = [ 39, 140 ]

                                          // discarded logic from first attempt
                                                              // console.log(score140) 
                                                              // let iD_1TotalScore = score120 + score40 // total score for both assignments = 160
                                                              // let iD_2TotalScore = score45 + score140
                                                              // const ptsPsbleId_1 = AssignmentGroups[0].assignments[0].points_possible
                                                              // const ptsPsbleId_2 = AssignmentGroups[0].assignments[1].points_possible
                                                              // const totalPtsPossible = ptsPsbleId_1 + ptsPsbleId_2
                                                              // let weightedAverage_1 = iD_1TotalScore/totalPtsPossible
                                                              // let weightedAverage_2 = iD_2TotalScore/totalPtsPossible
                                                            // console.log(weightedAverage_1)


// let aAssignmentGroup = [0.985, 0.82]
// let lLearnerSubmissions = 
                                                         
// ptsPossible = [50, 150]
// learner125score = [ 47, 150 ]
// learner132score = [ 39, 140 ]


const lrnr125pctg = []                                      // [ 0.94, 1 ]
for (let i=0; i < learner125score.length; i++) {
  lrnr125pctg.push(learner125score[i] / ptsPossible[i]);
}

// console.log(learner125)
const lrner132pctg = []                                     // [ 0.78, 0.93 ]
for (let i=0; i < learner132score.length; i++) {
  lrner132pctg.push(learner132score[i] / ptsPossible[i]);
}


// console.log(learner132)
// sum and divide function
function calcSum(arr) {
  return arr.reduce((total, currItem) => {
    return total + currItem;
  }) 
}                   

let lrner125total = calcSum(learner125score)   // 197
let lrner132total = calcSum(learner132score)   // 179
let totalPts = calcSum(ptsPossible)            // 200 
  
let bothSTDtotals = [lrner125total, lrner132total]    // [ 197, 179 ]

function divideTotals(student, ptsPossible) {
  return student.map(student => student/ptsPossible)
}
const courseInfo = [125, 132]
const avgScores = divideTotals(bothSTDtotals, totalPts)   // [ 0.985, 0.895 ]
const learnerScores = [lrnr125pctg, lrner132pctg]  
// console.log(avgScores)

function calculatePercentage(scores, totalPossible) {
  return scores.map(score => score / totalPossible);
}

function getLearnerData(course, ag, submission) {      // Creates array of objects
   let arrOfObj = []    
   for (let i = 0; i < courseInfo.length; i++) {
    arrOfObj.push({                                         // creates each object; equal to the # of arguments
        id: courseInfo[i], 
        avg: avgScores[i],
        submissions: learnerScores[i]
    });
   } 
   return arrOfObj;
  }    

    
let results = getLearnerData(courseInfo, avgScores, learnerScores)
console.log(results)


//you can make mulitpule functions to help complete the task

  //   const result = [
  //     {
  //       id: 125,
  //       avg: 0.985, // (47 + 150) / (50 + 150)
  //       1: 0.94, // 47 / 50
  //       2: 1.0 // 150 / 150
  //     },
  //     {
  //       id: 132,
  //       avg: 0.82, // (39 + 125) / (50 + 150)
  //       1: 0.78, // 39 / 50
  //       2: 0.833 // late: (140 - 15) / 150
  //     }
  //   ];
   
  //   return result;
  // 
