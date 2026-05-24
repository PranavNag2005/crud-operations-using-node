import mongoose from "mongoose"
const uri=`mongodb://uppalapatipranavnag2_db_user:KCoplvTVzt9GVkKR@ac-yoa7kmh-shard-00-00.ekoi1he.mongodb.net:27017,ac-yoa7kmh-shard-00-01.ekoi1he.mongodb.net:27017,ac-yoa7kmh-shard-00-02.ekoi1he.mongodb.net:27017/?ssl=true&replicaSet=atlas-4b68k6-shard-0&authSource=admin&appName=Cluster0`
const connectDb = async ()=>{
    try{
        const connectionInstance= await mongoose.connect("mongodb+srv://uppalapatipranavnag2_db_user:Pranavnag%40@cluster0.ekoi1he.mongodb.net/")
        console.log(`connection successfull  ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log(`connection failed ${error}`)
    }
    
}

export default connectDb