const mongoose = require('mongoose')

const { Schema, model } = mongoose

const UserSchema = new Schema({
    email: String,
})

module.exports = model('User', UserSchema)