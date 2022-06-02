const express = require('express')
const rounter = require('./router')
const app = express()
const port = 3000

app.use(rounter)
app.get('/welcomw/:name', (req, res)=>{
    let name = req.params.name
    res.json('Hello world 2' + name)
})

app.listen(port, ()=>{
    console.log(`Example ${port}`)
})





