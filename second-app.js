// const http = require("http");
// function returnFunction(x){
//     return 1000;
//     return 200;
// }

// let x = returnFunction();
// let y = returnFunction();
//     console.log("THE VALUE OF X =" + x + "& value of y =" + y);



// function addTwoNumberArithmatic(x,y,action){
//     if(action == "add"){
//         return x + y;
//     }
//     else if(action == "sub"){
//         return x - y;
//     }
//     else if(action == "mult"){
//         return x * y;
//     }
//     else if(action == "div"){
//         return x / y;
//     }
// }

// let z = addTwoNumberArithmatic(2,10,"sub");
// console.log("THE VALUE OF Z = " + z);


// function addTwoNumberArithmatic(x,y,action){
//     if(action == "add"){
//         return x + y;
//     }
//     else if(action == "sub"){
//         return x - y;
//     }
//     else if(action == "mult"){
//         return x * y;
//     }
//     else if(action == "div"){
//         return x / y;
//     }
// }

// let z = addTwoNumberArithmatic(2,10,"mult");
// console.log("THE VALUE OF Z = " + z);


// function addTwoNumberArithmatic(x,y,action){
//     if(action == "add"){
//         console.log(x + y);
//         return x + y;
//     }
//     else if(action == "sub"){
//         console.log(x - y);
//         return x - y;
//     }
//     else if(action == "mult"){
//         let a = x * y;
//         console.log(x * y);
//         return a;
//     }
//     else if(action == "div"){
//         console.log(x / y);
//         return x / y;
//     }
// }

// let z = addTwoNumberArithmatic(2,10,"mult");
// console.log("THE RESULT IS  = " + z);


// function reverseString(str){
//     let x = str.split("").reverse().join("");
//     console.log(x);
// }
// reverseString("shital");


// function reverseString(str){
//     let x = str.split("");
//     let y =x.reverse()
//     let z =y.join("");
//     console.log(z);
// }
// reverseString("shital");


// function reverseString(str,abc){
//     let x = str.split("");
//     let y =x.reverse()
//     let z =y.join("");
//     console.log(z);
//     if(abc){
//     abc(z);
// }
// }
// reverseString("shital");


// function reverseString(str,abc){
//     let x = str.split("");
//     let y =x.reverse()
//     let z =y.join("");
//     console.log(z);
//     if(abc){
//     abc(z);
// }
// }
// function abc1(z){
//     console.log("dhoom =" + z);
// }
// reverseString("shital", abc1);

// function reverseString(str,abc){
//     let x = str.split("");
//     let y =x.reverse()
//     let z =y.join("");
//     console.log(z);
//     if(abc){
//     abc(z);
// }
// }
// function abc1(z){
//     let a = 100;
//     let b = 200;
//     console.log("dhoom =" + z + a + b);
// }
// reverseString("shital", abc1);


// function reverseString(str,abc){
//     let x = str.split("");
//     let y =x.reverse()
//     let z =y.join("");
//     console.log(z);
//     if(abc){
//     abc(z);
// }
// }
// function abc1(z){
//     let a = 100;
//     let b = 200;
//     let c = "xyz";
//     console.log("dhoom =" + z + a + b + c);
// }
// reverseString("shital", abc1);


// function callbackFunction(x){
//     x(100);
// }
// callbackFunction((y)=>{
//     console.log(y);
// });


// function callbackFunction(x){
//     x(100);
// }
// callbackFunction((y)=>{
//     let a = 100;
//     let b = 200;
//     console.log(y + a + b);
// });



// const varun = require("http");

// let server = varun.createServer((request,response) =>{
//     response.write("<h1>Hello World<h1>");
//     response.end();
// });
// server.listen(3000, "127.0.0.1"); 



const { write } = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
   response.setHeader("Content-Type", "text/html");
   if(request.url ==="/students") {
    response.write("<html>");
    response. write ("<head><title>students</title></head>")
    response.write(
        "<ul><li>shubham</li></ul>"
    );
    response.write("</body>");
    response.write("</html>")
    return response;
   }
});

const address = "127.0.0.1";
const port = 40000;

server.listen(port, address, () => {
    console.log("Server is running at http://" + address + ":" + port);
});


// const varun = require('http');

// let shamu = varun.createServer((request,response)=>{
// response.write("<h1>Hello World<h1>");
// response.end();
// });

// const address = "127.0.0.1";
// const port = 4000;

// shamu.listen(port,address,()=>{
//     console.log("server is running at http://" + address + ":" + port);
// });


