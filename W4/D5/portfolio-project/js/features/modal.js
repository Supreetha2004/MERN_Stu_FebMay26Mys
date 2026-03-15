function initModel(){
    const modal = document.getElementById("contact-modal");
    const modalcontent = document.getElementById("modal-content");
    const modaltrigger= document.getElementById("modal-trigger");
    const modalclose= document.getElementById("modal-close");
    const formcancel= document.getElementById("form-cancel");

    if(!modal || !modalcontent || !modaltrigger ||!modalclose ||!formcancel){
        console.log("model elements not found");
        return;
    }
    function openmodel(){
        modal.classList.remove("hidden");

        setTimeout(function(){
            modalcontent.classList.remove("scale-95","opacity-0");
        },10);
    }
    function closemodal(){
        modalcontent.classList.add("scale-95","opacity-0");
        setTimeout(function(){
            modalcontent.classList.add("hidden");
        },200);
    }
    modaltrigger.addEventListener("click",openmodel);
    modalclose.addEventListener("click",closemodal);
    formcancel.addEventListener("click",closemodal);

    //close when clicking on backdrop
    modal.addEventListener("click",function(event){
        if(event.target === modal){
            closemodal();
        }
    });
    console.log("modal opened successfully");
}