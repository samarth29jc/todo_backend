const Todo = require("../model/todo.model");
const createTodo = async (req, res) => {
    const { title, description, completed, createdAt } = req.body;
    const todo = new Todo({ title, description, completed, createdAt });
    try {
        await todo.save();
        res.status(201).json({message:"todo done created",todo});
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
    
};

const getTodo=async(req,res)=>{
    try{
        const todos= await Todo.find();
        res.status(201).json({message:"fetched todos succesfully",todos});
    }catch(error){
        res.status(500).json({ message: error.message, error });
    }
}

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, completed } = req.body;
        const todo = await Todo.findByIdAndUpdate(
            id,
            { title, description, completed },
            { new: true }
        );
        if (!todo) {
            return res.status(404).json({ message: "todo not found" });
        }
        res.status(200).json({ message: "todo updated succesfully", todo });
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
};

const deletedTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({ message: "todo not found" });
        }
        res.status(200).json({ message: "todo deleted succesfully", todo });
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
};

module.exports = { createTodo , getTodo, updateTodo, deletedTodo };