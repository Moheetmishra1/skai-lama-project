const  ProjectSchema  = require( "../Models/ProjectSchema")

const uploadProject= async (req,res,next)=>{

        let arr = await ProjectSchema.find({userId:req.user.userId})
    try{
console.log(req.body.projectName, req.user.userId);

        let data = await ProjectSchema.create({name:req.body.projectName,userId:req.user.userId})
        console.log(data);
        
        res.status(201).json({error:false,message:"Project is created in database",data:[...arr,data]});
        
    }catch(err){
        next(err)
    }

}
const Allprojects = async (req,res,next)=>{
    try{
            const {userId} = req.user
            console.log(req.user);
            
            let projects = await ProjectSchema.find({userId}    );
            if(projects){
                res.status(201).json({error:false,message:"Project list is send.",data:projects})
            }else{
                res.status(201).json({error:true,message:"No projects is exist."})
            }

    }catch(Err){
        next(Err)
    }
}




module.exports = {uploadProject,Allprojects}