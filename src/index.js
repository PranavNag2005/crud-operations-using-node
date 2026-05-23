import connectDb from "./config/database.js"
import dotenv from "dotenv"
import app from "./app.js"
import express from "express";
import { Userrouter } from "./routes/user.route.js"
import {postRouter} from "./routes/posts.route.js";

dotenv.config({
    path: 'C:\\Users\\TEMP\\Desktop\\crud-operations-using-node\\.env'
})
app.use(express.json());
app.use("/",Userrouter)
app.use("/",postRouter)
const startServer = async () =>{
    try{
        await connectDb();
   console.log(`Server is listening on port ${process.env.port}`)
        app.listen(process.env.port || 3001,()=>{
            console.log(`server is listening on ${process.env.port}`);
        })

    }
    catch(error){
        console.log(`mongodb connection failed !! ${error}`)
    }
}



startServer()