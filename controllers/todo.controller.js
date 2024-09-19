
const db = require('../db');

const listTodos = async (req, res) => {
    try {
        let result = await db.query('select * from todos')
        res.status(200).json({ status: true, message:'list fetched', data: result.rows ? result.rows : [] })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message, data: [] })
    }
};

const addTodo = async (req, res) => {
    try {
        const { description } = req.body;
        if (!description) {
            throw new Error('Description is missing')
        }
        let result = await db.query('insert into todos (description) values ($1)', [description])
        res.status(201).json({ status: true, message: "todo inserted", data: {} })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message, data: {} })
    }
};

const editTodo = async (req, res) => {
    try {
        const { description } = req.body;
        let id = req.params.id;
        if (!description) {
            throw new Error('Description is missing')
        }
        let result = await db.query('update todos set description = $1 where id = $2', [description, id])
        res.status(200).json({ status: true, message: "todo updated", data:{}})
    } catch (error) {
        res.status(500).json({ status: false, message: error.message, data:{}})
    }
};

const deleteTodo = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await db.query('delete from todos where id = $1', [id])
        res.status(200).json({ status: true, message: "todo deleted", data: {} })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message, data: {} })
    }
};



module.exports = {
    listTodos: listTodos,
    addTodo: addTodo,
    editTodo: editTodo,
    deleteTodo:deleteTodo
}