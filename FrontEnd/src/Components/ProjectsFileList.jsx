import React from 'react'
import "../CSS/ProjectsFileList.css"
import "../CSS/Projects.css"
import "../CSS/ProjectsFile.css"
import ProjectsFile from './ProjectsFile'
import { useSelector } from 'react-redux'
import ProjectsFileListsWidget from './Projects/ProjectsFileListsWidget'
import ProjectsFileListShowList from './Projects/ProjectsFileListShowList'



function ProjectsFileList() {
  let {pDetails} = useSelector(store=>store.cart)

  return (
    // <div className='projectsFilesList'>
    <>

         <div className='projects-upload-title'>Sample Project</div>

         <div className="projects-fileList">
           {pDetails.files?.map((a,index)=>{
            return      <ProjectsFile key={index} profileImage={a.profileImage}  fileName={a.fileName}  />     

           })}
           </div>

           <ProjectsFileListsWidget />

            <ProjectsFileListShowList />
            
         
    </>
  )
}

export default ProjectsFileList