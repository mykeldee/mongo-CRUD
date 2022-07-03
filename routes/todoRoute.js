const express = require('express');

const router = express.Router();
const controller = require('../controllers/todoController');

router.post('/createTask', controller.addTask)

router.get('/getAllTasks/', controller.getAllTasks)

router.patch('/editTask/:id', controller.editTask)

router.delete('/deleteTask/:id', controller.deleteTask)

module.exports = router;

