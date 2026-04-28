import React,{ Component } from "react";
export class ClassComponentBasics extends Component{
    //1.class extends React.Component
    //state,lifecyle methods,pros,setState()
    render(){
        //render():Return JSX describing what to show
        //called whenever componet needs to update
        return(
            <>
              <h2>Class Components</h2>
              <p>Class components use render() and support lifecyle methods.</p>
            </>
        )
    }
}