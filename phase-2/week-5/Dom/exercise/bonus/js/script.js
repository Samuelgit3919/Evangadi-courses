// Question 1
//   Add a list of radio buttons on the page containing different color options. When a user clicks on one of them, the background of the page should change to the selected color.
//     - Two of the buttons that say "Night mode" and "Sunny Mode". When night mode is chosen, the background should change to black and the texts should change to white. When Sunny mode is chosen, the background should change to light blue and texts should be in black.
// input 1
// const blueRadio = document.getElementById("blue")
// const greenRadio = document.getElementById("green")
// const purpleRadio = document.getElementById("purple")
// const sunnyRadio = document.getElementById("sunny")
// const nightModeRadio = document.getElementById("nightmode")

// // blue function
// function BlueRadio() {
//     document.body.style.backgroundColor = "blue";
//     document.body.style.color = "black";
// }
// blueRadio.addEventListener("click", BlueRadio)


// // green function
// function GreenRadio() {
//     document.body.style.backgroundColor = "green";
//     document.body.style.color = "black";
// }
// greenRadio.addEventListener("click", GreenRadio)

// // purple function
// function PurpleRadio() {
//     document.body.style.backgroundColor = "purple";
//     document.body.style.color = "black";
// }
// purpleRadio.addEventListener("click", PurpleRadio)

// // sunny function
// function SunnyRadio() {
//     document.body.style.backgroundColor = "yellow";
//     document.body.style.color = "black";
// }
// sunnyRadio.addEventListener("click", SunnyRadio)
// // sunny function
// function NightModeRadio() {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
// }
// nightModeRadio.addEventListener("click", NightModeRadio)
const radioButtons = [
    { id: 'blue', color: 'blue', textColor: 'black' },
    { id: 'green', color: 'green', textColor: 'black' },
    { id: 'purple', color: 'purple', textColor: 'black' },
    { id: 'sunny', color: 'yellow', textColor: 'black' },
    { id: 'nightmode', color: 'black', textColor: 'white' },
];

radioButtons.forEach((radio) => {
    const radioElement = document.getElementById(radio.id); //blue 
    if (radioElement) {
        radioElement.addEventListener('click', () => {
            document.body.style.backgroundColor = radio.color;
            document.body.style.color = radio.textColor;
        });
    }
});


// Question 2

// create a two functions for each buttons to increase and decrease the value in the middle
// note: the number shouldn't go below 0 and above 20
const minusbtn = document.getElementById("minus")
const plusbtn = document.getElementById("plus")
const result = document.getElementById("result")

let currentNumber = 0;
function minus(e) {
    e.preventDefault()
    // const number = document.getElementById("number");

    if (currentNumber > 0) {
        currentNumber--;
        result.textContent = currentNumber;
    } else {
        currentNumber = 0;
    }
}
function plus(e) {
    e.preventDefault()
    // let currentNumber = parseInt(plusbtn.textContent);
    if (currentNumber < 20) {
        currentNumber++;
        result.textContent = currentNumber;
    } else {
        currentNumber = 20;
    }
}
minusbtn.addEventListener("click", minus)
plusbtn.addEventListener("click", plus)

// Question 3

// Validate the Login form

// Change the background of the input boxes to pink if a user tries to submit empty form for each input box and if all the values are all fulfilled show a message on alert box saying "Form submitted"
// Select the form element
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputs = form.querySelectorAll('input');
    let allValid = true;


    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            input.style.backgroundColor = 'pink';
            allValid = false;
        } else {
            input.style.backgroundColor = '';
        }
    });


    if (allValid) {
        alert('Form submitted');
        form.reset();
    }
});