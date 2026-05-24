import mongoose from "mongoose"
const connectDb = async ()=>{
    try{
        const connectionInstance= await mongoose.connect("mongodb://127.0.0.1:27017/backenddb")
        console.log(`connection successfull  ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log(`connection failed ${error}`)
    }
    
}

export default connectDb