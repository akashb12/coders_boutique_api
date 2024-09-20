const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const db = require('./db');
const routes = require('./routes/todo.route');


dotenv.config();

const app = express();
app.use(express.json());
const corsOptions = {
    origin: ['https://coders-boutique-front.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  };
  
  app.use(cors(corsOptions));
app.use('/api',routes)
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('server running on port ', port);
})