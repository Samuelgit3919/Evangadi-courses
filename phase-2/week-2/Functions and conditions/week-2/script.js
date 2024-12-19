
// question 8
// function differenceEvenOddSum(arr) {
//     let evenSum = 0;
//     let oddSum = 0;

//     arr.forEach(num => {
//         if (num % 2 === 0) {
//             evenSum += num;
//         } else {
//             oddSum += num;
//         }
//     });

//     console.log(evenSum - oddSum);
// }

// // Test case
// differenceEvenOddSum([5, 6, 99, 8, 76, 4, 68, 44]); //



// question 9
// function modifyArray(arr) {
//     arr.pop();
//     arr.push(32);
//     console.log(arr);
// }


// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// modifyArray(sampleArray);



//question 10
// function sortArrayAscending(arr) {
//     arr.sort(function (a, b) {
//         return a - b;
//     });
//     console.log(arr);
// }

// // Test case
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// sortArrayAscending(sampleArray);



// question 11
// let evangadiClass = {
//     lengthOfCourse: "1 Month",
//     website: "https://www.evangadi.com/",
//     isChallenging: false,
//     topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
//     students: [
//         { name: "Abebe", age: 34, sex: "M" },
//         { name: "Kebede", age: 44, sex: "M" },
//         { name: "Almaz", age: 27, sex: "F" },
//         { name: "Challa", age: 22, sex: "M" },
//         { name: "Chaltu", age: 19, sex: "F" }
//     ]
// };

// // Change the lengthOfCourse property
// evangadiClass.lengthOfCourse = "5 Month";
// console.log(evangadiClass);





//questions 12
// Add "Bootstrap" to the topicsCovered array
// evangadiClass.topicsCovered.push("Bootstrap");
// console.log(evangadiClass);





//question 13
// function calculateAverageAge(classObj) {
//     const totalAge = classObj.students.reduce((sum, student) => sum + student.age, 0);
//     const averageAge = totalAge / classObj.students.length;
//     console.log(averageAge);
// }

// // Test case
// calculateAverageAge(evangadiClass);

// questions 14
// function calculateMalePercentage(classObj) {
//     const totalStudents = classObj.students.length;
//     const maleStudents = classObj.students.filter(student => student.sex === "M").length;
//     const malePercentage = (maleStudents / totalStudents) * 100;
//     console.log(`${malePercentage}%`);
// }

// // Test case
// calculateMalePercentage(evangadiClass);
// // Output: Male percentage is 60%



