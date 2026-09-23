import { useState } from "react";

function Background(){
    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);
    function increaseRed(){
        setRed(red+10);
        if(red > 255) setRed(0) ;
    }
    function increaseGreen(){
        setGreen(green+10);
        if(green > 255) setGreen(0) ;
    }
    function increaseBlue(){
        setBlue(blue+10);
        if(blue > 255) setBlue(0) ;
    }
    function decreaseRed(){
        setRed(red-10);
        if(red < 0) setRed(255) ;
    }
    function decreaseGreen(){
        setGreen(green-10);
        if(green < 0) setGreen(255) ;
    }
    function decreaseBlue(){
        setBlue(blue-10);
        if(blue < 0) setBlue(255) ;
    }
    function randomBG(){
        setRed(Math.random()*255);
        setBlue(Math.random()*255);
        setGreen(Math.random()*255);
    }
    return(
        <>
            <div style={{backgroundColor:`rgb(${red},${green},${blue})`,height:"400px",border:"1px red solid" ,margin:"30px" }}>
                <div>
                    <button onClick={increaseRed} style={{padding:"20px",margin:"30px"}}>Increase Red</button>
                    <button onClick={increaseGreen} style={{padding:"20px",margin:"30px"}}>Increase Green</button>
                    <button onClick={increaseBlue} style={{padding:"20px",margin:"30px"}} >Increase Blue</button>
                </div>
                <div>
                    <button onClick={decreaseRed} style={{padding:"20px",margin:"30px"}}>Decrease Red</button>
                    <button onClick={decreaseGreen} style={{padding:"20px",margin:"30px"}}>Decrease Green</button>
                    <button onClick={decreaseBlue} style={{padding:"20px",margin:"30px"}} >Decrease Blue</button>
                </div>
                <div>
                    <button onClick={randomBG} style={{padding:"20px",margin:"30px"}}>Random BG Color</ button>
                </div>
            </div>
        </>
    )
}
export default Background ;