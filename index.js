const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
require('dotenv').config();
const tasksRoute = require('./routes/tasksRouter');

const app = express();
app.use(bodyParser.json());

//crear tabla
const createTable = `
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    completed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    relevance VARCHAR(50)
);
`;
pool.query(createTable, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Table created successfully');
    }
});


app.use('/tasks', tasksRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. Visit http://localhost:${PORT}/tasks`);
});