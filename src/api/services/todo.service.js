const httpStatus = require('http-status');
const { Todo } = require('../model');
const ApiError = require('../utils/ApiError');

const createTodo = async (todoBody) => {
  const todo = {
    name: todoBody.name,
    description: todoBody.description,
    category: todoBody.category,
    status: "todo",
  }
  const todoData = await Todo.create(todo);
  return todoData;
};

const getTodoById = async (id) => {
  const todo = Todo.findById(id);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, "Todo not found");
  }
  return todo;
};

const getAllTodos = async () => {
  return Todo.find({});
};

const filterTodosByStatus = async (status) => {
  return Todo.find({status});
};

const updateTodo = async (id, todoBody) => {
  const todo = Todo.findById(id);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, "Todo not found");
  }
  return Todo.findByIdAndUpdate(id, todoBody, { new: true });
};

const updateTodoStatus = async (id, todostatus) => {
  const todo = Todo.findById(id);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, "Todo not found");
  }
  return Todo.findByIdAndUpdate(id, todostatus, { new: true });
};

const deleteTodo = async (id) => {
  const todo = Todo.findById(id);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, "Todo not found");
  }
  return Todo.findByIdAndDelete(id);
};

module.exports = {
  createTodo,
  getTodoById,
  getAllTodos,
  updateTodo,
  deleteTodo,
  updateTodoStatus,
  filterTodosByStatus
};
