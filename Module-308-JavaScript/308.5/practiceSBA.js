// const AssignmentGroup = {   // an object with key:values and a nested array of 3 objects
//      id: 
//      name:
//      course_id:
//      group weight:
//      assignment: [
//     
//         {
//             // nested object
//         },
//         {
//             // nested object
//         },
//         {
//             //nested object
//         }
//     ]
// }

// let primos = {["jaime", "christian", "nofal"]}; //from line 15 in Sublime Text
// console.log(primos.name[0]);
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
AssignmentGroup.assignments.forEach(assignment => { // Call variable, use dot notation to grab property assignments which is 
    // array of four objects, iterate over each object (Use arrow notation to declare function to return)
    console.log("Points Possible for", assignment.id + ":", assignment.points_possible);
    });

const pointsPossibleArray = AssignmentGroup.assignments.map(assignment => { // Create new array with points 
    return "Points Possible for " + assignment.id + ": " + assignment.points_possible;
    });
      
    console.log(pointsPossibleArray);



let score47 = LearnerSubmissions[0].submission.score
let score150 = LearnerSubmissions[1].submission.score
// console.log(score47);
// e) Store in variable (Points_possible_id_1) max points possible for assignment_id1 in AssginmentGroup { [ {0}
// let assId_1PtsPsble = AssignmentGroup

//   f) Store in variable (Points_possible_id_1) max points possible for assignment_id2 in AssginmentGroup { [   {}, {1}