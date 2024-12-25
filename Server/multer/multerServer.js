const multerRouter = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");

//TODO : ** SETUP **

// For DiskStorage
const diskStorage = multer.diskStorage({
    destination: function(req,file,cb){
        // __dirname creates the folder in the path of this js file and if removed it will create one step above
        const uploadPath = path.join(__dirname,"uploads");
        if(!fs.existsSync(uploadPath)){
            fs.mkdirSync(uploadPath);
        }
        cb(null, uploadPath)
    },
    filename: function(req,file,cb){
        const date = Date.now();
        cb(null,`${date}_${file.originalname}`);
        console.log("named")
    }
})

//Storage in RAM and to MONGODB database
const memoryStorage = multer.memoryStorage({})

//filtering file
const fileFilter =  function(req,file,cb){
    if(file.mimetype == "image/png" || file.mimetype == "image/jpg"){
        cb(null, true);
    }else{
        cb(new Error('Unsupported Media Type'),false);
    }
}

//Default uploads
const upload = multer({
    storage : diskStorage
})


//TODO : API STARTS HERE

// A simple endpoint to provide details about available routes
multerRouter.get("/", (req, res) => {
    res.send(`
    You are in multer API
    Use following EndPoints from Client
    /fileUpload
    /getDiskFile`);
});

multerRouter.post("/fileUpload",upload.single("fileUpload"), (req, res) => {
    console.log(JSON.stringify(req.file));
    console.log("getting file uploaded....")
    res.send("done uploading the file in the database")
})

module.exports = multerRouter;
