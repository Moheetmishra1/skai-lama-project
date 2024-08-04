import React from 'react'
import Menu from './Menu'
import "../CSS/ProjectSection.css"
import "../CSS/Menu.css"
import { Outlet } from 'react-router-dom'
import "../CSS/ProjectSection.css"

function ProjectSection() {
  return (
    <div className='projectSectionBox'>
        <Menu />
     
     <div>
        <Outlet />
     </div>
       
    </div>
  )
}

export default ProjectSection