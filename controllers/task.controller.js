import { Task } from "../models/Task.js";

const viewTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}).sort({ updatedAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const viewSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({idd:id});
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const insertTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    // const task = await Task.findByIdAndUpdate(id,req.body);
    const task = await Task.findOneAndUpdate({ idd: id }, req.body);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    const updated_task = await Task.findOne({idd:id});

    return res.status(200).json(updated_task);
  } catch (error) {
    res.status(500).json({ message: "errors" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({idd:id});
    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { viewTasks, viewSingleTask, insertTask, updateTask, deleteTask };
