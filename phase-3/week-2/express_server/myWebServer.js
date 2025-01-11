
// const express = require('express');
// const app = express();
// const port = 1234;

// app.get('/', (req, res) => {
//     res.send('Request received and processed');
// });

// app.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// });



// const express = require('express');
// const { random } = require('./randomNumber');
// const app = express();
// const port = 1234;

// app.get('/', (req, res) => {
//     const randomNumber = random();
//     res.send(`Random Number: ${randomNumber}`);
// });

// app.listen(port, () => {
//     console.log('Server running at http://localhost:1234/');
// });


const express = require('express');
const { random } = require('./randomNumber');
const path = require('path');
const app = express();
const port = 1234;


app.use(express.static(path.join(__dirname, 'static')));


app.get('/', (req, res) => {
    const randomNumber = random();
    res.send(`Random Number: ${randomNumber}`);
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'apple-html-css-replica', 'about.html'));
});

app.listen(port, () => {
    console.log(`Server running at port ${port}/`);
});

