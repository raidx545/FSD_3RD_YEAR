import React from 'react'

function ProfilePic(props){
  return(
    <>
      <div >
        <img src={props.pic} height="100px" width="100px" alt='profile-pic'/>
      </div>
    </>
  )
}

export default function Details({student}){
  return(
    <>
      <span style={ { margin:"20px" , border:"1px solid red", backgroundColor:"black",color:"white", padding:"20px", width:"300px"}}>
        <ProfilePic pic = {student.pic} />
        <h2>{student.college}</h2>
        <h2>Roll: {student.roll}</h2>
        <h2>Name : {student.name}</h2>
        <h2>Branch: {student.branch}</h2>
        <h2>Section: {student.section}</h2>
        <h2>Skills: {student.skills}</h2>
      </span>
    </>

  )
}
