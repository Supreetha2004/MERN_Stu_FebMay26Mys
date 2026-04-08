//Middleware for req log
function logMiddleware(req,res,next){
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}
module.exports = logMiddleware;
//Tak:write the log to a file along with timestamp with timestamp with both req & res
