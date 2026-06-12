import { useState } from "react";
export default function MovieLoader(){
    const [isLoggedIn,setIsLoggedIn] = useState(true);
    return(
        <section>
            <h2>Movies</h2>
            isLoading ? <p> Loading Movies...</p>: <p> Movie loaded successfully</p>
            <button onClick={()=>{setIsLodding(!isLoggedIn);}}>Toggle Loading</button>
        </section>
    )
}