const getAllTasks = (req, res) => {
  res.send("I have list of tasks");
};

const createTask = (req, res) => {
  res.send("I am creating a task");
};

const getSingleTask = () => {
  res.send("I am getting a single task");
};

const updateTask = () => {
  console.log("I am updating the tasks");
};

const deleteTask = () => {
  console.log("I am deleting the task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
