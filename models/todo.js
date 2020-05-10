const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toDoSchema = new Schema({
    todo: String,
    done: {type: Boolean, default: false}
})

//Creates model
const toDo = mongoose.model('toDo', toDoSchema);
module.exports = toDo;