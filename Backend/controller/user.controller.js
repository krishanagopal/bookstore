import User from "../model/user.model.js";
import bcrypt from 'bcryptjs';

export const Signup=async(req,res)=>{
    try {
        const {fullName,email,password} = req.body;
        const user=await User.findOne({email:email});

        if(user){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword=await bcrypt.hash(String(password),10);
        const ceatedUser=new User({
            fullName,
            email,
            password: hashedPassword
        });
        await ceatedUser.save();
        return res.status(201).json({message:"User created successfully",user:{
            _id:ceatedUser._id,
            fullName:ceatedUser.fullName,
            email:ceatedUser.email
        }});
    } catch (error) {
        
        console.log("err:",error);
        return res.status(500).json({message:error.message});
    }
}


export const Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email:email});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid credentials"});
        }
        return res.status(200).json({message:"Login successful" ,user:{
            _id:user._id,
            fullName:user.fullName,
            email:user.email
        }
        });
    } catch (error) {
        console.log("err:",error);
        return res.status(500).json({message:error.message});
    }
}
