const  ProjectSchema  = require( "../Models/ProjectSchema")

const uploadProject= async (req,res,next)=>{

        let arr = await ProjectSchema.find({userId:req.user.userId})
    try{

        let data = await ProjectSchema.create({name:req.body.projectName,userId:req.user.userId})
        
        res.status(201).json({error:false,message:"Project is created in database",data:    [...arr,data]});
        
    }catch(err){
        next(err)
    }

}
const Allprojects = async (req,res,next)=>{
    try{
            const {userId} = req.user
            
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

const userprojectdetail = async(req,res,next)=>{
    try{
        let {projectname} = req.params;
        let obj = await ProjectSchema.findOne({userId:req.user.userId,name:projectname})
        res.status(202).json({error:false,message:"user's project details",data:obj})
            

    }catch(err){
        next(err)
    }
}



module.exports = {uploadProject,Allprojects,userprojectdetail}