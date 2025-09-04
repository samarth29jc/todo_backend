import Todo from "../model/todo.model.js";
const createTodo = async (req, res) => {
    const { title, description, completed, createdAt } = req.body;
    const todo = new Todo({ title, description, completed, createdAt });
    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
};
module.exports = { createTodo };