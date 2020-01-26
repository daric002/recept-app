const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Recepie = require('../models/recepies')

mongoose.connect('mongodb://localhost:27017/recepies');
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once("open", function(callback){
    console.log("Connection Succeeded");
  });


const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


const port = 3000

app.get('/recepies', (req, res) => {
    Recepie.find({},'title url', function(error, recepies){
        if(error){console.error(error)}
        res.send({
            recepies: recepies
        })
    }).sort({_id:-1});
})

app.post('/recepies', (req, res) => {
    var db = req.db;
    var title = req.body.title;
    var url = req.body.url;
    var newRecepie = new Recepie({
        title: title,
        url: url
    })
    newRecepie.save(function(error){
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Recepie saved successfully!'
          })

    })
})

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))