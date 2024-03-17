const httpStatus = require('http-status');
const { Todo } = require('../model');
const ApiError = require('../utils/ApiError');

const createTodo = async (todoBody) => {
  const todoData = await Todo.create(todoBody);
  return todoData;
};

const getTodoById = async (id) => {
  return Todo.findById(id);
};

const getAllTodos = async () => {
  return Todo.find({});
};

const updateTodo = async (id, todoBody) => {
  return Todo.findByIdAndUpdate(id, todoBody, { new: true });
};

const deleteTodo = async (id) => {
    return Todo.findByIdAndDelete(id);
  };

module.exports = {
  createTodo,
  getTodoById,
  getAllTodos,
  updateTodo,
  deleteTodo
};
