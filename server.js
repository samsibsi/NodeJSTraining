const { name } = require('ejs');
const express = require('express')

var path = require('path');
const app = express()

app.set('view engine', 'ejs')

app.use('/welcome/:name', function (req, res){
    let name_param = req.params.name
    res.render('index', {name:name_param})
})

app.listen(3000, ()=>{
    console.log("goo goo")
})