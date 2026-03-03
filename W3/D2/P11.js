//Recursive function
// a function which calls itself

function factoril(n){
    if(n<1){
        return 1;
    }
    return n*factoril(n-1);
}