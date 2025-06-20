const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
    type:String,
    required:[true,'must provide name'], // or just set equal to true wihtout array
    trim: true,
    maxlength:[20, 'name cannot be more than 20 charaters'] 
    },completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task', TaskSchema)