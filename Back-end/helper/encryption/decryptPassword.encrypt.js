const {compare} = require("bcryptjs");

let decryptPassword =   async (password,hashPassword)=>{
    return  await  compare(password,hashPassword)
}

module.exports= decryptPassword