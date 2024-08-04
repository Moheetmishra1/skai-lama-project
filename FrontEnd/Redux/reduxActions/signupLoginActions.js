 const Login=(cstate,action)=>{
    let {payload:user} = action
    cstate.islogin = user;
}

 const Logout= (cstate,action)=>{
        
    cstate.islogin= null
}


export {Login, Logout}