

// randomNumber.js
const random = () => {
    return Math.floor(Math.random() * 10);
};

// Execute the function
const randomValue = random();
console.log(randomValue);

// Export the module
module.exports = { random };
