import mongoose from "mongoose";

const TaskSchema=new mongoose.Schema(
    {
        desc:{type: String, required: true},
        isDone:{type:Boolean,default:false}
    },
    {
        timestamps:true
    }
);

export const Task = mongoose.model('Task', TaskSchema);