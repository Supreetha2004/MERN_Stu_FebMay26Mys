//getelementbyid
console.log("Document Oject:",document);
console.log("page title",document.title);

// const heading = document.getElementById("mainheading");
// console.log("heading text",heading.textContent);

//getelementbyclassName
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");
//getElementsByTagName
const spanTag = document.getElementsByTagName("span");

run.addEventListener("click",function(){
    for(let i=0;i<info.length;i++) {
        console.log(info[i].textContent);
        info[i].style.color="blue";
    }

    for(let i=0;i<spanTag.length;i++) {
        spanTag[i].style.backgroundColor="lightgreen";
    }
    //Query selector:returns the frist element 
//matching a css selector
const mainfristheading = document.querySelector(".mainheading");
mainfristheading.style.color="red";
});
//Query selector:returns the all elements matching the
//selector
const tasks = document.querySelectorAll(".task");
//task.style.color = "purple";
tasks.forEach(function(task){
    task.style.color = "purple";
})
