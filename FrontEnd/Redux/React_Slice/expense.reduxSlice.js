import {createSlice}  from "@reduxjs/toolkit"
import { Login,  Logout } from "../reduxActions/signupLoginActions"
import {UploadSlice,UpdateProjects} from "../reduxActions/UploadSlice"

const initialState= {
    islogin:null,
    pDetail:{},
    projects:[]
}

const expenseSlice=  createSlice({
    name:"expenseSliceName",
    initialState,
    reducers:{
       login: Login,
        logout:Logout,
        uploadSlice:UploadSlice,
        updateProjects:UpdateProjects
    }
})



export default expenseSlice.reducer
 export let  {login,logout,uploadSlice,updateProjects}  = expenseSlice.actions