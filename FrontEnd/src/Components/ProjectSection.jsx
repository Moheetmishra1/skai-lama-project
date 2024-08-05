import React, { useEffect } from 'react'
import Menu from './Menu'
import "../CSS/ProjectSection.css"
import "../CSS/Menu.css"
import { Outlet, useParams } from 'react-router-dom'
import "../CSS/ProjectSection.css"
import axios from 'axios'
import { uploaduserproject } from '../../Redux/React_Slice/expense.reduxSlice'
import { useDispatch } from 'react-redux'

function ProjectSection() {
  let {projectname} = useParams()
  let dispatch = useDispatch()



  let getAllProjectFiles = async ()=>{
    try{
        let {data } = await axios.get(`http://localhost:4044/api/v1/getuserproject/${projectname}`,{
          headers:{
            Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`
          }
        })  
        
        
        if(!data.error){
            dispatch(uploaduserproject(data.data))
        }


    }catch(err){
      console.log(err);
      
    }
  }


  useEffect(()=>{
    getAllProjectFiles()
  },[])

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