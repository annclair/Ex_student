'use strict'
let Controller = require('./Controller')
const STUDENT = require('../models/student')

class StudentsController extends Controller {

    constructor(){
        super(STUDENT)
    }

    find(req, res, next){
      this.model.find(req.query)
      .populate({
        path:'promo'

    }).exec((err, document) => {
          if (err)
              next(err)
          else
              res.json(document)
      })
    }
}

module.exports = StudentsController
