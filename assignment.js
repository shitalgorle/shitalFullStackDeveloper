// const { write } = require("fs");
// const http = require("http");

// const server = http.createServer((request, res) => {
//     res.setHeader("Content-Type", "text/html");
//     res.write("<html>");
//     res.write("<head><title>students</title></head>")
//     res.write("<h1>Form Information</h1>")
//     res.write('<input type="text" placeholder="enter name" ></br> </br><input type="number" placeholder="enter password"> </br> </br><button>submit</button>');
//     res.write("<h1>Student List</h1>")
//     if (request.url === "/students") {

//         res.write(
//             "<ul><li>Shital</li><li>Aliya</li><li>Sneha</li><li>Riya</li><li>Akhil</li><li>Shubham</li></ul>"
//         );
//         res.write("</body>");
//         res.write("</html>")
//         return res;
//     }
// });

// const address = "127.0.0.1";
// const port = 5500;

// server.listen(port, address, () => {
//     console.log("Server is running at http://" + address + ":" + port);
// });




// const { write } = require("fs");
// const http = require("http");

// const server = http.createServer((request, res) => {
//     res.setHeader("Content-Type", "text/html");

//     if (request.url == "/") {
//         res.write("<html>");
//         res.write("<head><title>students</title></head>")
//         res.write("<h1>Form Information</h1>")
//         res.write("<form action = '/ create student ></form>")
//     }
//         res.write('<input type="text" placeholder="enter name" ></br> </br><input type="number" placeholder="enter password"> </br> </br><button>submit</button>');
        
//     }
//     else if (request.url === "/students") {
//         res.write("<h1>Student List</h1>")
//         res.write(
//             "<ul><li>Shital</li><li>Aliya</li><li>Sneha</li><li>Riya</li><li>Akhil</li><li>Shubham</li></ul>"
//         );
//         res.write("</body>");
//         res.write("</html>")
//         return res;
//     }
//     else if ( request.url == "/create-student" && request.method == "POST"){
//         let body = "";
//         request.on("data", (chunk) => {
//             body = body + chunk.toString();
//             console.log(body);
//         });
//         request.on("end",() => {
//             console.log("DATA Submitted  = " + body);  
//         });
//         request.on("err",() => {});
//     }
// });

// const address = "127.0.0.1";
// const port = 5500;

// server.listen(port, address, () => {
//     console.log("Server is running at http://" + address + ":" + port);
// });



const { write } = require("fs");
const http = require("http");

const server = http.createServer((request, res) => {
   res.setHeader("Content-Type", "text/html");
   if(request.url ==="/students") {
    res.write("<html>");
    res. write ("<head><title>students</title></head>")
    res.write("<formv></form>");
    res.write("</body>");
    res.write("</html>")
    res.end();
    return res;
   }else if (request.url === "/create student" && request.method === "post"){
    let body = "";
    request.on("data", (chunk) => {
        body = body + chunk.tostring();
        console.log(body);
    });
    request.on("end", () => {
        console.log("DATA Submitted = " + body);
    });
    request.on ("err" , (err) => {});
   }else{
    res.write("<html>")
      res. write ("<head><title>students</title></head")
      res.write("<body>${body<h1>404<h1>")
      res.write("</body>")
      res.write("</html>")
      res.end()
   }
});

const address = "127.0.0.1";
const port = 5500;

server.listen(port, address, () => {
    console.log("Server is running at http://" + address + ":" + port);
});


