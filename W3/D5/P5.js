const startBtn = document.getElementById("startBtn");
const removeBtn = document.getElementById("removeBtn");

function handleclick(){
    console.log("startBtn clicked");
}

startBtn.addEventListener("click",handleclick);

removeBtn.addEventListener("click",function(){
    startBtn.removeEventListener("click",handleclick);
    console.log("click listener removed from startBtn");
});