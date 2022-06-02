console.log("Task Manager App");
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const PORT = 3000;
const tasks = require("./routes/tasks");
require("dotenv").config();

//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, (req, res) => {
      console.log(`Server is listening on ${PORT}. . .`);
    });
  } catch (err) {
    console.log(`We have the error:  ${err}`);
  }
};

start();
