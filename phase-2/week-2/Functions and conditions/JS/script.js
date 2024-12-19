// alert("your js is connected!!")


// Question 1
// ● Define a simple function named myFirst that prints the word "Hello" on the console
// ○ First define the function
// ○ Then call the function

// function myFirst() {
//     console.log("Hello");
// }
// myFirst();




// Question 2
// ● Define a function called mySecond that takes a parameter and prints the parameter on
// console
// ○ Feel free to give any value as a parameter in your function

// function mySecond(name = "mySecond") {
//     console.log(name);
// }

// function mySecond(params) {
//     return params
// }

// mySecond("Hello World!");





// Question 3
// ● Define a function called myThird that takes a parameter and prints the parameter on the
// console. But, it uses mySecond function to print the parameter on the console

// function myThird(params) {
//     console.log(params);
    
// }

// myThird("mySecond");





// Question 4
// ● Write a function named myFourth that takes an array as a parameter and prints only the first
// value of the array on the console.


// const array = [1, 2, 3, 4];
// function myFourth(array) {
//     console.log(array[0]);
// }
// myFourth(array);





// Question 5
// ● Write a function named myFifth that takes an array with two numbers in it as a parameter and
// prints the sum of the two numbers on console

// function myFifth(name = [1, 2]) {
//     console.log(name[0]);
//     console.log(name[1]);

//     const sum =name[0] + name[1];
//     console.log(sum);
// }
 
// myFifth();






// Question 6
// Convert Minutes into Seconds

// function convert(minutes) {
//     const seconds = minutes * 60;
//     return seconds;
// }
// const seconds = convert(15);
// console.log(seconds);




// Question 7
// ● Create a function that takes a number as a parameter, increments the number by +1 and
// returns the result.

// function increment(number) {
//     return ++number;
// }
// const result = increment(12)

// console.log(result);





// Question 8
// ● Write a function that takes the base and height of a triangle and returns its area.

// function triangle(base, height) {
//     const area = (base * height)/2;
//     return area;
// }

// const triangleArea = triangle(5, 10);
// console.log(triangleArea);





// Question 9
// Create a function that returns the total number of legs of all the animals. In this challenge, a
// farmer is asking you to tell him how many legs can be counted among all his animals. The
// farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember: the
// farmer wants to know the total number of legs and not the total number of animals.
// return total number of legs of all the animals
// 3 species ( chickens = 2 legs, cow = 4 legs, pips = 4 legs )


//      function TotalLegs(chickens, cows, pigs) {
//          const chickenLegs =chickens * 2;
//          const cowLegs = cows * 4;
//          const pigLegs = pigs * 4;
         
//          const total = chickenLegs + cowLegs + pigLegs;

//          return total;//+
// }
     
// const result  = TotalLegs(3, 2,4)
// console.log(result);




//  Question 10 (not from edabit.com)
// ● Create a function that takes an array containing only TWO numbers as a parameter and returns
// a value that is 3 times the first element of the array.

// function TwoNumbers(arrays = [a, b]) {
//     if (arrays.length !== 2) {
//         console.log("The array should be two numbers");
//     }
//     else {
//         const result = 3 * arrays[0];
//         return result
//     }
//    return
// }

// const value = TwoNumbers(arrays = [3, 3]);
// console.log(value);





// Question 11
// ● Create a function that returns true when num1 is equal to num2; otherwise return false

// function Equality(num1, num2) {
//     if (num1 === num2) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(Equality(2,2));
// console.log(Equality(2,4));





// Question 12
// ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false.

// function divisible(number) {
//     if (number % 100 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const numbers = divisible(200)
// console.log(numbers);





// Question 13
// ● Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.

// function even(number) {
//     if (number % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }
// const result = even(200);
// console.log(result);





// Question 14
// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79

// function grade(score) { 
//     if (score > 100 || score < 0) {
//         return "Invalid score";
//     }
//     else if (score >= 90 && score <=100) {
//         return "Grade A";
//     }
//     else if (score >= 80 && score <= 89) {
//         return "Grade B";
//     }
//     else {
//         return "Grade C";
//     }
// }

// const result = grade(65);
// console.log(result);

