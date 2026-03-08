// even delegation

const tasklist = document.getElementById("tasklist");
const addtask = document.getElementById("addtask");
let taskcount = 3;
tasklist.addEventListener("click", function (event) {
    if (event.target.classlist.contains("deleteBtn")) {
        console.log("delete button clicked for:",
            event.target.parentElement.textcontent.trim()
        );
        event.target.parentElement.remove();
    }
});

addtask.addEventListener("click",function(){
    taskcount++;
    const li = document.createElement("li");
    li.innerHTML = "task" + taskcount +
    '<button class="deleteBtn">Delete</button>';
    tasklist.appendChild(li);
    console.log("new task created");
});