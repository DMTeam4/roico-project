import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import pool from './dbConfig.js';
import bcrypt from 'bcryptjs'; 

export default function(passport) {

    // --- Local Strategy (Username/Password) ---
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'username',
                passwordField: 'password',
            },
            async (username, password, done) => {
                console.log(`LocalStrategy: Verifying username: ${username}`);
            
                try {
                    const query = 'SELECT * FROM users WHERE username = ?';
                    const params = [username];
                    const [rows] = await pool.query(query, params);

                    if (!rows || rows.length === 0) {
                        console.log(`LocalStrategy: User not found: ${username}`);
                        return done(null, false, { message: 'Incorrect username or password.' });
                    }

                    const user = rows[0];
                    console.log(`LocalStrategy: User found: ${user.username}`);

                    if (!user.password) {
                        console.error(`LocalStrategy: User ${username} found but has no password field!`);
                        return done(new Error('User data incomplete in database.'));
                    }

                    // --- COMPARE HASHED PASSWORD ---
                    console.log(`LocalStrategy: Comparing provided password against stored hash for ${username}...`);
                    const isMatch = await bcrypt.compare(password, user.password); 

                    if (isMatch) {
                        console.log(`LocalStrategy: Password match for ${username}`);
                        return done(null, user); // Authentication successful
                    } else {
                        console.log(`LocalStrategy: Password mismatch for ${username}`);
                        return done(null, false, { message: 'Incorrect username or password.' }); // Password does not match
                    }
                } catch (error) {
                    console.error('LocalStrategy: Database error:', error);
                    return done(error);
                }
            }
        )
    );

    // --- JWT Strategy (Token Verification) ---
    const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

    secretOrKey: process.env.JWT_SECRET,
    };

    passport.use(new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
        console.log(`JwtStrategy: Verifying user ID: ${jwt_payload.id}`); 
        try {
        // Use pool.query to find user by ID from JWT payload
        const query = 'SELECT * FROM users WHERE user_id = ?'; // Use ? for parameterized query in MySQL
        const params = [jwt_payload.id]; 
        const [rows] = await pool.query(query, params);

        if (rows.length > 0) {
            const user = rows[0];
            console.log(`JwtStrategy: User found: ${user.username}`);
          return done(null, user); // User found, pass user object
        } else {
            console.log(`JwtStrategy: User not found for ID: ${jwt_payload.username}`);
            return done(null, false); // User not found
        }
    } catch (error) {
        console.error('JwtStrategy: Database error:', error);
        return done(error, false); // Pass database errors
    }
    }));


} 

