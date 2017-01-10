((app) => {
    'use strict'

    app.component("list", {
        templateUrl: 'js/components/list/list.html',
        controller : ['studentsService', function(studentsService){

            // angular.extend(this, {
            //     _previous : {},
            //
            //     $onInit(){
            //         studentsService.get().then((response) => {
            //             this.students = response.data
            //         })
            //         studentsService.getPromos().then((response) => {
            //             this.promos = response.data
            //         })
            //     },
            //     add(){
            //         studentsService.add(this.selectedStudent).then((res) => {
            //             this.selectedStudent = {}
            //             this.students.push(res.data)
            //         })
            //     },
            //     delete(student, index){
            //         studentsService.delete(student).then((res) => {
            //             //debugger
            //             this.students.splice(index, 1)
            //         })
            //     },
            //     edit(student){
            //         if (student.editMode) {
            //             studentsService.edit(student).then((res) => {
            //                 student.editMode = false
            //             })
            //         } else {
            //             _previous[student._id] = angular.copy(student) // on fait une copie du student dans un objet previous et avec comme valeur tout l'bjet
            //             student.editMode = true
            //         }
            //     },
            //     cancel(student, index){
            //         this.students[index] = _previous[student._id]
            //     }
            //
            // })


          let _previous = {}

            studentsService.get().then((response) => {
                this.students = response.data
            })
            studentsService.getPromos().then((response) => {
                this.promos = response.data
            })

            this.add = () => {
                studentsService.add(this.selectedStudent).then((res) => {
                    // debugger
                    this.selectedStudent = {}
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
