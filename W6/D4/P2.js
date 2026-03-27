// Creating a simple http server
const http = require("http");
//createserver():creates a HTTP server instance
//Accepts a callback with two important objects:
//1.Req : incomeing request details
//2.res : outgoing response control
const server = http.createServer(function(req,res){
    //writeHead() set the response status code and headers
    res.writeHead(200,{"Content-Type":"text/plain"});
    //end() sends the response body and closes the response
    res.end("Hello form NodeJS HTTP server.");
});
//listen() binds the server to a port and starts accepting request
server.listen(3000,function(){
    console.log("Server is runing at http://localhost:3000");
});


