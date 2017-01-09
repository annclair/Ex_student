'use strict'

let mongoose = require('mongoose')

let promoModel = mongoose.model('Promo', new mongoose.Schema({
    name : {
        type: String,
        unique : true,
        required: true
    },
    numero: {
        type: Number
    }
}, {
    timestamps: true
}))

module.exports = promoModel
