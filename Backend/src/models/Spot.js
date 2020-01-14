const mongoose = require('mongoose')

const { Schema, model } = mongoose

const SpotSchema = new Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = model('Spot', SpotSchema)