//React Event Objects
//what is it?
//React automatically passes an event object to event handlers
//This objects contains detalis about the event
//eg:input field:event.target.value
//event:info about the input change
//event.target:the html input element

import { useState } from "react";

//event.target.value:the current text typed by the user
export function EventObject(){
    const [text,setText] = useState('');
    const handleChange = (event) => {
        const currentValue = event.target.value;
        console.log(currentValue);
        setText(currentValue);
    };
    return(
        <section>
            <h2>Event objects</h2>
            <input type="text" 
            value={text} 
            onChange={handleChange}
            placeholder="Type something"
            />
            <p>You typed:{text}</p>
        </section>
    );
}