function ClickEvent(){
    const hello = () =>{
        alert("Hello Word!")
    }

    const good = () => {
        alert("Life if Good!")
    }

    return(
        <div>
            <h2>Click Event</h2>
            <button onClick={hello}>Click Hello 1</button>
            <button onClick={()=>hello()}>Click Hello 2</button>
            <button onClick={() => {
                hello()
                good();
            }}>Click Hello 3</button>
        </div>
    )
}
export default ClickEvent