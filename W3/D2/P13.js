// function scope
function scope(){
    var insideVar = 10;
    let insidelet = 20;
    const insideConst = 30;
    // console.log(insideVar);
    // console.log(insidelet);
    // console.log(insideConst);
}
scope();
    console.log(insideVar);//function scoped
    // console.log(insidelet);//block scoped
    // console.log(insideConst);//block scoped

    function varfunctionScoped(){
        if(true){
            var x = 40;
            let y = 50;
            console.log("y: ",y);

        }
       console.log("x: ",x);
       
    }
    varfunctionScoped();