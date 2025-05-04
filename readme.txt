Project Overview
----------------
It is simple node.js application doing CRUD operations taking database tasks.json file.
Entry point is server.js, app running on 3000 port.
Express framework is used
project follows MVC architecture
routes --> controllers --> services --> database(here json)
At route level only validation and error handling is done if payload is wrong it will not hit controller layer.

Setup instructions
------------------
Simply clone the repository feedback branch in local then hit npm i  in terminal make sure create 
one .env file having PORT = 3000 . Use POSTMAN to hit different endpoints listed below

get all tasks from json
GET - http://localhost:3000/api/v1/tasks 

insert new task into json
POST - http://localhost:3000/api/v1/tasks
Request.body = {
    "title": "setup different version of node",
    "description": "nvmrc",
    "completed": false
}

Find task from database by Id
GET - http://localhost:3000/api/v1/tasks/{id}

update task title, description, or completed of existing task
PUT - http://localhost:3000/api/v1/tasks {id}
Request.body = {
    "title": "title added",
    "description": "Install Node.js, npm, and git",
    "completed": true
}

delete existing task from database
DELETE - http://localhost:3000/api/v1/tasks/{id}

How to test APIs
----------------
I did manual testing from postman only tried passing parms body with different different payloads ensuring APIs
should give proper status code and handles errors gracefully