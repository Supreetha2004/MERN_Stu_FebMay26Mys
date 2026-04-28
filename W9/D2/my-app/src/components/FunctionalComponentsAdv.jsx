import {React} from "react";
//list rendering
const users = [
    {id:1,role:"student"},
    {id:1,role:"Trainer"},
    {id:1,role:"Admin"},
    {id:1,role:"Developer"},
];
export function FunctionComp(){
    return(
        <div>
            <h2>Functional componets</h2>
            {/*list rendering */}
            {users.map((user)=>(
                <p key={user.id}classname="pclass">
                   {user.role}
                </p>
            ))}
        </div>
    );
}