//Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const port = 3000;

//DB
const ToDo = require('./models/todo')

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

//mongoose connection:
mongoose.connect('mongodb://localhost:27017/to-do', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

//Controller
const toDoController = require('./controller/routes.js');
app.use('/todos', toDoController);



app.listen(port, () => {
    console.log('listening on port ' + port);
});