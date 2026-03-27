// Handling different GET routes
const http = require("http");

const server = http.createServer(function(req,res){
    if(req.method === "GET" && req.url === "/"){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("Home Page / Dashboard");
        return;
    }
    if(req.method === "GET" && req.url === "/about"){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("About route.Welcome to About Us Page.");
        return;
    }
     if(req.method === "GET" && req.url === "/Products"){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("About route.Welcome to Products Page.");
        return;
    }
     if(req.method === "GET" && req.url === "/Users"){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("Returning all Users.");
        return;
    }
    //POST = create
    //curl -X POST http://localhost:3001/users 
    //curl:client URL:free open src cli tool used to tranfer data to or from a server using various network protocal
     if(req.method === "POST" && req.url === "/Users"){
        res.writeHead(201,{"Content-type":"text/plain"});
        res.end("New User Created.");
        return;
    }

//Unknown route fallback
res.writeHead(404,{"content-type":"text/plain"});
res.end("Route not found.");

});
server.listen(3001,function(){
    console.log("Server is runing at http://localhost:3001");
})