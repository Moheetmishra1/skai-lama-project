let UploadSlice = (estate,action)=>{
    estate.pDetails=action.payload
}

let UpdateProjects = (estate,action)=>{
    estate.projects = action.payload;
}

const UploadFiles= (estate,action)=>{
    estate.allFiles=action.payload
}

export {UpdateProjects,UploadSlice,UploadFiles}