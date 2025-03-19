// const arith = require ("./module-test");
// const http = require("http");

// const server = http.createServer((req,res) =>{
//     res.writeHead(200,{ "Content-Type": "text/html" });
//     res.write("<h1>Hello World</h1>");
//     res.end();

//     console.log(
//         arith.sayhello(),
//         arith.add(1,2),
//         arith.sub(4,2), 
//     );
// });
// server.listen(3000);



// const arith = require ("./module-test");

// arith.sayhello();
// arith.add(1,2);
// arith.sub(4,2);


// const arith = require("./module-test");
// const http = require("http");

// // let x = 0; initialize x with a starting value

// const server = http.createServer((req, res) => {
//     //  x += 1;  Increment x by 1 every time a request is recieved
//     //  set response header with status 200 and content type as HTML
//     res.writeHead(200, { "Content-Type": "text/html" });
//     // write hello word to the response
//     res.write("<h1>Hello World</h1>");
//     res.end();

//     arith.sayhello();
//     arith.add(1, 2);
//     arith.sub(4, 2);

// });
// server.listen(3000);


const http = require("http");
let x = 0;
const server = http.createServer((req, res) =>{
    x += 1;
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Hello World</h1>");
    res.write(`<h2>${x}</h2>`);
    res.end();
});

server.listen(3600, () => {
    console.log("Server is running on port 3600");
});



// const arith = require("./module-test");
// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write('<h1>Hello World</h1>');
//     res.end();
//     console.log(
//         arith.sayHello(),
//         arith.add(1, 2),
//         arith.subtract(4, 2),
//         arith.subtract(5, 2),
//     );
// });
// server.listen(3000);



