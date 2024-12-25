const express = require("express")
const {MongoClient} = require("mongodb");
const dotenv = require("dotenv");
const router = require("./api")
const cors = require("cors")

dotenv.config();
const server = express()
const client = new MongoClient(process.env.MONGODBURL)

server.use(cors())
server.use("/",router)

async function startServer() {
    server.listen(3000,"localhost",()=>{
        console.log("Server started on port 3000")
    })
    server.use(express.json());
}

async function startDatabase(){
    await client.connect();
    console.log("Database Connected");
}

async function init(){
    await startDatabase();
    await startServer();
}

init().catch()

module.exports = {server, client};
