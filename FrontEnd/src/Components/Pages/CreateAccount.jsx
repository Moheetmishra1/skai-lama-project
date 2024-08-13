import React, { useRef, useState } from 'react'
import "../../CSS/CreateAccount.css"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {logout,updateProjects} from "../../../Redux/React_Slice/expense.reduxSlice"

function CreateAccount({vale,updateProject,displaytList}) {
    // const {projects} = useSelector(store=>store.cart)
    let [projectName, setProjectName]= useState("")
    let dispatch = useDispatch()

    

    function updateProjectName({target:{value}}){
        setProjectName(value)
    }



    let sentProject= async (e)=>{
        e.preventDefault();
        try{
            let {data} = await axios.post("https://the-uploader.onrender.com/api/v1/uploadproject",{projectName},
                {
                    headers: {
                      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`,
                    },}  )
            if(data.error){
                
                if(data.message==="jwt expired" || data.message==="jwt malformed"){
                        dispatch(logout())
                        sessionStorage.clear()
                }
            }else{
                dispatch(updateProjects(data.data))
                displaytList()
            }   
        }catch(err){
            console.log(err);
            
        }

    }




  return (
    <div className='create-account-outerBox' style={{display:vale}}  >   
<h1>heello</h1>
    <div className='create-account-box'> 
    <div className='create-title'>Create Project</div>

    <form action=""  className="create-form" onSubmit={sentProject} >
    <div className='create-input'>
        <label htmlFor="project-name">Enter Project Name:</label>
        <input type="text" id='project-name' onChange={updateProjectName}  placeholder='Type here'/>
        <span style={{color:"red"}}></span>
        </div>

        
            <div  className='create-submit-form'>
            <button type='reset' className='create-cancel ' onClick={updateProject}>Cancel</button>
            <button type='submit' className='create-submit'>Create</button>
            </div>
            </form>
    </div>
    </div>
  )
}

export default CreateAccount