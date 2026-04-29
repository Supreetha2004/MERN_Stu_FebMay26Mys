//container/wrapper component
import {React} from "react";
//Children is a special React prop
//It holds nested JSX passed between components tags
//It helps create reusable wrapper/layout components
function Container({children}){
    return(
        <div className="card">
          {children}
        </div>
    );
}

//Parent component
//<> menas the hold the child tag
export function PropsChildren(){
    return(
        <>
        
           <Container>{/*child*/}
            <h3>Frist child elements is Nested approach</h3>
           </Container>

        </>
    )
}