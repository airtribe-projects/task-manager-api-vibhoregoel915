const e = require('express');
const taskServices = require('../services/taskService');
const response = require('../utils/responseHandler');

// get all tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskServices.getAllTasks();
        if(tasks.length < 1 || tasks == null){
            return response.finalResponse(false, 404, tasks, "No data available", res);
        } else {
            return response.finalResponse(true, 200, tasks, "Tasks retrieved successfully", res);
        }
        
    } catch (error) {
        console.log(error)
        return response.finalResponse(false, 500, '', 'Internal Server Error', res);
    }
};

// get task by id
const getTaskById = async (req, res) => {
    try {
        const taskById = await taskServices.getTaskById(req,res);
        if(!taskById){
            return response.finalResponse(false, 404, taskById, "No data available", res);
        } else {
            return response.finalResponse(true, 200, taskById, "Task retrieved by id successfully", res);
        }
    } catch (error) {
        console.log(error);
        return response.finalResponse(false, 500, '', 'Internal Server Error', res);
    }
};

// insert task
const createTask = async (req, res) => {
    try {
        const task = await taskServices.createTaskService(req,res);
        return response.finalResponse(true, 201, task, "Task created successfully", res);
    } catch (error) {
        console.log(error);
        return response.finalResponse(false, 500, '', 'Internal Server Error', res);
    }
};

// update task
const updateTaskById = async (req, res) => {
    try {
        const task = await taskServices.updateTaskByIdService(req,res);
        if(task == null){
            return response.finalResponse(false, 404, task, "Resource not found to update", res);
        }
        return response.finalResponse(true, 200, task, "Task updated successfully", res);
    } catch (error) {
        console.log(error);
        return response.finalResponse(false, 500, '', 'Internal Server Error', res);
    }
};

// delet task
const deleteTask = async (req, res) => {
    try {
        const task = await taskServices.deleteTaskService(req,res);
        if(task == null){
            return response.finalResponse(false, 404, task, "Resource not found to delete", res);
        }
        return response.finalResponse(true, 200, task, "Task deleted successfully", res);
    } catch (error) {
        console.log(error);
        return response.finalResponse(false, 500, '', 'Internal Server Error', res);
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTaskById,
    deleteTask
}