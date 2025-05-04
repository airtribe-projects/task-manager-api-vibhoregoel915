const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'task.json');
let data = fs.readFileSync(filePath , 'utf8');
data = JSON.parse(data);

// Function to get all tasks
const getAllTasks = (req, res) => {
    return data.tasks;
}

// Function to get a task by ID
const getTaskById = (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = data.tasks.find(task => task.id === taskId);
    return task;
}

// Function to create a new task
const createTaskService = (req,res) => {
    const {title, description, completed} = req.body;
    const newTask = {
        id: data.tasks.length + 1,
        title: title,
        description: description,
        completed: completed
    }
    data.tasks.push(newTask);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return newTask;
}

// Function to update a task by ID
const updateTaskByIdService = (req,res) => {
    const taskId = parseInt(req.params.id);
    // checking id passsed id task exists or not
    const taskIndex = data.tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        return null;
    }
    const updatedTask = {
        ...data.tasks[taskIndex],
        ...req.body
    };
    data.tasks[taskIndex] = updatedTask;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return updatedTask;
}
// Function to delete a task by ID
const deleteTaskService = (req,res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = data.tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        return null;
    }
    const deletedTask = data.tasks.splice(taskIndex, 1);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return deletedTask;
}

module.exports ={
    getAllTasks,
    getTaskById,
    createTaskService,
    updateTaskByIdService,
    deleteTaskService
}