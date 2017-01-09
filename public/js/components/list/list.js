((app) => {
    'use strict'

    app.component("list", {
        templateUrl: 'js/components/list/list.html',
        controller : ['studentsService', function(studentsService){
          let _previous = {}

            studentsService.get().then((response) => {
                this.students = response.data
            })

            this.add = () => {
                studentsService.add(this.selectedUser).then((res) => {
                    // debugger
                    this.selectedUser = {}
                    this.students.push(res.data)
                })
            }

            this.delete = (student, index) => {
                studentsService.delete(student).then((res) => {
                    //debugger
                    this.students.splice(index, 1)
                })
            }

            this.edit = (student) => {
                if (student.editMode) {
                    // http
                    studentsService.edit(student).then((res) => {
                        student.editMode = false
                    })
                } else {
                    _previous[student._id] = angular.copy(student) // on fait une copie du student dans un objet previous et avec comme valeur tout l'bjet
                    student.editMode = true
                }
            }

            this.cancel = (student, index) => {
                this.students[index] = _previous[student._id]
            }

        }]
    })

})(require('angular').module('app.list'))
