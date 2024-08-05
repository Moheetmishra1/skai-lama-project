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
        default:[{fileName:"Upload Youtube Video" ,profileImage:"https://static.vecteezy.com/system/resources/thumbnails/018/930/575/small/youtube-logo-youtube-icon-transparent-free-png.png",fileList:[]},
                    {fileName:"Upload Spotoify Podcast",profileImage:"https://www.androidapksbox.com/wp-content/uploads/2017/08/spotify-music-120x120.jpg",fileList:[]},
                    {fileName:"Upload from RSS feed",profileImage:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQC23d_TVMsWKiuSIJDoz-8307c_OadR1M2JqKXbWlK9Ucf5jZ",fileList:[]}]
    }
})


module.exports = model("ProjectSchema",projectSchema)