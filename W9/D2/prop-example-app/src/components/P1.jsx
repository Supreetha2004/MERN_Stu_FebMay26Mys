import {React} from"react";
//Props basics
function WelcomeCard(props){
    return(
        <div className="card">
         <h2>Hello,{props.name}</h2>
         <p>Role:{props.role}</p>
        </div>
    )
}
//parent component
export function PropBasics(){
    return(
        <>
        <WelcomeCard name="Rakesh" role="React develper"/>
        <WelcomeCard name="Developer" role="UI/UX develper"/>
        </>
    )
}