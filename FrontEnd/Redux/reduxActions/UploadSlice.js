let UploadSlice = (estate,action)=>{
    estate.pDetails=action.payload
}

let UpdateProjects = (estate,action)=>{
    estate.projects = action.payload;
}

const UploadFiles= (estate,action)=>{
    estate.allFiles=action.payload
}
const UploadFileofFileList = (estate,action)=>{
    estate.singleProjectFileList =action.payload
}
const UpdateDescription = (esate,action)=>{
    let [index,description] = action.payload
    esate.singleProjectFileList[index]=description;
}

export {UpdateProjects,UploadSlice,UploadFiles,UploadFileofFileList,UpdateDescription}