const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// create task
router.post('/', taskController.createTask);

// get all tasks
router.get('/', taskController.getTasks);

// get a task
router.get('/:id', taskController.getTask);

// update a task
router.put('/:id', taskController.updateTask);

// delete a task
router.delete('/:id', taskController.deleteTask);

module.exports = router;
