const express = require("express")
const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");
const cors = require("cors")

/*
    the Below way of importing and adding should not be done here
    it will cause circular dependency error and will cause issue with
    initialization of client

    const router = require("./api")
    const reduxRouter = require("./ReduxOperation/reduxOps");
    const multerRouter = require("./multer/multerServer");
    const lpRouter = require("./LongPolling/LongPolling");

 */

dotenv.config();

const client = new MongoClient(process.env.MONGODBURL);
const server = express()

async function startDatabase(){
    await client.connect();
    console.log("Database Connected");
}

async function startServer() {
    server.listen(3000,"localhost",()=>{
        console.log("Server started on port 3000")
    })
    server.use(cors())
    server.use(express.json());
    server.use("/",require("./api"))
    server.use("/multer", require("./multer/multerServer"));
    server.use("/createReduxUser",require("./ReduxOperation/reduxOps"))
    server.use("/longPolling",require("./LongPolling/LongPolling"))
    /*
    the Below way of importing and adding should not be done here

    server.use("/",router)
    server.use("/multer", multerRouter);
    server.use("/createReduxUser",reduxRouter)
    server.use("/longPolling",lpRouter)

    */
}

async function init(){
    await startDatabase();
    await startServer();
}

init().catch()

module.exports = client;