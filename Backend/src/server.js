const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://userAdmin:adminUser@cluster0-6ijau.mongodb.net/semana-9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

console.log("servidor rodando na porta 3334 // http://localhost:3334")
app.listen(3334)