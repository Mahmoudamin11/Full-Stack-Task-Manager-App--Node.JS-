require("dotenv").config()
const connectDB = require('./db/connect')
const express = require("express");
const tasksRouter = require("./routes/tasks");
const app = express();

// Middleware
app.use(express.json()); // to conver the req.body from raw JSON (Undifiend for Express) -> Object

//        root route       Router
app.use("/api/v1/tasks", tasksRouter);

const port = 3000;

const start = async () => { 
    try {
        await connectDB();
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start()