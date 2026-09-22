import { useState } from "react";


function MyState(){
    const[counter,setCounter] = useState(10);
    function increament(){
        setCounter(counter+1);
    }
    function decreament(){
        setCounter(counter-1);
    }
    return(
        <>
            <h2 style={{textAlign:"left"}}>Counter = {counter}</h2>
            <button onClick={increament} style={{width:"20%",padding:"10px",margin:"10px"}}>Increament</button>
            <button onClick={decreament} style={{width:"20%",padding:"10px",margin:"10px"}}>Decreament</button>
        
        </>
    );

}

export default MyState ;