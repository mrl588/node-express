const Task= require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')
 
const getAllTasks = asyncWrapper( async (req,res) => {
        const tasks = await Task.find({})
        res.status(200).json({tasks})

        //res.status(200).json({tasks,amount:tasks.length})
        //res.status(200).json({tasks,sucess:true})
})

const createTask = asyncWrapper (async(req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
})
const getTask = asyncWrapper (async (req,res) => {
    const {id:taskID} = req.params
    const task = await Task.findOne({_id: taskID});
    if(!task){
        return next(createCustomError(`no task with id: ${taskID} `,404))
     }
    res.status(200).json({task})

})

const updateTask = asyncWrapper (async (req,res) => {
    const {id:taskID} = req.params;

    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,
        runValidators:true
    })

    if (!task){
        return next(createCustomError(`no task with id: ${taskID} `,404))
    }
    res.status(200).json({id:taskID,data:req.body})
}) 
const deleteTask = asyncWrapper (async(req,res) => {
    const {id:taskID} = req.params
    const task = await Task.findByIdAndDelete({_id:taskID})
    if(!task){
        return next(createCustomError(`no task with id: ${taskID} `,404))
    }
    res.status(200).json({task})
})

module.exports  = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}