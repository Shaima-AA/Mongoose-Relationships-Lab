const mongoose = require('mongoose')

//schema 
const userSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    }
},{timestamps: true})

//model 
const User = mongoose.model('User', userSchema)

//export model

module.exports = User