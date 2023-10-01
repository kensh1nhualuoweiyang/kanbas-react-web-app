function VariableAndConstants(){
    var functionScoped = 2;
    let blockScoped =5;
    const constan1 = functionScoped - blockScoped;
    return(
        <div>
            <h1>JavaScipt</h1>
            <h2>Variable and Constants</h2>
            functionScoped = {functionScoped}<br/>
            blockScoped = {blockScoped}<br/>
            constan1 = {constan1} <br/>
        </div>
    );
}
export default VariableAndConstants