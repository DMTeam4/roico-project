import pool from '../config/dbConfig.js';
import bcryptjs from 'bcryptjs'; 

async function seedAdminUsers() {
    const adminUsers = [
        {
            username: 'jeff',
            password: 'jeffpassword',
            role: 'client',
        },
    ];

    const saltRounds = 10;

    for (const user of adminUsers) {
        if (!user.username || !user.password) {
            console.warn(`Skipping seeding for a user due to missing username or password.`);
            continue;
        }

        try {
            // --- Step 1: Hash the password ---
            console.log(`Hashing password for user: ${user.username}`);
            const hashedPassword = await bcryptjs.hash(user.password, saltRounds);
            console.log(`Password hashed for user: ${user.username}`);

            // --- Step 2: Insert the new user record ---
            console.log(`Inserting new record for user: ${user.username}`);
            const insertQuery = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';

            await pool.query(insertQuery, [user.username, hashedPassword, user.role]);

            console.log(`Successfully inserted/re-seeded user: ${user.username}`);

        } catch (error) {
            console.error(`Error seeding user "${user.username}":`, error);
        }
    }
    console.log('Admin user seeding process complete.');
}

export default seedAdminUsers;