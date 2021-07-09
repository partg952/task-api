var mongoose = require('mongoose')
var express = require('express')
var cors = require('cors')
var app = express();
let URL = 'mongodb+srv://paddo:radhika@cluster0.zm7oz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
var Task = require('./mongoose')
app.use(cors());
mongoose.connect(URL,{useNewUrlParser:true})
.then(()=>app.listen(8080,()=>console.log('listening at port 8080')))
.catch(()=>console.log("sorry we faced some issue"))

app.get('/',(req,res)=>{
        Task.find().then((result)=>{
            res.send(result)
        })
})
app.get('/add-task',(req,res)=>{
    var data = new Task({
        task:req.query['name']
    })
    data.save().then((result)=>{
        res.send(result)
    }).catch(()=>{
        console.log('we faced some error please try again later')
    })
})