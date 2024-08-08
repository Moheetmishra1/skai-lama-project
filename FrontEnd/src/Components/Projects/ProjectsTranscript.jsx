import React, { useState } from 'react'
import Navbar from '../Pages/Navbar'
import "../../CSS/ProjectsTranscript.css"
import "../../CSS/Projects.css"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, updateDescription } from '../../../Redux/React_Slice/expense.reduxSlice'
import axios from 'axios'


function ProjectsTranscript() {
    let {pDetails,singleProjectFileList} = useSelector(store=>store.cart)
    let {projectfilename,index} = useParams()
    let dispatch= useDispatch()
    let navToProjects= useNavigate()
    

    let [desc,setDesc]= useState(singleProjectFileList[index].description)
    let [edit,setEdit] = useState(false)

    function updateDesc({target:{value}}){
      setDesc(value)
    }
console.log(pDetails);



  const uploadDesc = async ()=>{

    try{
       let {data} = await axios.post(`http://localhost:4044/api/v1/updatedescription/${pDetails._id}`,{
       fileName: singleProjectFileList[index].fileName,desc,projectfilename },{
          headers:{
            Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`
          }
        }) 
          console.log(data);
          
        if(!data.error){
          dispatch(updateDescription([index,desc]))
          navToProjects(`/projectsection/${pDetails.name}`)
            console.log(data);
            
        }else{
          if(data.message==="jwt expired"){
            sessionStorage.clear()
            dispatch(logout())
            navToProjects(`/projectsection/${pDetails.name}`)

          }
        }
    }catch(err){
      console.log(err);
      
    }
  }


  return (
    <div className='projectsTranscript-Box'>
        <Navbar title="Transcript" />

        <div className='projectsTranscript-editbutton'>
              <div className='projects-upload-title'style={{marginTop:"60px"}}>Edit Transcript</div>
              <div className="projectsTranscript-delete-edit" style={{display:!edit?"flex":"none"}}>
                <button className='projectsTranscript-discard' onClick={()=>{navToProjects(`/projectsection/${pDetails.name}`)}}>Discard</button>
                 <button className='projectsTranscript-save' onClick={uploadDesc} >Save & exit</button></div>

        </div> 
        <div className="projectTranscript-desc-Box">
            <div className="projectTranscript-desc-header">
                    <div className="projectTranscript-editButton" onClick={()=>{setEdit(!edit)}}>
                        
                        <svg className="projectTranscript-pen" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0588 9.02L14.9788 9.94L5.91878 19H4.99878V18.08L14.0588 9.02ZM17.6588 3C17.4088 3 17.1488 3.1 16.9588 3.29L15.1288 5.12L18.8788 8.87L20.7088 7.04C21.0988 6.65 21.0988 6.02 20.7088 5.63L18.3688 3.29C18.1688 3.09 17.9188 3 17.6588 3ZM14.0588 6.19L2.99878 17.25V21H6.74878L17.8088 9.94L14.0588 6.19Z" fill="white"/>
</svg>
        <div>Edit Mode</div>
                        
                    </div>
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.6631 19.6006H20.5769L20.1919 19.2293C21.5394 17.6618 22.3506 15.6268 22.3506 13.4131C22.3506 8.47684 18.3494 4.47559 13.4131 4.47559C8.4769 4.47559 4.47565 8.47684 4.47565 13.4131C4.47565 18.3493 8.4769 22.3506 13.4131 22.3506C15.6269 22.3506 17.6619 21.5393 19.2294 20.1918L19.6006 20.5768V21.6631L26.4756 28.5243L28.5244 26.4756L21.6631 19.6006ZM13.4131 19.6006C9.9894 19.6006 7.22565 16.8368 7.22565 13.4131C7.22565 9.98934 9.9894 7.22559 13.4131 7.22559C16.8369 7.22559 19.6006 9.98934 19.6006 13.4131C19.6006 16.8368 16.8369 19.6006 13.4131 19.6006Z" fill="#7E22CE"/>
</svg>  
            </div>

                    <input type="text"  value={desc} onChange={updateDesc} readOnly={edit}/>
                {/* <textarea name="" rows="90%" cols="90%" width="900px" className="projectsTranscript-desc" id="">{desc}</textarea> */}
                
        </div>

    </div>
  )
}

export default ProjectsTranscript