const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const maintnanceMode = require("./middleware/maintnance");

const app = express();

app.use(maintnanceMode); //Currently not in maintnance mode
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
