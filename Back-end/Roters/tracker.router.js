const express= require("express")
const {loginToAccount,createAccount, refreshLogin} = require("../controllers/trackerController.controller");
const auth = require("../helper/Autho");
const { loginAuth } = require("./loginAuth");
const multer = require('multer');
const { uploadProject, Allprojects, userprojectdetail, CreateFile } = require("../controllers/projectSchema.controller");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    return   cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
       return cb(null, `${Date.now()}=${file.originalname}` )
    },
  })
  
  const upload = multer({ storage: storage })

// const upload = multer({ dest: './uploads/' });


let router = express.Router()

router.post("/signup", upload.single('profileImage'),createAccount);
router.post("/login",loginToAccount);
router.get("/refreshlogin",loginAuth,refreshLogin);

router.post("/uploadproject",auth,uploadProject)
router.get("/userprojects",auth,Allprojects)
router.get(`/getuserproject/:projectname`,auth,userprojectdetail)


router.post("/createfile/:pid",auth,CreateFile)


module.exports= router