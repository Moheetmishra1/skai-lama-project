import React, { useContext, useRef, useState } from 'react'
import "../../CSS/ProjectsCreateFile.css"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { logout, uploadFileofFileList } from '../../../Redux/React_Slice/expense.reduxSlice';

function ProjectsCreateFile({projectCreateFileState,setPCF }) {
    let {pDetails} = useSelector(store=>store.cart);
    let [fileObject,setFileObject] = useState({fileName:"",description:""})
    let fileNameRef= useRef()
    let descriptionRef= useRef()
    const dispact = useDispatch()
    const err= useRef()

    function updateFileObject({target:{value,name}}){
        err.current.style.innerHTML=""

        setFileObject({...fileObject,[name]:value})
    }
   
    const saveFile = async()=>{
        err.current.style.color="red"
        if( !fileObject.fileName || ! fileObject.description){
            err.current.innerHTML="All fields are mandatory."
            return 
        }

        try{
                let {data} = await axios.post(`http://localhost:4044/api/v1/createfile/${pDetails._id}`,{...fileObject,projectFileName:projectCreateFileState.fileName}
                    ,{
                    headers:{
                        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`
                    },
                })
                if(!data.error){
                   setPCF({...projectCreateFileState,display:"none"})
                   dispact(uploadFileofFileList(data.data))


                }else{
                    
                    if(data.message==="jwt expired" ||data.message==="jwt malformed"){
                        sessionStorage.clear()
                        dispact(logout())

                    }
                }
                console.log(data);
                
        }catch(err){
            console.log(err);
            
        }
        fileNameRef.current.value=""
        descriptionRef.current.value=""
        err.current.innerHTML=""

    }
    
  return (
    <div className='projects-createFile-box' style={{display:projectCreateFileState.display}}>
        <div className="projects-createFiles">



            <div className='projects-createFiles-part1' >
                <div>
                    <img src={projectCreateFileState.image} alt="not found" className='projects-createFile-part1-img'></img>
                    <div className='projects-createFile-part1-text'>Upload from {projectCreateFileState.fileName}</div>
                </div>
                <button className='projects-createFiles-cross' onClick={()=>{setPCF({...projectCreateFileState,display:"none"})}}> 
                    x
                </button>
            </div>  
                <span className="projectsCreateError" ref={err} style={{color:"red",height:"5px"}}></span>
            <div className='projects-createFiles-part2'>
                <label  for="projects-name" className='projects-name'>Name</label>
                <input type="text" id='projects-name' className='projects-createFile-inputName' style={{fontSize:"35px  "}} ref={fileNameRef} name="fileName"  onChange={updateFileObject} />
            </div>

            <div className='projects-createFiles-part2'>
                <label  for="projects-desc" className='projects-name'>Description</label>
                <input type="text" id='projects-desc' className='projects-createFile-inputName' ref={descriptionRef}  style={{fontSize:"35px"}}name="description" onChange={updateFileObject} />
            </div>

            {/* <div className='projects-createFiles-part3'></div> */}

            <div className='projects-createFiles-part4'><button onClick={saveFile}>Save</button></div>
        </div>

    </div>
  )
}

export default ProjectsCreateFile