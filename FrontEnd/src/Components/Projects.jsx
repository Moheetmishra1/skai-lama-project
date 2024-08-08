import React, { createContext, useEffect, useState } from 'react'
import Navbar from './Pages/Navbar'
import "../CSS/Projects.css"
import ProjectsFile from './ProjectsFile'

import { useDispatch, useSelector } from 'react-redux'
import ProjectsWithNoFiles from './Projects/ProjectsWithNoFiles'
import ProjectsCreateFile from './Projects/ProjectsCreateFile'
import ProjectsFileList from './ProjectsFileList'
import { logout, uploadFileofFileList } from '../../Redux/React_Slice/expense.reduxSlice'
import axios from 'axios'


export let CreateFileContext= createContext("Provider is not found in projects component.")
function Projects() {
  let {pDetails,singleProjectFileList} = useSelector(store=>store.cart)
  let [projectCreateFileState,setPCF] = useState({display:"none",fileName:"",image:""})
  let dispatch= useDispatch()

  console.log(pDetails," is created");
 
  let getAllfiles = async()=>{
    try{

      let {data } = await axios.get(`http://localhost:4044/api/v1/getallfiles/${pDetails._id}`,{
        headers:{
          Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`
        }
      })
      if( !data.error){
        console.log(data.message);
        
          dispatch(uploadFileofFileList(data.data))
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

  useEffect(()=>{
    if(pDetails._id)
getAllfiles()
  },[pDetails])

  return (
    <div className='projectsBox'>
      <Navbar title="Upload"/>

      <ProjectsCreateFile projectCreateFileState={projectCreateFileState} setPCF={setPCF} />

      { !singleProjectFileList[0] && <>  <div className='projects-upload-title'>Upload</div>




    <CreateFileContext.Provider value={{projectCreateFileState,setPCF}}>
         <div className="projects-fileList">
           {pDetails.files?.map((a,index)=>{
            return      <ProjectsFile key={index} profileImage={a.profileImage}  fileName={a.fileName}  />     

           })}
          {pDetails.files?.map((a,index)=>{
            return <ProjectsFile key={index} profileImage={a.profileImage} fileName={a.fileName}  />
           })}
           
                
         </div>
         </CreateFileContext.Provider >

        <ProjectsWithNoFiles />
        </>}


            {singleProjectFileList[0] && <CreateFileContext.Provider  value={{projectCreateFileState,setPCF}}>
        <ProjectsFileList />
              
            </CreateFileContext.Provider>}

       
    </div>
  )
}

export default Projects