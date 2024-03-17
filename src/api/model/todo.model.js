const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const todoSchema = mongoose.Schema(
  {
    _id: Number,
    name: {
        type: String,
        required: true,
        trim: true,
    },
    target: {
        type: String,
        required: false,
        default: null,
        trim: true,
    },
    status: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

todoSchema.plugin(AutoIncrement, {id: 'todo_id', inc_field: '_id'});
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
