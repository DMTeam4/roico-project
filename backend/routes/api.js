const express = require("express");
const router = express.Router();
const ros2Controller = require("../controllers/ros2Controller.js");
const dbController = require("../controllers/dbController");

router.get("/ros2", ros2Controller.getRos2Data);
router.get("/db", dbController.getDatabaseData);

module.exports = router;
