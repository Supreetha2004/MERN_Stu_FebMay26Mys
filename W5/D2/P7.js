//callback handing with named functions
function loadUser(next){
    setTimeout(function(){
        console.log("step1: user loaded.");
        next();
    },400);
}

function loadorders(next){
    setTimeout(function(){
     console.log("step2: oders loaded");
     next();
    },400);
}
function loadpayments(next){
    setTimeout(function(){
     console.log("step3:payment loaded");
     next();
    },400);
}
function loadshipments(next){
    setTimeout(function(){
        console.log("step4:shepment loaded.");
        console.log("same flow but easier to read");
    },400);
}
loadUser(function(){
    loadorders(function(){
        loadpayments(function(){
            loadshipments(function(){

            });
        });
    });
});