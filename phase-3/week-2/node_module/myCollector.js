// const first  = require('./myFirst')
// const second = require('./mySecond')



// const result1 = first(5);
// const result2 = second(5);


// console.log(result1);
// console.log(result2);


const fs = require('fs');
const first = require('./myFirst')
const second = require('../mySecond')

const result1 = first(5);
const result2 = second(5);

console.log(result1);
console.log(result2);

const result14First = first(14);
const result14Second = second(14);

fs.writeFileSync('results.txt', `The value of 14 when passed through the myMultiplier function is ${result14First}\n`);


fs.appendFileSync('results.txt', `The value of 14 when passed through the myMultiplier function is ${result14Second}\n`);
