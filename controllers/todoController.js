const Todo = require("../models/todos");

//Create Task
exports.addTask =  async (req, res) => {
    try{
        const new_task = new Todo({
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            dueDate: req.body.dueDate
    });
    const task = await new_task.save();
    res.status(201).json(task)
} catch (err) {
    res.status(401).send(err);
}
};

//Get all Tasks
exports.getAllTasks = async (req, res) => {
    try{
        const tasks = await Todo.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).send(err);
    }
};

//Update or Edit Task
exports.editTask =  async (req, res) => {
    try{
        await Todo.findByIdAndUpdate(req.params.id,{title: req.body.title, priority: req.body.priority, description: req.body.description, dueDate: req.body.dueDate});
        const task = await Todo.findById(req.params.id);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).send(err);
    }
};

//Delete Task
exports.deleteTask = async (req, res) => {
    try{
        await Todo.deleteOne({_id: req.params.id});
        res.status(201).send("Task Removed");
    } catch(err) {
        res.status(500).send(err);
    }
};