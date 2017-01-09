'use strict'
let PromosController = require('../controllers/PromosController')

module.exports = (app) => {

let ctrl = new PromosController()

app.get('/promos', (req, res, next) => {
    return ctrl.find(req,res,next)
})

app.get('/promos/:id', (req, res, next) => {
    return ctrl.findById(req,res,next)
})

app.post('/promos', (req, res, next) => {
    return ctrl.create(req,res,next)
})

app.put('/promos/:id', (req, res, next) => {
    return ctrl.update(req,res,next)
})

app.delete('/promos/:id', (req, res, next) => {
    return ctrl.delete(req,res,next)
})
}
