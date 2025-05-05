import jwt from 'jsonwebtoken';
import { registerUserToDb } from '../services/dbService.js';
import User from '../models/user.js';

export const registerUser = async(req, res) => {
    const {username, password} = req.body;
    if(!username || !password) {
        return res.status(400).json({error: 'Username and password are required'});
    }  

    const user = req.user;

    try {
        const response = await registerUserToDb(user)
        if (response) {
            return res.status(200).json({success: true, message: "User registered successfully"});
        } else {
            return res.status(500).json({success: false, message: "Error registering user"});
        }
    }
    catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({success: false, message: "Error registering user"});
    }
}

export const Login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ success: false, message: "Username and password are required" });
    }

    if (!req.user) {
        return res.status(400).json({ success: false, message: "User not found" });
    }
    console.log("User found:", req.user, req.user.id, req.user.username);

    const user = new User(req.user.user_id, req.user.username, req.user.password, req.user.role);
    const payload = {
        id: user.id,
        username: user.username,
        role: user.role,
    };

    console.log("Payload:", payload.id, payload.username, payload.role);

    try 
    {
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token: token,
        });

    }
    catch (error) {
        console.error("Error generating token:", error);    
    }

}