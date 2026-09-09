import React from "react";
import Details from "./Details";
import image1 from "../images/image1.png"
import image2 from "../images/image2.png" ;
import image3 from "../images/image3.png"

export default function ICardGallery(){
    
    const user1 = {
        pic : image1,
        college : "ABES ENGINEERING COLLEGE",
        name : "Raj",
        roll : 2,
        branch : "CSE",
        section : "24",
        skills : "HTML"
    };
    const user2 = {
        pic : image2,
        college : "ABES ENGINEERING COLLEGE",
        name : "Rameshwar",
        roll : 3,
        branch : "CSE",
        section : "24",
        skills : "CSS"
    };
    const user3 = {
        pic : image3,
        college : "ABES ENGINEERING COLLEGE",
        name : "Raidx",
        roll : 4,
        branch : "CSE",
        section : "24",
        skills : "JS"
    };

    return(
        <>  
            <div style={{display:"flex",flexDirection:"row"}}>
                <Details student = {user1} ></Details>
                <Details student = {user2} ></Details>
                <Details student = {user3} ></Details>
            </div>    
        </>
    )
}