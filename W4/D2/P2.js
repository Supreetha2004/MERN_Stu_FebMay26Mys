// create elements() & appendchild()

const list = document.getElementById("list");
let counter = 1;

document.getElementById("addBtn").addEventListener("click",
    function(){
        errmessage.textContent=" ";
        const li = document.createElement("li");
        li.textContent = "item" +counter++;
        list.appendChild(li);
    }
);
document.getElementById("rmBtn").addEventListener("click",
    function(){
        if(list.lastElementChild){
        list.removeChild(list.lastElementChild);
        }
        else{
            errmessage.textContent="no items are delete";
        }
    });