const express = require('express');
const router = express.Router();
const validator = require('../middleware/requestValidation');

const tasksController = require('../controllers/taskController');

// Get all tasks
router.get('/tasks', tasksController.getAllTasks);
// Get a task by ID
router.get('/tasks/:id', validator.validateTaskId, tasksController.getTaskById);
// Create a new task
router.post('/tasks', validator.validateNewTask, tasksController.createTask);
// Update a task by ID
router.put('/tasks/:id', validator.validateTaskId, validator.validateNewTask, tasksController.updateTaskById);
// Delete a task by ID
router.delete('/tasks/:id', validator.validateTaskId, tasksController.deleteTask);

module.exports = router;