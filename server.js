const express = require('express');
const app = express();
const mongoose = require('./db/connection.js');
const methodOverride = require('method-override');
const Port = 4545;
// const Port = process.env.PORT || 4545
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/basiccrud'
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
// connect to mongoose
mongoose.connect('mongodb://localhost:27017/todo', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: true
    });
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})
const Todo = require('./models/Todo.js');

const todoController = require('./controller/todo.js');


app.listen(Port, () => console.log(`server is running on ${Port}`));
