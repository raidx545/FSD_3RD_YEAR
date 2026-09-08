import React from 'react'

export default function Details(){
  const roll = "1"
  const name = "My name is Raj" 
  const branch = "CSE"
  const section = "24"
  const skills = "Python, JAVA, DSA, Agentic AI"
  const source = "https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?t=st=1788839446~exp=1788843046~hmac=dbf1fb85382b9a244b1b396db772a30b8c476a428a64c3e5d2a62cd5d350043f&w=2000"
  return(
    <>
      <h1>ABES ENGINNERING COLLEGE</h1>
      <center><img src={source} height="100px" width="100px" alt='readme'/></center>
      <h2>Roll: {roll}</h2>
      <h2>Name : {name}</h2>
      <h2>Branch: {branch}</h2>
      <h2>Section: {section}</h2>
      <h2>Skills: {skills}</h2>
    </>

  )
}
