const { write } = require("fs");
const http = require("http");

const server = http.createServer((request, res) => {
    res.setHeader("Content-Type", "text/html");

    if (request.url == "/") {
        res.write("<html>");
        res.write("<head><title>students</title></head>")
        res.write("<h1>Form Information</h1>")
        res.write("<form>")
        res.write('<input type="text" placeholder="enter name" ></br> </br><input type="number" placeholder="enter password"> </br> </br><button>submit</button>');
        res.write("</form>")
    }
    else if (request.url === "/students") {
        res.write("<h1>Student List</h1>")
        res.write(
            "<ul><li>Shital</li><li>Aliya</li><li>Sneha</li><li>Riya</li><li>Akhil</li><li>Shubham</li></ul>"
        );
        res.write("</body>");
        res.write("</html>")
        return res;
    }
    else if (request.url === "/create student" && request.method === "post") {
        let body = "";
        request.on("data", (chunk) => {
            body = body + chunk.tostring();
            console.log(body);
        });
        request.on("end", () => {
            console.log("DATA Submitted = " + body);
            res.write("<html>")
            res.write("<head><title>students</title></head")
            res.write("<body> ${body} YOUR INPUT IS SUBMITTED</body>")
            res.write("</body>")
            res.write("</html>")
            res.end();
        });
        request.on("err", (err) => { });

    } 
    else {
        res.write("<html>")
        res.write("<head><title>students</title></head")
        res.write("<body>${body<h1>404<h1>")
        res.write("</body>")
        res.write("</html>")
        res.end();
    }

    });

const address = "127.0.0.1";
const port = 5000;

server.listen(port, address, () => {
    console.log("Server is running at http://" + address + ":" + port);
});