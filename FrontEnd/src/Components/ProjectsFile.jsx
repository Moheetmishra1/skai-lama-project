import React from 'react'
import "../CSS/ProjectsFile.css"

function ProjectsFile({fileName,profileImage}) {

  const createFile = async ()=>{
    
  }


  return (
    <div className="projects-files" onClick={createFile}>
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