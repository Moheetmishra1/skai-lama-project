import React, { createContext, useEffect, useState } from 'react'
import Navbar from './Pages/Navbar'
import "../CSS/Projects.css"
import ProjectsFile from './ProjectsFile'
import {uploaduserproject} from "../../Redux/React_Slice/expense.reduxSlice"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProjectsWithNoFiles from './Projects/ProjectsWithNoFiles'
import ProjectsCreateFile from './Projects/ProjectsCreateFile'


export let CreateFileContext= createContext("Provider is not found in projects component.")
function Projects() {
  let {pDetails} = useSelector(store=>store.cart)
  let [projectCreateFileState,setPCF] = useState({display:"none",fileName:"",image:""})

 

  return (
    <div className='projectsBox'>
      <Navbar title="Upload"/>
         <div className='projects-upload-title'>Upload</div>

          <ProjectsCreateFile projectCreateFileState={projectCreateFileState} setPCF={setPCF} />

    <CreateFileContext.Provider value={{projectCreateFileState,setPCF}}>
         <div className="projects-fileList">
           {pDetails.files?.map((a,index)=>{
            return      <ProjectsFile key={index} profileImage={a.profileImage}  fileName={a.fileName}  />     

           })}

          {pDetails.files?.map((a,index)=>{
            return <ProjectsFile key={index} profileImage={a.profileImage} fileName={a.fileName}  />
           })}
                
         </div>
         </CreateFileContext.Provider>
         <ProjectsWithNoFiles />
       
    </div>
  )
}

export default Projects