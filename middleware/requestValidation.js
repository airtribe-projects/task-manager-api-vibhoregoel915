const response = require('../utils/responseHandler');
const validator = require('validator'); 

// validate task id
const validateTaskId = (req, res, next) => {
    let taskId = String(req.params.id);
    if(taskId == 'undefined' || validator.isEmpty(taskId)){
        return response.finalResponse(false, 404, '', 'Task ID is required', res);
    }
    if(!validator.isInt(taskId, { min: 1 })){
        return response.finalResponse(false, 404, '', 'Enter valid task id (must be positive integere gr8tr than 0)', res);
    }
    next();
}

// Function to validate new task
const validateNewTask = (req, res, next) => {
    let {title,description,completed} = req.body;
    // check if title, description and completed are present
    if(String(title) == 'undefined' || validator.isEmpty(String(title)) || title.trim().length === 0){
        return response.finalResponse(false, 400, '', 'Title is required', res);
    }
    if(String(description) == 'undefined' || validator.isEmpty(String(description)) || description.trim().length === 0){
        return response.finalResponse(false, 400, '', 'Description is required', res);
    }
    if(String(completed) == 'undefined' || validator.isEmpty(String(completed))){
        return response.finalResponse(false, 400, '', 'Completed is required', res);
    }
// competed should be boolean
    if(completed !== true && completed !== false){
        return response.finalResponse(false, 400, '', 'Completed should be boolean', res);
    }
    next();
}

module.exports = {
    validateTaskId,
    validateNewTask
}

