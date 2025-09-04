const express= require("express");

const router= express.Router();
const { createTodo, getTodo, updateTodo, deletedTodo } = require("../controller/todo.controller");
router.post("/create", createTodo);
router.get("/get", getTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deletedTodo);
module.exports= router;