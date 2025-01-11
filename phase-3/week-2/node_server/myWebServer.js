// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Request received and processed');
// });

// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });



const http = require('http');
const randomNumber = require('./randomNumber');

const server = http.createServer((req, res) => {
    const number = randomNumber.random();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Generated Random Number: ${number}`);
});

server.listen(1234, () => {
    console.log('Server running on port 1234');
});
