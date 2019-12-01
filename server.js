const express = require('express');
const app = express();
const mongoose = require('./db/connection.js');
const Todo = require('./models/todo.js');
const todoSeed = require('./models/seed.js')
const methodOverride = require('method-override');
// const Port = process.env.PORT || 4545
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/basiccrud'
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
// connect to mongoose
mongoose.connect('mongodb://localhost:27017/basiccrud', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: true
    });
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})
// Todo.create(todoSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
// })

// index view
