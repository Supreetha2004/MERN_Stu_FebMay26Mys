
//Props vs state
//props:data passed from parent to child componet
//data comes from outside the component
//are read-only
//are used for passing data between components
//state:data managed inside a component
//belongs to the component itself
//can be modified/changed
//setter method is used to modify data
import {userState} from "react";
function Child({title}){
    return <p>Props:{title}</p>
}
export function PropsState(){
    const [stateValue,setStateValu] = userState('Local State');
    return(
        <>
        <h3>Props vs State</h3>
        <Child title="Parent data" />
        <p>State:{setValue}</p>
        <button onClick={()=>setStateValue('This is new state')}>
            Update State
        </button>
        </>
    )
}