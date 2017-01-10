'use strict'
let Controller = require('./Controller')
// const PROMO = require ('./models/promo')
const STUDENT = require('../models/student')

class StudentsController extends Controller {

    constructor(){
        super(STUDENT)
    }

// populate les promo dans la base de donnée des élèves
    findById(req,res,next){
    this.model.findById(req.query)
        .populate({
            path:'promo'
        }).exec((err,document) => {
          	if(err)
          		next(err)
          	else {
          		res.json(document)
            }
        })
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

// pour forcer le refresh au moment du populate
    create(req, res, next){
      this.model.create(req.body, (err, document) => {
          if (err) {
              next(err)
          } else {
            this.model.findById(document._id)
                .populate({
                    path:'promo'
                }).exec((err,document) => {
                  	if(err)
                  		next(err)
                  	else {
                  		res.json(document)
                    }
                })
          }
      })
    }

    update(req, res, next){
      this.model.update({
          _id: req.params.id
      }, req.body, (err, document) => {
          if (err) {
              next(err)
          } else {
            this.model.findById(document._id)
                .populate({
                    path:'promo'
                }).exec((err,document) => {
                    if(err)
                      next(err)
                    else {
                      res.json(document)
                    }
                })
          }
      })
    }

}

module.exports = StudentsController
