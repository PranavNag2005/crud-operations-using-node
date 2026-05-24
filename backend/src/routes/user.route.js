import {Router} from 'express';
import { registerUser,getAllUsers,getUserByEmail,updateUserProfile,patchUserProfile,validUserForLogin,logoutUser } from "../controllers/user.controller.js";
import { User } from '../models/user.model.js';

// express is the framework and router is the tool

export const Userrouter=Router()
Userrouter.get("api/v1/",(req,res)=>{
    res.send(JSON.stringify({"message":"Welcome to backend"}))
});

Userrouter.post("/api/v1/user",registerUser)
Userrouter.get("/api/v1/users",getAllUsers)
Userrouter.get("/api/v1/user/",getUserByEmail)
Userrouter.route("/register").post(registerUser)
Userrouter.route("/updateuser").put(updateUserProfile)
Userrouter.route("/update").patch(patchUserProfile)
Userrouter.route("/login").post(validUserForLogin)
Userrouter.route("/logout").post(logoutUser)
export default Userrouter;