import {Post} from '../models/posts.model.js'

export const createPost = async (req, res) => {
    try{
        const {name, description} = req.body;
        if(!name || ! description){
            return  res.status(400).json({"messge":"some fields are missing "})
        }
        const post = await Post.create({name, description});
        
        return res.status(201).json({message:"post created successfully!",post:post});
    }
    catch(error){
       return  res.status(500).json({message: error.message});
    }
}


export const getAllPosts = async (req,res)=>{
    try{
        const posts = await Post.find();
        return res.status(200).json(posts);
    }
    catch(error){
        return res.status(500).json({message: error.message});
    }
    
}