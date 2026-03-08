const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const innerbutton = document.getElementById("inner button");

outer.addEventListener("click",function(){
    console.log("outer div clicked");
});

inner.addEventListener("click",function(){
    console.log("inner div clicked");
});

innerbutton.addEventListener("click",function(event){
    console.log("inner button clicked");
    event.stopPropagation();
    console.log("propogation stopped at button");
});