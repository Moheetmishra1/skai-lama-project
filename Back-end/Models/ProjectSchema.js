const  {Schema,model, default:mongoose} = require( "mongoose")

const projectSchema=  new Schema({
    userId:{required:[true,"UserId is Mandatory in project"],
        type:mongoose.Schema.Types.ObjectId,ref:"userSchema"
    },
    name:{
        type:String,
        required:[true,"Project name is Mandatory"]
    },
    files:{
        type:[Object],
        required:false,
        default:[{fileName:"Upload Youtube Video",fileList:[]},{fileName:"Upload Spotoify Podcast",fileList:[]},{fileName:"Upload from RSS feed",fileList:[]}]
    }
})


module.exports = model("ProjectSchema",projectSchema)