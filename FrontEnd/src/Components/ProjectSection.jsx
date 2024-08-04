import React from 'react'
import Menu from './Menu'
import File from './Files/File'
import "../CSS/ProjectSection.css"
import "../CSS/Menu.css"

function ProjectSection() {
  return (
    <div className='projectSectionBox'>
        <Menu />
        <File />
    </div>
  )
}

export default ProjectSection