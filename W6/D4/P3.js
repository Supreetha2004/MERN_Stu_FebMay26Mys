//Inspecting request details in an HTTP server
const http = require("http");
const server = http.createServer(function(req,res){
    //writeHead() set the response status code and headers
    res.writeHead(200,{"Content-Type":"text/plain"});
    //end() sends the response body and closes the response
    //req.method tells the http method,Such as GET and POST
    res.end("Method:"+req.method+"\nURL:"+req.url);
});
//listen() binds the server to a port and starts accepting request
server.listen(3001,function(){
    console.log("Server is runing at http://localhost:3001");
})