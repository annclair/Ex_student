'use strict'
let Controller = require('./Controller')
const PROMO = require('../models/promo')

class PromosController extends Controller {

    constructor(){
        super(PROMO)
    }
}

module.exports = PromosController
