const {Schema, model} = require("mongoose")

const userSchema =new Schema({
    first:{
        require:[true,"First name is Mandantory"],
        type:String ,
    },
    last:{
       default:"",
        type:String ,
    },
    password:{
        require:[true, "Password is Mandantory"],
        type:String,        
    }
    ,
    email:{
        require:[true,"Email is Manadatory"],
        type:String 
    },
    mobile:{
        require:[true,"Mobile is Mandatory"],
        type:Number
    },
    dob:{
        required:{message:"D.O.B is Mandatory"},
        type:String
    },
    gender:{require:[true,"Gender is Mandatory"],
        type:String
    },
   General:{
    type:Object,
    default:{"Chatbot Name":"","Welcome Message":"","Input Placeholder":""}
   },
   Display:{
    type:Object,
    default:{"Primary Colour":"#7BD568","Font Color":"#3C3C3C","Font Size(in px)":25,"Chat Height":"Lorem ipsuim","Chat Icon SIze":"small(48x48)","Position on Screen":"Bottom Right","Distance from Buttom":20,"Horizontal Distance (in px)":2 }
   }, 
   image: {
   type:String
  }
    

},{timestamps:true});


module.exports = model("userSchema",userSchema)