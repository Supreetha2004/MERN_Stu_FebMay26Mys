//Updating objects and Arrays
import {useState} from "react";
export function UpdatingObjectsArraysState(){
    //user state
    const [user,setUser] = useState({
        name:'Rakesh',
        skill:'React'
    });
    const updateSkill = () => {
        setUser({
            ...user,//copies all existing propertics(name,skill)
            skill:'Advance React'
        });
    };
    return(
        <>
        <h2>Updateing objects state</h2>
        <p>{user.name}-{user.skill}</p>
        <button onClick={updateSkill}>Update Skill</button>
        </>
    )
}