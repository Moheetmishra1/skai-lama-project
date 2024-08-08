import {createSlice}  from "@reduxjs/toolkit"
import { Login,  Logout } from "../reduxActions/signupLoginActions"
import {UploadSlice,UpdateProjects,UploadFiles,UploadFileofFileList, UpdateDescription} from "../reduxActions/UploadSlice"

const initialState= {
    islogin:null,
    pDetails:{},
    projects:[],
    allFiles:[],
   singleProjectFileList:[]
}

const expenseSlice=  createSlice({
    name:"expenseSliceName",
    initialState,
    reducers:{
       login: Login,
        logout:Logout,
        uploaduserproject:UploadSlice,
        updateProjects:UpdateProjects,
        uploadFiles:UploadFiles,
        uploadFileofFileList:UploadFileofFileList,
        updateDescription:UpdateDescription
    }
})



export default expenseSlice.reducer
 export let  {login,logout,uploaduserproject,updateProjects,uploadFiles, uploadFileofFileList,updateDescription}  = expenseSlice.actions