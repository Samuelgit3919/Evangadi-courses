// question 1
// $(document).ready(function () {
//     const sample1Element = $('#sample1');

//     console.log(sample1Element);

//     console.log(sample1Element.get(0));

//     // consoling the each elements
//     console.log(sample1Element.html());
//     // inner text of each paragraph
//     console.log(sample1Element.text());



// });

// Question 2:
// The following questions are based on the HTML code found under the section labeled "For
// question 2".
// 2.1.Select the element with an ID of "techCompanies" and display it on your console.
// 2.2.How many tech companies are listed under the ul element with an id of
// "techCompanies" ?
//     2.3.Select all elements with a class of "red" and display them on the console.
// 2.4.Create a new li HTML element with a content of "Facebook" and display it on console
// 2.5.Give the newly created element a class of "blue" using jQuery
// 2.6.Append the newly created element next to the the "Sony" < li > element
// 2.7.How many of the tech companies are labeled blue ? Find the result using jQuery and
// display the result inside the "blueCompanies" div

// $(document).ready(function () {
//     // 2.1.Select the element with an ID of "techCompanies" and display it on your console.
//     const techCompaniesList = $('#techCompanies');
//     console.log(techCompaniesList);

//     // 2.2 How many tech companies are listed under the ul element with an id of "techCompanies"?
//     const companyCount = $('#techCompanies li');
//     const companyLength = companyCount.length
//     console.log("Number of tech companies listed:", companyLength);

//     // 2.3 Select all elements with a class of "red" and display them on the console
//     const redCompanies = $('.red');
//     console.log(redCompanies);

//     // 2.4 Create a new <li> HTML element with content "Facebook" and display it on the console
//     const newCompany = $('<li>Facebook</li>');
//     console.log(newCompany);

//     // 2.5 Give the newly created element a class of "blue" using jQuery
//     newCompany.addClass('blue');

//     // 2.6 Append the newly created element next to the "Sony" <li> element
//     const sony = $('.sony');
//     $(sony).after(newCompany);

//     // 2.7 How many of the tech companies are labeled blue? Find the result using jQuery
//     const blueCompanyCount = $('.blue').length;
//     console.log(blueCompanyCount);

//     const blueDiv = $('#blueCompanies')

//     // Display the result inside the "blueCompanies" div
//     blueDiv.append(`<p>Total blue companies: ${blueCompanyCount}</p>`);
// });







// Question 3:
// A form with two text fields is provided under the section which says "For question 3".Write a
// jQuery code which takes the values of the two fields, checks if they are number values and
// calculate the sum and average of the two numbers.
// 3.1.Display the result on the console
// 3.2.Display the result underneath the form
// 3.3.If any of the numbers provided is not a number, display a message that says "Please
// enter numerical values only" underneath the form



$(document).ready(function () {
    $('#adder').on('submit', function (event) {
        // Prevent the form from refreshing the page
        event.preventDefault();


        // accessing the inputs
        // const first_input = $('input[name="first-value"]')
        const first_input = $("#adder input:first()");
        const second_input = $("#adder input:last()")
        // const second_input = $('input[name="first-value"]')

        // Retrieve input values
        const firstValue = first_input.val();
        const secondValue = second_input.val();


        const sumEl = $('#sum')

        if (isNaN(firstValue) || isNaN(secondValue) || firstValue === '' || secondValue === '') {
            const errorMessage = "Please enter numerical values only";
            // console.log(errorMessage);
            sumEl.text(errorMessage);
        }

        else {

            const num1 = parseFloat(firstValue);
            const num2 = parseFloat(secondValue);


            const sum = num1 + num2;
            const average = sum / 2;


            const resultMessage = `Sum: ${sum}, Average: ${average}`;

            // Display result on console
            // console.log(resultMessage);

            // Display result under the form
            sumEl.text(resultMessage);
        }
    });
});

// if (isNaN(firstValue) || isNaN(secondValue) || firstValue === '' || secondValue === '') {
//     const errorMessage = "Please enter numerical values only";
//     // console.log(errorMessage);
//     sumEl.text(errorMessage);
// }