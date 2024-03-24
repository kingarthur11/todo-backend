const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { todoService } = require("../services");

const createTodo = catchAsync(async (req, res) => {
  const todo = await todoService.createTodo(req.body);
  res.status(httpStatus.CREATED).json({ message: "Created successfully", todo });
});

const getAllTodo = catchAsync(async (req, res) => {
  const todo = await todoService.getAllTodos();
  res.status(httpStatus.OK).json({ message: "Todo retrieved successfully", todo });
});

const filterTodosByStatus = catchAsync(async (req, res) => {
  const todo = await todoService.filterTodosByStatus(req.params.status);
  res.status(httpStatus.OK).json({ message: "Todo retrieved successfully", todo });
});

const getOneTodo = catchAsync(async (req, res) => {
  const todo = await todoService.getTodoById(req.params.todo_id);
  res.status(httpStatus.OK).json({ message: "Todo retrieved successfully", todo });
});

const updateTodo = catchAsync(async (req, res) => {
  const todo = await todoService.updateTodo(req.params.todo_id, req.body);
  res.status(httpStatus.OK).json({ message: "Todo updated successfully", todo });
});

const updateTodoStatus = catchAsync(async (req, res) => {
  const todo = await todoService.updateTodoStatus(req.params.todo_id, req.body);
  res.status(httpStatus.OK).json({ message: "Todo status updated successfully", todo });
});

const deleteTodo = catchAsync(async (req, res) => {
  await todoService.deleteTodo(req.params.todo_id);
  res.json({ message: "Deleted successfully" });
});

module.exports = {
  createTodo,
  getAllTodo,
  getOneTodo,
  updateTodo,
  deleteTodo,
  updateTodoStatus,
  filterTodosByStatus
};
