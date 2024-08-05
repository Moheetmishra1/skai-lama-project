import React, { useEffect } from 'react'
import Navbar from './Pages/Navbar'
import "../CSS/Projects.css"
import ProjectsFile from './ProjectsFile'
import {uploaduserproject} from "../../Redux/React_Slice/expense.reduxSlice"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProjectsWithNoFiles from './Projects/ProjectsWithNoFiles'

function Projects() {
  let {pDetails} = useSelector(store=>store.cart)
  // let {projectname} = useParams() 
// console.log(pDetails.files !=="undefined" && pDetails.files[1]);
console.log(pDetails);



  return (
    <div className='projectsBox'>
      <Navbar title="Upload"/>
         <div className='projects-upload-title'>Upload</div>
        {/* <img src={pDetails.files !=="undefined" && pDetails.files[1].profileImage} alt="nooooooooo" /> */}


         <div className="projects-fileList">
           {pDetails.files?.map((a,index)=>{
            return <ProjectsFile key={index} profileImage={a.profileImage} fileName={a.fileName}  />
           })}

          {pDetails.files?.map((a,index)=>{
            return <ProjectsFile key={index} profileImage={a.profileImage} fileName={a.fileName}  />
           })}
              
         </div>
         <ProjectsWithNoFiles />
       
    </div>
  )
}

export default Projects