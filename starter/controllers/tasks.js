const getAllTasks = (req, res) => {
  res.send("I am available to do the tasks");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getSingleTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("I am updating the tasks");
};

const deleteTask = (req, res) => {
  res.send("I am deleting the task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
