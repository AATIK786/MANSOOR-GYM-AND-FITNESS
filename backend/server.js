const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Database
const db = require("./config/db");

// Routes
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/members", require("./routes/memberRoutes"));
app.use("/api/trainers", require("./routes/trainerRoutes"));
app.use("/api/classes", require("./routes/classRoutes"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Gym Management API Running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});