((app) => {
    'use strict'

    app.component("bordeaux", {
        templateUrl: 'js/components/bordeaux/bordeaux.html',
        // bindings : { promo : "<" },
        controller : ['promosService', function(promosService){
          let _previous = {}

            promosService.get().then((response) => {
                this.promos = response.data
            })

            this.add = () => {
                promosService.add(this.selectedPromo).then((res) => {
                    // debugger
                    this.selectedPromo = {}
                    this.promos.push(res.data)
                })
            }

            this.delete = (promo, index) => {
                promosService.delete(promo).then((res) => {
                    //debugger
                    this.promos.splice(index, 1)
                })
            }

            this.edit = (promo) => {
                if (promo.editMode) {
                    promosService.edit(promo).then((res) => {
                        promo.editMode = false
                    })
                } else {
                    _previous[promo._id] = angular.copy(promo) // on fait une copie du promo dans un objet previous et avec comme valeur tout l'bjet
                    promo.editMode = true
                }
            }

            this.cancel = (promo, index) => {
                this.promos[index] = _previous[promo._id]
            }

        }]
    })

})(require('angular').module('app.bordeaux'))
