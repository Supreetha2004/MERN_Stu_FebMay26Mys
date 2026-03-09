// finally
// function example(){
//     try{
//         console.log("example in try block");
//         return "try_return";
//     }
//     finally{
//         console.log("This is printed!");
//     }
// }
//  console.log("example result: ",example());

// return in catch block and still not finally
function example1() {
    try {
        try {
            throw new error("new error");
        }
        catch (e) {
            console.log("example1:caught error");
            return 10;
        }
        finally {
            console.log("example 1: finally still run");
        }
    }
        catch (e) {
            console.log("example 1:",example1());
        }
}
console.log("example1:", example1());