import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../../CSS/ProjectsFileListShowList.css"
import { useNavigate } from 'react-router-dom'
import { logout, uploadFileofFileList } from '../../../Redux/React_Slice/expense.reduxSlice'
import axios from 'axios'

function ProjectsFileListShowList() {
    let {pDetails,singleProjectFileList} = useSelector(store=>store.cart)
    let navToDescription= useNavigate()
    let dispatch= useDispatch()

    let editFile =  (projectFileName,index)=>{
        navToDescription(`transcript/${projectFileName}/${index}`)
    }
    
    let deleteFile= async(a,index)=>{

        try{
          let {fileName,projectFileName}=a
          console.log(a);
          
          
            let {data} = await axios.post(`http://localhost:4044/api/v1/deletefileofafile/${pDetails._id}`,{fileName,projectFileName, index},{
              headers:{
                Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`

              }
            })
            console.log(data);
            
            if(!data.error){
              let arr= singleProjectFileList.filter((a,i)=>{
                return i !==index
              })
              arr.splice(index,1)
              dispatch(uploadFileofFileList(arr))
              
            }else{
              if(data.message==="jwt expired"){
                sessionStorage.clear()  
                dispatch(logout())
              }
            }

        }catch(err){
          console.log(err);
          
        }
    }


  return (
    <div className='projectsFileList'>

        <div className='projectsFileList-header list-Flex'>
            <p className='projectsFilelist-file-header'>Name</p>
            <p   className='projectsFilelist-file-header'  >Upload Date & Time</p>
            <p className='projectsFilelist-file-header' >Status</p>
            <p className='projectsFilelist-file-header' >Actions</p>

        </div>
        <div className='proejctsFileShowList-show'>
        {singleProjectFileList.map((a,index)=>{
          return <>
          <div className='list-Flex projectsListMain' key={index}>
          <p className='projectsFilelist-file-item'>{a.fileName}</p>
            <p   className='projectsFilelist-file-item' style={{fontSize:"1.2em"}}  >{a.date}</p>
            <p className='projectsFilelist-file-item' >Done</p>
            <div className='projectsFilelist-file-item-button' ><button className='projectsList-edit' onClick={()=>editFile(a.projectFileName,index)}><div>Edit</div></button><button className='projectsList-delete' onClick={()=>{deleteFile(a,index)}}><div>Delete</div></button></div>
          </div>
          </>
        })}
        </div>
    </div>
  )
}

export default ProjectsFileListShowList