import mongoose from "mongoose"
const connectDb = async ()=>{
    try{
        const connectionInstance= await mongoose.connect("mongodb://localhost:27017")
        console.log(`connection successfull  ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log(`connection failed ${error}`)
    }
    
}

export default connectDb