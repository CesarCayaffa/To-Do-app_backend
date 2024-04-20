const pool = require('../db');

// create task
exports.createTask = async (req, res) => {
    try {
        const { title, relevance } = req.body;
        const newTask = await pool.query(
            'INSERT INTO tasks (title, relevance) VALUES($1, $2) RETURNING *',
            [title, relevance]
        );
        res.json(newTask.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

// get all tasks
exports.getTasks = async (req, res) => {
    try {
        const allTasks = await pool.query('SELECT * FROM tasks');
        res.json(allTasks.rows);
    } catch (err) {
        console.error(err.message);
    }
};

// get a task
exports.getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
        res.json(task.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
};

// update a task
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, relevance } = req.body;
        const updateTask = await pool.query(
            'UPDATE tasks SET title = $1, relevance = $2 WHERE id = $3',
            [title, relevance, id]
        );
        res.json('Task was updated');
    } catch (err) {
        console.error(err.message);
    }
};

// delete a task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTask = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
        res.json('Task was deleted');
    } catch (err) {
        console.error(err.message);
    }
};


