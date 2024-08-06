# Todo API

## This is a node API for a todo app using mongodb.That works with this [React frontEnd](https://github.com/MM-Mamunn/Todo-FrontEnd-React)

### Installation

Install nodemodule,express,mongoose,cors,body-parser,nodemon via following command.

```
npm install
```

```
npm install express@4
```

```
npm install mongoose
```

```
npm install cors
```

```
npm i body-parser
```
```
npm i nodemon
```

###if your mongodb is connected to  port 
```
127.0.0.1:27017
```
then, make sure to make the following changes to the ### index.js file,
from
```
...
  await mongoose.connect('mongodb://127.0.0.1:28017/todo-app')
...
```
to

```
...
  await mongoose.connect('mongodb://127.0.0.1:27017/todo-app')
...
```

You are ready to go.
Run the following command to run this back end
```
npm run dev
```
or 
```
node index.js
```

nodemodule necessary for a node api, Express provides facilities to create a server and api, mongoose is used to ineract with mongodb from the express, cors is to avoid port conflicts,nodemon for interaction with the localhost

