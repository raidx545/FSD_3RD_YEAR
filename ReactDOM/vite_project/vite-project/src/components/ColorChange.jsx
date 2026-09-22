import { useState } from "react"
function ColorChange1(){
    const[color,setColor] = useState("red");
    function changeColor(){
        if(color==="red"){
            setColor('green');
        }
        else if(color==='green'){
            setColor('blue');
        }
        else if(color==='blue'){
            setColor('red');
        }
    }
    return(
        <>
            <h1 style={{color:color}}>COLOR</h1>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

function ColorChange2(){
    const[red,setRed] = useState(0);
    const[green,setGreen] = useState(0);
    const[blue,setBlue] = useState(0);

    function changeColor(){
        const enteredRed = Number(document.getElementById("red").value);
        const enteredGreen = Number(document.getElementById("green").value);
        const enteredBlue = Number(document.getElementById("blue").value);
        setRed(enteredRed);
        setGreen(enteredGreen);
        setBlue(enteredBlue);
    }

    return(
        <div style={{backgroundColor:`rgb(${red},${green},${blue})`, padding:"30px"}}>
                <h2>Hey there</h2>
                <input type="text" id="red" placeholder="Enter Red Value" style={{padding:"10px"}}/>
                <input type="text" id="green" placeholder="Enter Green Value" style={{padding:"10px"}} />
                <input type="text" id="blue" placeholder="Enter Blue Value" style={{padding:"10px"}} />
                <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default ColorChange2 ;