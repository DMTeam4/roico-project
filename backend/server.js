const express = require("express");
const apiRoutes = require("./routes/api");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.use("/api", apiRoutes);

app.listen(7070, () => {
    console.log("Server started at port 7070");
});