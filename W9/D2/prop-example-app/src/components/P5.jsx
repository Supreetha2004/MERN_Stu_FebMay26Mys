import React,{useState} from'react';
//state lifiting:moveing shared state up to the close common parent
//we use this:
//Multiple child components need to share the same data
//Props drilling becomes too complex
//child components need to update the same data
function NameInput1({value,onchange}){
    return(
        <div>
            <label>Input 1:</label>
            <input value={value}
            onchange = {(e)=>onchange(e.target.value)}
            placeholder="Type a name..."
            />
        </div>
    )
}
//second child component
function NameInput2({value,onchange}){
    return(
        <div>
            <label>Input 2:</label>
            <input value={value}
            onchange = {(e)=>onchange(e.target.value)}
            placeholder="This gets update..."
            />
        </div>
    )
}
//Parent component
export function SharedStateParent(){
    const [name,setName123] = useState('manuu');
    return(
        <div>
            <h3>Shared state demo</h3>
            <NameInput1 value={name}onchange={setName123}/>
            <NameInput2 value={name}onchange={setName123}/>
            <div>
                <strong>Current Name:</strong>{name || 'Nothing typed yet'}
            </div>
        </div>
    );
}