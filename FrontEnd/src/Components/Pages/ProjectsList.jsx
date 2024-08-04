import React, { useState } from 'react'
import "../../CSS/ProjectsList.css"
import Project from '../Project'
import { useSelector } from 'react-redux'

function ProjectsList({lists, updateProjectName}) {
    let {projects} = useSelector(store=>store.cart)






console.log("rendering projectlist",projects);

  return (
    <div style={{display:lists!="none"?"grid":"none"}} className='projectsList-Box'>

        <div className='projetcList-header'>
            <div className="projectList-title">
            Projects 
            </div>
        <div className="projectsList-createProject"  onClick={updateProjectName}>
                    <svg   width="38" height="38" className='projectsList-plus' viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M16.9536 28.0169H20.641V20.6429H28.0157V16.9559H20.641V9.58186H16.9536V16.9559H9.57881V20.6429H16.9536V28.0169ZM18.7973 37.2345C16.2468 37.2345 13.85 36.7503 11.6069 35.7818C9.36372 34.8133 7.41247 33.5001 5.75315 31.8422C4.09383 30.1831 2.78051 28.232 1.81318 25.9891C0.845857 23.7461 0.361581 21.3496 0.360352 18.7994C0.360352 16.2492 0.844628 13.8527 1.81318 11.6097C2.78173 9.36678 4.09506 7.41574 5.75315 5.75658C7.41247 4.09742 9.36372 2.78423 11.6069 1.817C13.85 0.849776 16.2468 0.365548 18.7973 0.364319C21.3477 0.364319 23.7445 0.848547 25.9877 1.817C28.2308 2.78546 30.1821 4.09865 31.8414 5.75658C33.5007 7.41574 34.8147 9.36678 35.7832 11.6097C36.7518 13.8527 37.2354 16.2492 37.2342 18.7994C37.2342 21.3496 36.7499 23.7461 35.7814 25.9891C34.8128 28.232 33.4995 30.1831 31.8414 31.8422C30.1821 33.5014 28.2308 34.8152 25.9877 35.7836C23.7445 36.7521 21.3477 37.2357 18.7973 37.2345Z" fill="#F8F8F8"/>
                    </svg>
                    <p className='projectList-createproject-text'>Create New Project</p>
        </div>
        </div>
       
               {projects.map(a=>{
                return <Project key={a._id} {...a}  />
               })} 





    </div>
  )
}

export default ProjectsList