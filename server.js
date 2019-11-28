const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Todo = require('./models/todo.js');
const todoSeed = require('./models/seed.js')
const methodOverride = require('method-override');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/basiccrud'
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));
// connect to mongoose
mongoose.connect(MONGODB_URI, { 
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
app.get('/', (req, res) =>{
    Todo.find({}, (error,allTodo) => {
        res.render('Index', {
            todo: allTodo
        });
    });
});
// new
app.get('/new', (req,res) => {
    res.render('New');
})
// create
app.post('/', (req,res) => {
    Todo.create(req.body, (error, createdTodo)=>{
        res.redirect('');
    });
});
// read
app.get('/:id', (req,res)=> {
    Todo.findById(req.params.id, (err, foundTodo) => {
        res.render('Show', {
           todo:foundTodo
        });
    });
});
// delete
app.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/');
    });
});
// update
app.get('/:id/edit', (req, res) => {
    Todo.findById(req.params.id, (err, foundTodo) => {
        res.render('Edit.jsx', {
            todo:foundTodo
        });
    })
})
// put
app.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
        // res.send(updatedModel);
        res.redirect('/');
    });
})




app.listen(4545, ()=>{
    console.log('listening');
});