function PassingFunctions({func}){
    return(
        <div>
            <h2>Passing Functions</h2>
            <button className="btn btn-primary" onClick={func}>Invoke the Function</button>
        </div>
    )
    
}
export default PassingFunctions;