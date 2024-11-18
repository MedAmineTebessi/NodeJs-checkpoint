const http = require('http');
const fs = require('fs');
const { error } = require('console');

http.createServer(function (req, res) {
    res.write("<h1>Hello Node!!!!</h1>");
    res.end
}).listen(3000,console.log("server running on port 3000"));

fs.readFile("./welcome.txt","utf-8", (err,data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
} 
);