import {createSlice}  from "@reduxjs/toolkit"
import { Login,  Logout } from "../reduxActions/signupLoginActions"
import {UploadSlice,UpdateProjects,UploadFiles} from "../reduxActions/UploadSlice"

const initialState= {
    islogin:null,
    pDetails:{},
    projects:[],
    allFiles:[]
}

const expenseSlice=  createSlice({
    name:"expenseSliceName",
    initialState,
    reducers:{
       login: Login,
        logout:Logout,
        uploaduserproject:UploadSlice,
        updateProjects:UpdateProjects,
        uploadFiles:UploadFiles
    }
})



export default expenseSlice.reducer
 export let  {login,logout,uploaduserproject,updateProjects,uploadFiles}  = expenseSlice.actions