const { log } = require('console');
const http = require('http');

// function rqListener(req, res) {

// }

// http.createServer(rqListener); 
    //   or
// http.createServer(function(req, res){

// });   or 

// const server = http.createServer((req, res) => {
//     console.log(req);
//     // process.exit();
// });


const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from the first trial of Node JS')
    res.write('</html>');
    res.end();
});


server.listen(3000);
// and done this is how we create  a function.

