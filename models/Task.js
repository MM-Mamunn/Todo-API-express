import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    idd: { type: String, required: true },
    desc: { type: String, required: true },
    isDone: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model("Task", TaskSchema);
