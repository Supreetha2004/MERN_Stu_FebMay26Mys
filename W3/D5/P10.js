const { createElement } = require("react");

const clickBtn = document.getElementById("clickBtn");
const demoinput = document.getElementById("demoinput");
const runclick = document.getElementById("runclick");
const runMouseover = document.getElementById("runMouseover");
const runkeydown = document.getElementById("runkeydown");
const runduplicate = document.getElementById("runduplicate");
const hoverBox = document.getElementById("hoverBox");

clickBtn.addEventListener("click",function(e){
    console.log("e type",e.type);
    console.log("instance mouse event",e instanceof MouseEvent);
});

demoinput.addEventListener("keydown",function(e){
    if(e.key === "enter"){
        console.log("enter key down");
    }
});

runclick.addEventListener("click",function(){
    clickBtn.click();
});

runMouseover.addEventListener("click",function(){
    hoverBox.dispatchEvent(new MouseEvent("mouseover"));
    console.log("dispatching MouseEvent");
});

hoverBox.addEventListener("mouseover",function(){
     console.log("programmaticaly triggered mouseover");
});


runkeydown.addEventListener("click",function(){
    demoinput.dispatchEvent(new KeyboardEvent("keydown",
        {key:"Enter"}
    ));
});

runduplicate.addEventListener("click",function(){
    const temp = document.createElement("button");
    //temp.textContent = "click me!";
    temp.innerHTML = "hello";
    document.body.appendChild(temp);
});