import express from 'express';
const router = express.Router();
import { Task } from '../models/Task.js';
import {viewTasks,viewSingleTask,insertTask,updateTask,deleteTask} from '../controllers/task.controller.js'

router.get('/view',viewTasks);

router.get('/view/:id',viewSingleTask);

router.post('/insert',insertTask);

router.put('/update/:id',updateTask);

router.delete('/delete/:id',deleteTask);

export default router;