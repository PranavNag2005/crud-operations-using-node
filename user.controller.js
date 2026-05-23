
import {User} from "../models/user.model.js"
import bcrypt from "bcrypt"
export const registerUser = async (req,res)=>{
    try{
        console.log(req.body);
        
        const {username,email,password,age}=req.body;
        
        if(!username || ! email || !password || !age){
            return res.status(400).json({"messge":"some fields are missing "})
        }

        const isExistingUser= await User.findOne({email:email})
        if(isExistingUser){
            return res.status(400).json({"messge":"User Already Exists"})
        }
        const hashedPassword= await bcrypt.hash(password,10)
        const createUser = await User.create({username:username,email:email,password:hashedPassword,age:age})
        console.log(createUser);
        
        return res.status(201).json({"message":"User created sucessfully"})
    }
    catch(error){
        return  res.status(500).json({
                success: false,
                message: "Error while creating user",
                error: error.message
});
    }
}


export const getAllUsers= async(req,res)=>{
    console.log(req.body);
    
    try{
        const users=await User.find()
        return res.status(200).json(users)
    }
    catch(error){
        return res.status(500).json({message:"Internal server Error"})
    }
}

export const getUserByEmail=async (req,res)=>{
    const email=req.query.email
    console.log(email);
    
    try{
        const fetchUser= await User.findOne({email:email})
        if(!fetchUser){
            return res.status(404).json({message:"Email not found!"})
        }
        return res.status(200).json(fetchUser)
    }
    catch(error){
        return res.status(500).json({message:"Internal server Error"})
    }
}

export const updateUserProfile= async (req,res)=>{
    try{
        const email=req.query.email;
        console.log(email);
        
        const {username,password,age}=req.body;
        const isValidUser= await User.findOne({email:email})
        if(!isValidUser){
            return res.status(404).json({message:"User not found!"})
        }
        const hashedPassword= await bcrypt.hash(password,10)
        const updateUser= await User.updateOne({email},{ $set:{username:username,password:hashedPassword,age:age}})
        return res.status(200).json({message:"User profile updated successfully!"})
    }
    catch(error){
        return res.status(500).json({message:"Internal server Error"})
    }
}

 export const patchUserProfile = async (req, res) => {
    try {

        const email = req.query.email;

        // fields user sent
        const updates = req.body;

        // check user exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // changed fields
        const changedFields = {};

        Object.keys(updates).forEach((key) => {

            // compare old vs new value
            if (user[key] !== updates[key]) {
                changedFields[key] = {
                    oldValue: user[key],
                    newValue: updates[key]
                };
            }
        });

        // update only sent fields
        const updatedUser = await User.findOneAndUpdate(
            { email },
            {
                $set: updates
            },
            { returnDocument: "after" }
        );

        return res.status(200).json({
            message: "User updated",
            changedFields,
            updatedUser
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

export const validUserForLogin =async (req,res)=>{
    try{
        const {email,password}=req.body;
        const isValidUser= await User.findOne({email:email})
        if(!isValidUser){
            return res.status(404).json({message:"User not found!"});
        }
        const isPasswordMatch= await bcrypt.compare(password,isValidUser.password)
        if(!isPasswordMatch){
            return res.status(401).json({message:"Invalid password"})
        }
        return res.status(200).json({message:"Login successful"})
    }
    catch(error){
        return res.status(500).json({message:"Internal server Error"})
    }
}

export const logoutUser =async (req,res)=>{
    try{
        const {email}=req.body;
        const isValidUser= await User.findOne({email:email})
        if(!isValidUser){
            return res.status(404).json({message:"User not found!"})
        }
        return res.status(200).json({message:"Logout successful"})
    }
    catch(error){
        return res.status(500).json({message:"Internal server Error"})
    }
}