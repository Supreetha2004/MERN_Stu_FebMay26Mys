//Event Delegation in React
//Instead of attaching a seperate click handler to every
//element we attach on handler to the parent
//Parent -> child 
//Bubble up to the parent
//why is it used?
//Reduces repeated event handlers
//Code is clear and manageble

import { useState } from "react";

//It useful when rendering many similar items
export function EventDelegation(){
    const [selectedItem,setSelectedItem]=useState('None');
    //Parent click handler
    const handleListClick = (event)=> {
        const clickedItem=event.target.closest('li[data-item]');
    if(!clickedItem) return;
    const itemName = clickedItem.dataset.item;
    console.log('Clicked Item: ',itemName);
    setSelectedItem(itemName);
    };
    return(
        <section>
            <h2>Event Delegation</h2>
            <ul onClick={handleListClick}>
               <li data-item="Laptop">Laptop</li>
               <li data-item="Mobile phone">Mobile Phone</li>
               <li data-item="Car">Car</li>
            </ul>
            <p>Selected:{selectedItem}</p>
        </section>
    )
}