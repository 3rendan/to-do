const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo.js');

router.get('/', (req, res) => {
  Restaurant.find({}).then(restaurants => {
    res.render('todo/Index', { restaurants });
  });
});

// new
router.get('/new', (req,res) => {
    res.render('New');
});
// // create
// router.post('/', (req,res) => {
//     Todo.create(req.body, (error, createdTodo)=>{
//         res.redirect('');
//     });
// });
// // read
// router.get('/:id', (req,res)=> {
//     Todo.findById(req.params.id, (err, foundTodo) => {
//         res.render('Show', {
//            todo:foundTodo
//         });
//     });
// });
// // delete
// router.delete('/:id', (req, res) => {
//     Todo.findByIdAndRemove(req.params.id, (err, data) => {
//         res.redirect('/');
//     });
// });
// // update
// router.get('/:id/edit', (req, res) => {
//     Todo.findById(req.params.id, (err, foundTodo) => {
//         res.render('Edit.jsx', {
//             todo:foundTodo
//         });
//     })
// })
// // put
// router.put('/:id', (req, res) => {
//     Todo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
//         // res.send(updatedModel);
//         res.redirect('/');
//     });
// });

module.exports = router;