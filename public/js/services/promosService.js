((app) => {

  'use strict'
  app.service('promosService', function($http) {
      return {
        get() {
            return $http.get('/api/promos')
        },
        add(promo) {
            return $http.post('/api/promos', promo)
        },
        edit(promo) {
            return $http.put('/api/promos/' + promo._id, promo)
        },
        delete(promo) {
            return $http.delete('/api/promos/' + promo._id)
        }
      }
  })

})(require('angular').module('app.services'))
