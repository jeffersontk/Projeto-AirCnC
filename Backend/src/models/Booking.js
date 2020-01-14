const mongoose = require('mongoose')

const { Schema, model } = mongoose

const BookingSchema = new Schema({
    date: String,
    Approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
})

module.exports = model('Booking', BookingSchema)