import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import { Task } from './models/Task.js';
import taskRoute from './routes/tasks.route.js'
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/task',taskRoute)



  await mongoose.connect('mongodb://127.0.0.1:28017/todo-app')
  .then(()=>{
    console.log("connected");
    app.listen(port, () => {
      console.log(`server  listening on port ${port}`)
    })
    
  })
  .catch(()=>{
    console.log("not connected");
  })


