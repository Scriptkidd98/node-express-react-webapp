const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection successful');
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});