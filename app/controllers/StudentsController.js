'use strict'
let Controller = require('./Controller')
const STUDENT = require('../models/student')

class StudentsController extends Controller {

    constructor(){
        super(STUDENT)
    }
}

module.exports = StudentsController
