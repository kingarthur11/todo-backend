const express = require("express");
const todoController = require("../../controller/todo.controller");

const router = express.Router();

router.get("/getone/:todo_id", todoController.getOneTodo);
router.get("/getall", todoController.getAllTodo);
router.get("/filter-todo/:status", todoController.filterTodosByStatus);
router.post("/create", todoController.createTodo);
router.put("/update/:todo_id", todoController.updateTodo);
router.put("/update-status/:todo_id", todoController.updateTodoStatus);
router.delete("/delete/:todo_id", todoController.deleteTodo);


module.exports = router;
