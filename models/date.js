const mongoose = require('mongoose')

const dateSchema = mongoose.Schema({
    date: Date,
})

const dateModel = mongoose.model('dates', dateSchema)

module.exports = dateModel