// innerText & textcontent
//innertext:visible rendered text only
//textcontent:all text nodes regardless of css
//innerHTML:allows reading or writing html markup
const message = document.getElementById("message");
const textcontent = document.getElementById("textcontentBtn");
document.getElementById("innerTxtBtn").addEventListener("click",function(){
    message.innerText="upadate using innertext";
});
document.getElementById("textcontentBtn").addEventListener("click",function(){
    message.innerText="upadate using textcontent";
});
document.getElementById("resetBtn").addEventListener("click",function(){
    message.innerText="orginal message";
});
const box = document.getElementById("box");
document.getElementById("innerHTMLBtn").addEventListener("click",function(){
    box.innerHTML="<strong>orginal</strong>content";
});



