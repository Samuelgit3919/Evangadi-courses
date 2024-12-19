// Question 1
// const sample1 = document.getElementById("sample1");

// console.log(sample1);
// console.log(sample1.textContent);

// // Question 2

// const techCompanies = document.getElementById("techCompanies");

// //1
// console.log(techCompanies);
// //2
// const techCopanies2 = document.querySelector("#techCompanies");
// console.log(techCopanies2);

// //3
// const techCompanies3 = document.querySelectorAll("li");
// console.log(techCompanies3);
// console.log(techCompanies3.length);
// // 4
// const red = document.querySelectorAll(".red");
// console.log(red);
// //5
// const newel = document.createElement("li");
// newel.textContent = "Facebook";
// console.log(newel);
// //6
// newel.classList.add("blue");
// console.log(newel);
// //7
// techCompanies.appendChild(newel);
// // 8
// const blueTech = document.querySelectorAll(".blue");
// const blueCompany = document.querySelector("#blueCompanies");
// console.log(blueTech.length);

// for (let i = 0; i < blueTech.length; i++) {
//    blueCompany.appendChild(blueTech[i]);
// }

// // Array.from(blueTech).forEach((element) => {
// //   blueCompany.appendChild(element);
// //   console.log(blueCompany);
// // });

// Question 3
// // add bg
// const yesBack = document.getElementById("yesBackground");
// function changebg() {
//   document.body.style.backgroundColor = "#99ecff";
// }

// yesBack.addEventListener("click", changebg);
// // remove bg
// const NoBack = document.getElementById("noBackground");
// function removebg() {
//   document.body.style.backgroundColor = "";
// }
// NoBack.addEventListener("click", removebg);

// Question 4
// const form = document.getElementById("adder");
// const resultContainer = document.getElementById("sum");
// const submitbtn = document.getElementById("submitButton");

// // Add event listener to the form
// function Submit(event) {
//   // Prevent default form submission
//   event.preventDefault();

//   // Get input values
//   const firstValue = document.getElementsByName("first-value").value;
//   const secondValue = document.getElementsByName("second-value").value;

//   // Parse values as numbers
//   const num1 = parseFloat(firstValue);
//   const num2 = parseFloat(secondValue);

//   // Clear previous result
//   resultContainer.textContent = "";

//   // Check if inputs are valid numbers
//   if (typeof num1 !== "number" || typeof num2 !== "number") {
//     resultContainer.textContent = "Please enter numerical values only";
//   } else {
//     const sum = num1 + num2;
//     console.log("Sum:" + sum);
//     resultContainer.textContent = `The sum of the two numbers is: ${sum}`;
//   }
// }

// submitbtn.addEventListener("click", Submit);

// Question 4:
// A form with two text fields is provided under the section which says "For question 4".
// Write a JavaScript code which takes the values of the two fields, checks if they are
// number values and calculate the sum of the two numbers.
// 1. Display the result on the console
// 2. Display the result underneath the form
// 3. If any of the numbers provided is not a number, display a message that says
// "Please enter numerical values only" underneath the form

// Solution:
//   const form = document.getElementById("adder");
//   const resultContainer = document.getElementById("sum");
//   const submitBtn = document.getElementById("submitButton");

// // Add event listener to the form
//     function submitForm(event) {
//       event.preventDefault();

//       // Get input values
//       const firstValue = document.getElementsByName("first-value")[0].value;
//       const secondValue = document.getElementsByName("second-value")[0].value;

//       // Parse values as numbers
//       const num1 = parseFloat(firstValue);
//       const num2 = parseFloat(secondValue);

//       // Clear previous result
//       resultContainer.textContent = "";

//       // Check if inputs are valid numbers
//       if (isNaN(num1) || isNaN(num2)) {
//         resultContainer.textContent = "Please enter numerical values only";
//       } else {
//         const sum = num1 + num2;
//         console.log("Sum:", sum);
//         resultContainer.textContent = `The sum of the two numbers is: ${sum}`;
//       }
//     }

//     submitBtn.addEventListener("click", submitForm);

// End of Solution
