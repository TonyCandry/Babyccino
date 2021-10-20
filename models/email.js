const mongoose = require('mongoose')

const emailSchema = mongoose.Schema({
    email: String,
})

const emailModel = mongoose.model('emails', emailSchema)

module.exports = emailModel