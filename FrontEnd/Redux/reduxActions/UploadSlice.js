let UploadSlice = (estate,action)=>{
    estate.pDetail=action.payload
}

let UpdateProjects = (estate,action)=>{
    estate.projects = action.payload;
}

export {UpdateProjects,UploadSlice}