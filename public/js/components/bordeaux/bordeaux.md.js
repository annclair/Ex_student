((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.bordeaux', {
            url:'/',
            template:'<bordeaux></bordeaux>'
        })
    }])
})(require('angular').module('app.bordeaux', []))
