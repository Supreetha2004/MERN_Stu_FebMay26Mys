import { use } from "react";
import { useState } from "react";
export default function AuthStatus(){
    const[isLoggedIn,setIsLoggedIn] = useState(false);
    return(
        <section>
            <h2>Authentication status</h2>
            <p>
                current status:
                {
                    isLoggedIn ? "Logged In" : "Guest User"
                }
            </p>
            <button onClick={()=>{
                setIsLoggedIn(isLoggedIn);
            }}>
             { isLoggedIn ? "Logged out" : "login"}
            </button>
        </section>
    )
}