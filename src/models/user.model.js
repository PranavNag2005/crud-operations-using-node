import mongoose,{Schema} from "mongoose";
import validator from "validator";
const userSchema= new Schema(
    {
        username:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
            unique:true,
            minLength:1,
            maxLength:50
        },
        email:{
            type:String,
            required:true,
            unique:true,
            validate:{
                validator: validator.isEmail,
                message:"Invalid email"
            }
        },
        password:{
            type:String,
            required:true,
            minLength:6,
            maxLength:100,
            trim:true
        },
        age:{
            type:Number,
            min:1,
            max:120,
            required:true,
            validate:{
                validator:function(value){
                    return value>0
                },
                message:"Invalid age"
                
            }
        },
        


    
    },
    {
        timestamps:true
    }
)

export const User=mongoose.model("users",userSchema)