const express = require('express');
const { addTodo, listTodos, editTodo, deleteTodo } = require('../controllers/todo.controller');
const router = express.Router();
router.get('/todos/listTodos', listTodos);
router.post('/todos/addTodo', addTodo);
router.put('/todos/editTodo/:id', editTodo);
router.delete('/todos/deleteTodo/:id', deleteTodo);
module.exports = router;
