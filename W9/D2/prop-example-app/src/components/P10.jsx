//Passing Function as Props
function ChildButton({onGreat}){
return(
    <button onClick = {onGreat}>
        Invoke parent Function
    </button>
)
}
export function FunctionProps(){
    const greet = () => alert('Hello from parent function');
    return(
        <>
        <h2>Passing function as props</h2>
        <ChildButton onGreat={greet}/>
        </>
    )
}