import React from 'react'
import Navbar from './Pages/Navbar'
import "../CSS/Projects.css"
import ProjectsFile from './ProjectsFile'

function Projects() {
  return (
    <div className='projectsBox'>
      <Navbar title="Upload"/>
         <div className='projects-upload-title'>Upload</div>



         <div className="projects-fileList">
           
               <ProjectsFile />
               <ProjectsFile />
               <ProjectsFile />
         </div>
       
    </div>
  )
}

export default Projects