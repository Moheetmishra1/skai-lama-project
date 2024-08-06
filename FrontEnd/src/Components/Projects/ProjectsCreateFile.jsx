import React, { useContext, useRef, useState } from 'react'
import "../../CSS/ProjectsCreateFile.css"
import { useSelector } from 'react-redux'
import axios from 'axios';

function ProjectsCreateFile({projectCreateFileState,setPCF }) {
    let {pDetails} = useSelector(store=>store.cart);
    let [fileObject,setFileObject] = useState({fileName:"",descripton:""})
    let fileNameRef= useRef()
    let descriptionRef= useRef()
    
    function updateFileObject({target:{value,name}}){
        setFileObject({...fileObject,[name]:value})
    }
   
    const saveFile = async()=>{
        console.log(projectCreateFileState," file name");

        try{
                let {data} = await axios.post(`http://localhost:4044/api/v1/createfile/${pDetails._id}`,{...fileObject,projectFileName:projectCreateFileState.fileName}
                    ,{
                    headers:{
                        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`
                    },
                })
                console.log(data);
                
        }catch(err){
            console.log(err);
            
        }
        console.log("File description data ",fileObject);
        setPCF({...projectCreateFileState,display:"none"})
        fileNameRef.current.value=""
        descriptionRef.current.value=""

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
                    ×
                </button>
            </div>  

            <div className='projects-createFiles-part2'>
                <label  for="projects-name" className='projects-name'>Name</label>
                <input type="text" id='projects-name' className='projects-createFile-inputName' style={{fontSize:"35px  "}} ref={fileNameRef} name="fileName"  onChange={updateFileObject} />
            </div>

            <div className='projects-createFiles-part2'>
                <label  for="projects-desc" className='projects-name'>Description</label>
                <input type="text" id='projects-desc' className='projects-createFile-inputName' ref={descriptionRef}  style={{fontSize:"35px"}}name="descripton" onChange={updateFileObject} />
            </div>

            {/* <div className='projects-createFiles-part3'></div> */}

            <div className='projects-createFiles-part4'><button onClick={saveFile}>Save</button></div>
        </div>

    </div>
  )
}

export default ProjectsCreateFile