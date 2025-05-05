import '@dotenvx/dotenvx/config';
import express from "express";
import apiRoutes from "./routes/api.js";
import passport from "passport";
import passportConfig from "./config/passport.js";
import seedAdminUsers from "./helper/dbSeeder.js"; 


if (!process.env.JWT_SECRET) {
    console.error("FATAL ERROR: JWT_SECRET is not defined in .env file.");
    process.exit(1);
}


const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

passportConfig(passport);
app.use(passport.initialize());

app.use("/api", apiRoutes);

(async () => {
    try {
        await seedAdminUsers();
        app.listen(7070, () => {
            console.log(`Server started at port 7070`);
        });
    } catch (err) {
        console.error("Failed during startup (potentially seeding error):", err);
        process.exit(1);
    }
})();