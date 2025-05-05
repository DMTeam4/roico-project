import express from "express";
import passport from "passport";
import * as ros2Controller from "../controllers/ros2Controller.js";
import * as authController from "../controllers/authController.js";

const router = express.Router();

router.post("/move", passport.authenticate('jwt', {session: false, failWithError: true}), ros2Controller.moveRobot);
router.post("/register", authController.registerUser);

router.post("/login", passport.authenticate('local', {session: false, failWithError: true}),  authController.Login);

export default router;