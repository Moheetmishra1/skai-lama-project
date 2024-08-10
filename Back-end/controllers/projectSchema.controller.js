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

const CreateFile = async (req,res,next)=>{

    try{
        let {pid} = req.params;
        let {projectFileName,fileName,description} = req.body;
        let obj = await ProjectSchema.findById(pid)
       

   let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]             
        
        if(obj){
            let index= obj.files.findIndex(a=> { return a.fileName===projectFileName}) 
            if(index>=0){
                let date = new Date()
                
                 obj.files[index].fileList.push({fileName,description,date :`${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`,projectFileName})
                let d= await ProjectSchema.findByIdAndUpdate(pid, obj)


                    const data = obj.files.reduce((a,b,c,d)=>{
                            return [...a,...b.fileList]
                    },[])
                    

                res.status(201).json({error:false,message:"File is created",data})

            }else{
                res.status(201).json({error:true,message:"File name is not avaiable"})

            }
        }else{
                res.status(201).json({error:true,message:"Project name is not avaiable"})
        }
        

    }catch(err){
        next(err)
    }
}

let GetAllFiles = async(req,res,next)=>{
    
    try{
        let {pid} = req.params;

        let m = await ProjectSchema.findById(pid,{files:1,_id:0})
        let obj=m.files
        
        if(obj){
            let data =  obj.reduce((a,b,index)=>{
                return [...a,...b.fileList]
            },[])
            res.status(201).json({error:false,message:"Files list sent.",data})
        }else{
            res.status(201).json({error:true,message:"Files is empty"})
        }

    }catch(err){
        next(err);
        
    }
}


const deleteFileofAFile = async(req,res,next)=>{
    
    try{
        let {id} = req.params; 
        let {fileName,projectFileName,index} = req.body;

        let obj = await ProjectSchema.findById(id,{files:1,_id:0})
        obj=obj.files
        

        if(obj){
            let ind = obj.findIndex(a=>a.fileName===projectFileName);
        
            
            
            obj[ind].fileList= obj[ind].fileList.filter((a,i)=>{
                return i !==index
            })

                let data = await ProjectSchema.findByIdAndUpdate(id,{$set:{files:obj}})
        // let filterProjectsFile = obj[ind].filter(a=>)
        res.status(201).json({error:false,message:"delete"})

        }else{
        res.status(201).json({error:true,message:"project is empty"})

        }
       
        
        

    }catch(err){
        next(err)
    }
}


let updateDescritpion = async(req,res,next)=>{
    try{
        let {id } = req.params
        let {   fileName,desc,projectfilename }= req.body;
      
        
        let {files} = await ProjectSchema.findById(id,{files:1,_id:0})
        

        if(files){
                 files.forEach(a=>  {
                    if(a.fileName ===projectfilename){
                        a.fileList.forEach((obj)=>{
                            if(obj.fileName===fileName){
                                        obj.description=desc;
                            }}
                        )
                        }
                })
                let data = await ProjectSchema.findByIdAndUpdate(id,{$set:{files}})
                res.status(201).json({error:false,message:"description is updated"})
                

        }else{
            res.status(201).json({error:true,message:"File collection is not available."})
        }

    }catch(err){
        next(err);
        
    }

}


module.exports = {uploadProject,Allprojects,userprojectdetail,CreateFile,GetAllFiles,deleteFileofAFile,updateDescritpion}