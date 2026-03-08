//
const box = document.getElementById("box");
const insideBtn = document.getElementById("insideBtn");

box.addEventListener("click",function(event){
    console.log("event type:",event.type);
    console.log("event target id:",event.Target.id);
    console.log("event current target id:",event.current.target.id);
});
innerBtn.addEventListener("click",function(event){
    console.log("event type:",event.type);
    console.log("event target id:",event.Target.id);
    console.log("event current target id:",event.current.target.id);
});

