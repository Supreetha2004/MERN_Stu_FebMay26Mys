//Custom error class created for error handling
class CustomError extends Error{
    constructor(message,statusCode){
        super(message);//constructor create the objrct in the customError and  super 
        this.statusCode = statusCode;

    }
}
module.exports = CustomError;