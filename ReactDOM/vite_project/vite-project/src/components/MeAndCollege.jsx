import { useState } from "react";

function MeAndCollege(){
    const[name,setName] = useState("Rishav");
    const[college,setCollege] = useState("ABES");
    function setProperties(){
        var collegeName = document.getElementById("college").value ;
        var yourName = document.getElementById("name").value ;
        setCollege(collegeName);
        setName(yourName);
    }

    return(
        <>
            <h1>Name : {name}</h1>
            <h1>College : {college}</h1>
            <input id="name" type="text" placeholder="EnterName" style={{padding:"20px",margin:"10px"}}/>
            <input id="college" type="college" placeholder="EnterCollegeName" style={{padding:"20px",margin:"10px"}} />
            <button onClick= {setProperties} >Set Properties</button>

        </>
    );
}

export default MeAndCollege ;