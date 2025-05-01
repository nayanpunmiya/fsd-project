const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const membersRoute = require('./routes/members');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/members', membersRoute);

mongoose.connect('mongodb://localhost:27017/team')
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


app.listen(5000, () => console.log('Server started on port 5000'));