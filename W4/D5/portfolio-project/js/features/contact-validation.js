function initcontactvalidation(){
    const contactmodal = document.getElementById("contact-modal");
    const contactform = document.getElementById("contact-form");
    const contactname = document.getElementById("contact-name");
    const contactemail = document.getElementById("contact-email");
    const formmessage = document.getElementById("form-message");
    if(!contactmodal || !contactform || !contactname || !contactemail ||!formmessage){
        console.log("contact form elements not found");
        return;
    }
    contactform.addEventListener("submit",function(event){
        event.preventDefault();

        const name = contactname.value.trim();
        const email = contactemail.value.trim();

        formmessage.textContent=" ";
        formmessage.className="text-sm";

        //Name Validation
        if(name === ""){
            formmessage.textContent="name is required";
            formmessage.classList.add("text-red-500");
            contactname.focus();
            return;
        }
        if(name.length < 5){
            formmessage.textContent="name must be at least 5 chars";
             formmessage.classList.add("text-red-500");
            contactname.focus();
            return;
        }
        //email validation
        if(email === ""){
            formmessage.textContent="email is required";
            formmessage.classList.add("text-red-500");
            contactemail.focus();
            return;
        }
        const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailpattern.test(email)){
            formmessage.textContent="enter valid email";
            formmessage.classList.add("text-red-500");
            contactemail.focus();
            return;
        }
       formmessage.textContent="message submitted successfully";
       formmessage.classList.add("text-green-600");
       console.log("valid credentials:",{name:name,email:email});
       contactform.reset();
    });
    contactemail.addEventListener("input",function(){
        formmessage.textContent="";
    });
    
}