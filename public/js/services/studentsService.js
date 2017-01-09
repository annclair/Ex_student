((app) => {

  'use strict'
  app.service('studentsService', function($http) {
      return {
        get() {
            return $http.get('/api/students')
        },
        add(student) {
            return $http.post('/api/students', student)
        },
        edit(student) {
            return $http.put('/api/students/' + student._id, student)
        },
        delete(student) {
            return $http.delete('/api/students/' + student._id)
        }
      }
  })

})(require('angular').module('app.services'))
