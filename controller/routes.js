//Dependencies
const express = require('express');
const router = express.Router();
const ToDo = require('../models/todo.js');


//Index
router.get('/', (req, res) => {
    ToDo.find({}, (err, todos) => {
        console.log(todos)
        res.render('Index', {todos})
    })
})


//Post
router.post('/', (req, res) => {
    ToDo.create(req.body, (err, createdItem) => {
        res.redirect('/todos')
    })
})


//Destroy
router.delete('/:id', (req, res) => {
    ToDo.findByIdAndRemove(req.params.id, (err, todo) => {
        res.redirect('/todos');
    })
})

module.exports = router;