// setTimeout( () => console.log("d"), 2000)
// for (var i=0; i < 1000000000 ; i++) {

// }, 

const API_URL = "https://swapi.co/api/";
const PEOPLE_URL = "people/:id";
const opts = { crossDomain: true};


function obtenerPersonaje (id, callback) {
    const url =  `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function (person) {
        console.log(`Hola yo soy, ${person.name}`)

        if(callback) {
            callback()
        }
       } )
}

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function () {
            obtenerPersonaje(4, function() {
                obtenerPersonaje(5, function () {
                    obtenerPersonaje(6, function () {
                        obtenerPersonaje(7, function () {

                        })
                    })
                })
            })
        })
    })
})



