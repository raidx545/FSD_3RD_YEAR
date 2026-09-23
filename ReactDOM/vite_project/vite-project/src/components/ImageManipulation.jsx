import { useState } from "react";
import image from "../images/image3.png"
function ImageManipulation(){
    const [height,setHeight] = useState(400);
    const [width,setWidth] = useState(400);
    function increseHeight(){
        setHeight(height+10);
    }
    function increaseWidth(){
        setWidth(width+10);
    }
    return(
        <>   
        <h2>Image Manipulator</h2>
            <div>
                <img src={image} alt="" height={height+"px"} width={width+"px"} />
            </ div> 
            <div>
                <button onClick={increseHeight}>Increase Height</button>
                <button onClick={increaseWidth}>Increase Wdth</button>
            </ div>
        </>
    )
}

export default ImageManipulation ;