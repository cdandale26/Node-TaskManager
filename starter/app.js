console.log("Task Manager App");
const express = require("express");
const app = express();
const PORT = 3000;
const tasks = require("./routes/tasks");

//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on ${PORT}. . .`);
});
