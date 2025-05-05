import pool from '../config/dbConfig.js'; 
import bcryptjs from 'bcryptjs';

export const registerUserToDb = async (user) => {
    try {
    const hashedPassword = await bcryptjs.hash(user.password, 10);
    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    const params = [user.username, hashedPassword];
    
    await pool.query(query, params);
    return {success: true, message: "User registered successfully"};
    }
    catch (error) {
        console.error("Error registering user:", error);
        return {success: false, message: "Error registering user"};
    }
}
