const getAllTasks = (req, res) => {
    res.send(`All Tasks`)
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.json({id: req.params.id})
}

const updateTask = (req, res) => {
    res.send(`Update Task, id : ${req.params.id}`)
}

const deleteTask = (req, res) => {
    const {id} = req.params
    res.send(`Delete Task, id: ${id}`)
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}