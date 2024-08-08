import React, { useContext } from 'react'
import "../CSS/ProjectsFile.css"
import { useCustomCreateFileContext } from '../Helper/context'
import ProjectsCreateFile from './Projects/ProjectsCreateFile'
import { CreateFileContext } from './Projects'

function ProjectsFile({fileName,profileImage}) {
  let {ProjectsCreateFile,setPCF}= useContext(CreateFileContext)
  // let {setPCF} = useCustomCreateFileContext()




  return (
    <div className="projects-files" onClick={()=>{
     setPCF({...ProjectsCreateFile,image:profileImage,fileName,display:"block"})}}>


      <div className="projectFile-pic">
        <img src={profileImage}  height="65px" width="65px" alt="image not found" />
      </div>
      <div className="projects-file-details">

        <div className="projects-files-text"> {fileName}</div>
      </div>
                        </div>
  )
}

export default ProjectsFile