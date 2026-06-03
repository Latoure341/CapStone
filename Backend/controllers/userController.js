import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;
        if (!email || !password || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            useremail: email,
            password: hashedPassword
        });

        await newUser.save();
        console.log(User.length);
        return res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }
        const user = await User.findOne({useremail: email});
        
        if(user){
            const result = await bcrypt.compare(password, user.password);
            if(result) {
                return res.status(200).json({message: "Login successful"});
            } else {
                return res.status(401).json({message: "Invalid credentials"});
            }
        } else {
            return res.status(401).json({message: "Invalid credentials"});
        }
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}