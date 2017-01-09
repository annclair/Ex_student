((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.list', {
            url:'/',
            template:'<list></list>'
        })
    }])
})(require('angular').module('app.list', []))
