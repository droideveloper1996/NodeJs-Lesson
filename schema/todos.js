const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Todos = mongoose.model("Todo", TodoSchema);

module.exports.TodosSchema = Todos;
