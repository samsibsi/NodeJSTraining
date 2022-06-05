const express = require('express')
const rounter = require('./router')
var bodyParser = require('body-parser');

const mongoose = require("mongoose") 


const app = express()
const port = 3000

const fileUpload = require('express-fileupload')
// $ npm install express body-parser cors express-fileupload morgan lodash --save

mongoose
	.connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use(express.json()) // new
		app.use("/api", rounter)
})

app.use(fileUpload({
    createParentPath: true
}));


app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(rounter)

app.post('/welcome/', bodyParser.urlencoded({ extended: false }) , (req, res)=>{
    let name = req.body
    let mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
      ];
      console.log(mascots[0].name)
    res.render('welocome', {name:name.mascots})
})


app.listen(port, ()=>{
    console.log(`Example ${port}`)
})





