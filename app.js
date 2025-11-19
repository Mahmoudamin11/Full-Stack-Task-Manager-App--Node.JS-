const express = require("express");
const tasksRouter = require("./routes/tasks");
const app = express();

// Middleware
app.use(express.json()); // to conver the req.body from raw JSON (Undifiend for Express) -> Object

//        root route       Router
app.use("/api/v1/tasks", tasksRouter);

const port = 3000;
app.listen(port, console.log(`Server is listening on port ${port}...`));
