const { genSalt , hash }= require("bcryptjs");

require("dotenv").config()

let encryptPassword= async (password)=>{

    let salt = await genSalt(Number(process.env.salt_length));
    return await hash(password,salt);
}
module.exports= encryptPassword;
