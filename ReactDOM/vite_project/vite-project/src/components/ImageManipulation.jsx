import { useState } from "react";
import image from "../images/image3.png"
function ImageManipulation(){
    const [height,setHeight] = useState(400);
    const [width,setWidth] = useState(400);
    const [imageAngle,rotateAngle] = useState(0);
    function increseHeight(){
        setHeight(height+10);
    }
    function increaseWidth(){
        setWidth(width+10);
    }
    function rotate(){
        rotateAngle(imageAngle+90);
    }
    return(
        <>   
        <h2>Image Manipulator</h2>
            <div>
                <img src={image} alt="" height={height+"px"} width={width+"px"} style={{transform:`rotate(${imageAngle}deg)`}} />
            </ div> 
            <div>
                <button onClick={increseHeight}>Increase Height</button>
                <button onClick={increaseWidth}>Increase Wdth</button>
                <button onClick={rotate}>Rotate</button>
            </ div>
        </>
    )
}

export default ImageManipulation ;