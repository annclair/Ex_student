'use strict'

let mongoose = require('mongoose')

let studentModel = mongoose.model('Student', new mongoose.Schema({
    name : {
        type: String,
        unique : true,
        required: true
    },
    address:{
        type: String
    },
    age: {
        type: Number
    }
    // ,
    // promo:[{
    //     type : mongoose.Schema.Types.ObjectId,
    //     ref : 'Promo'
    // }]
}, {
    timestamps: true
}))

module.exports = studentModel
