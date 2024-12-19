//question number1
// function myFirst() {
//     console.log("Hello")
    
// }
    
// myFirst();

// Question number 2
// function mySecond(a) {
//     console.log(a);
//     // return a;
// }
// // mySecond(5);

// //Question number 3
// function myThird(a){
//  mySecond(a)
// }

// myThird("bura");

// question Number4
// function myFourth(array1 = [1, 2, 3, 4]){
//     console.log(array1[0]);
// };

// myFourth();

// Question 5

// function myFifth(array2 = [a, b]) {
//     const result = array2[0] + array2[1];
//     return  result;
//     // console.log(result);
    
// }
// // const result2 =
//  const sum = myFifth([1,2]);
// console.log(sum);

// Question 6

// function second(minutes) {
//     const seconds = minutes * 60;
//     return seconds;
// }
// const seconds = second(12);
// console.log(seconds);

// Question 7
// function increment(number) {
//     return ++number;
// }

// const result = increment(5);

// console.log(result);
// Question 8

// function triangle(base, height) {
//     const area = (base * height)/2;
//     return area;
// }
//  const area = triangle(5, 10);
//  console.log(area);

// Question 9

// function TotalLegs(chickens, cows, pigs) {
//     const chickens = chickens * 2;
//     const cows = cows * 4;
//     const pigs = pigs * 4;
    
//     const totalLegs = chickens + cows + pigs;
//     return totalLegs;
// }

// const totalLegs = TotalLegs(2, 3, 4);

// console.log(totalLegs);

// Question 10

// function TwoNumbers(name = [a, b]) {
//     if (name.length !== 2) {
//         return "The Length of the array should be two";
//     }
//     const result = 3 * name[0];
//     return result;
// }

// const result = TwoNumbers([2, 3]);

// console.log(result);

// Question 11

// function equity(num1,num2) {
//     if (num1 === num2) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const result = equity(5, 2);

// console.log(result);


// Question 12

// function divisible(num1) {
//     if (num1 % 100 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const result = divisible(1001);

// console.log(result);

// Question 13

// function parity(num) {
//     if (num % 2 === 0) {
//         return "Even"
//     }
//     else if (num < 0) {
//         return "please inter valid number or +ve number";
//     }
//     else {
//         return "Odd"
//     }
// }

// const result = parity(4);
//  console.log(result);

// Question 14

//  function grade(score) {
//     if (score > 100 ||  score < 0) {
//         return "Invalid score";
//      }
//      else if (score >= 90 && score <= 100) {
//          return "A";
//      }
//     else if (score >= 80 && score <= 89) {
//         return "B";
//      }
//     else {
//         return "C";
//      }
// }
 
// const result = grade(75);

// console.log(result);

// function grade(score) {
//   if (score > 100 || score < 0) {
//     return "Invalid score";

//   }

//     switch (true) {
//       case (score >= 90):
//         console.log("A");
//         break;
//         // return ;
//       case (score >= 80):
//         console.log("B");
//         break;
//         default:
//             console.log("C");
//       }
      
// }

//  grade(92);
// console.log(result);


// window.age = 17;
// const Hosting = {
//   Name: "Gedidoj",
//   age: "44",
//   IsNewVAlue: function (age) {
//     console.log("Your age that you get form the object is", +this.age);
//     this.age = age;
//     console.log("YOur age from the func ", this.age);
//     console.log("update");
//     // (() => console.log("your New up to date value is ", this.age))
    
//     (function(){
//       console.log("Your value with fuction ",this.age);
//     })();
//   },
// };

// const ageChecker = Hosting.IsNewVAlue(112);
// console.log(ageChecker);

// window.age = 17;
// const Hosting = {
//   Name: "Gedidoj",
//   age: "44",
//   IsNewVAlue: function (age) {
//     console.log("Your age that you get form the object is", +this.age);
//     this.age = age;
//     console.log("YOur age from the func ", this.age);
//     console.log("update ");
//     (() => console.log("your New up to date value is eeww", this.age))();
//     (function name(){
//       return this.age;
//     })();
//   },
// };

// const ageChecker = Hosting.IsNewVAlue(112);
//  console.log(ageChecker); // 112
 
 // Question 15

//  function factorial(num) {
 
// const ageChecker = Hosting.IsNewVAlue(112);




// 3. Repetitive Tasks:
// Example: Automating tasks, like updating user profiles or sending notifications.
// Use Case: Sending welcome messages to new users.



// 1. Iterating Over Arrays:
// Example: Processing elements in an array, such as calculating totals or applying transformations.
// Use Case: Calculating the total cost of items in a shopping cart.



// const users = ['Alice', 'Bob', 'Charlie','sami'];
// for (let i = 0; i < users.length; i++) {
//     console.log(`Welcome, ${users[i]}!`);
// }


// // 4. Data Processing:
// // Example: Filtering or transforming data in arrays.
// // Use Case: Converting temperatures from Celsius to Fahrenheit.

// const celsius = [0, 20, 30, 100,212];
// const fahrenheit = [];
// for (let i = 0; i < celsius.length; i++) {
//     fahrenheit.push(celsius[i] * 9/5 + 32);
// }
// console.log(fahrenheit);



// function parity(num) {
//      if ( typeof(num)==="number" && num < 0) {
//         return "please Enter valid number or +ve number";
//      }
//         else if (num % 2 === 0 ) {
//         return "Even"
//     }
//     else {
//         return "Odd"
//     }
// }


// console.log(parity("5"));

