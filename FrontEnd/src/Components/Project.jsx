import React from 'react'
import "../CSS/Project.css"
import { useNavigate } from 'react-router-dom'


function Project({name}) {
    const colors = ["#6366F1","#7e22ce","#f8a01d"]
    const navToProjectSection = useNavigate()

    let sp= name.toUpperCase().split(" ")
    if(sp.length>1){sp=sp[0][0]+sp[1][0]
    }else{
         sp=sp[0][0] ;
    }

    const moveToProject = async ()=>{

    }

  

  return (
    <div>
        <div className="project-Box"  onClick={()=>{navToProjectSection("/projectsection")}}>

            <div className="project-Box-Name" style={{backgroundColor: colors[Math.floor(Math.random()*3)]  }} > 
                    <p>{sp}</p>
            </div>

            <div className="project-Box-item">
                    <p className="project-name">{name}</p>
                    <p className="project-Box-Episode">4 Episodes</p>
                    <p className='project-Box-text'>Last edited a week ago</p>
            </div>
        </div>


    </div>
  )
}

export default Project