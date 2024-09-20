
const db = require('../db');

const listTodos = async (req, res) => {
    try {
        let result = await db.query('select * from tasks')
        res.status(200).json({ status: true, message: 'list fetched', data: result.rows ? result.rows : [] })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message, data: [] })
    }
};

const addTodo = async (req, res) => {
    try {
        const { task, status } = req.body;
        if (!task || !status) {
            throw new Error('Some Fields are missing')
        }
        await db.query('insert into tasks (task,status) values ($1,$2)', [task, status])
        res.status(201).json({ status: true, message: "todo inserted", data: {} })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message, data: {} })
    }
};

const editTodo = async (req, res) => {
    try {
        let id = req.params.id;
        const { task, status } = req.body;
        if (!task || !status) {
            throw new Error('Some Fields are missing')
        }
        await db.query('update tasks set task = $1,status = $2 where id = $3', [task, status, id])
        res.status(200).json({ status: true, message: "todo updated", data: {} })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message, data: {} })
    }
};

const deleteTodo = async (req, res) => {
    try {
        let id = req.params.id;
        let result = await db.query('delete from tasks where id = $1', [id])
        res.status(200).json({ status: true, message: "todo deleted", data: {} })
    } catch (error) {
        res.status(500).json({ status: false, message: error.message, data: {} })
    }
};



module.exports = {
    listTodos: listTodos,
    addTodo: addTodo,
    editTodo: editTodo,
    deleteTodo: deleteTodo
}