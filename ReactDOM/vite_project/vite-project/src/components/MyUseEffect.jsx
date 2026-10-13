import React, { useEffect, useState } from 'react'

export default function MyUseEffect() {
    const[counter,setCounter] = useState(0);
    useEffect(()=>{
        console.log("Counter Has Changed");
    },[counter]) ;
  return (
    <div>
        <h2>{counter}</h2>
        <button onClick={()=>{setCounter(counter+1)}}>Click Me</button>
    </div>
  )
}
