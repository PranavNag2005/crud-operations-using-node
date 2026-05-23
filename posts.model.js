import mongoose,{Schema} from "mongoose";
import validator from "validator";

const postSchema=  new Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
            minLength:1,
            maxLength:100
          
        },
        description:{
            type:String,
            required:true,
            trim:true
        }
    },
    {
        timestamps:true
    }
)

export const Post=mongoose.model("posts",postSchema)