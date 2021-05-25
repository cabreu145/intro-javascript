const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad:'New York',
        zip: 5532732,
        lat: 14.3232,
        lng: 34.92333
    }

};

// console.table( { persona });


// NO *const persona2 = persona;*
const persona2 = { ...persona }
persona2.nombre = 'Peter'
persona2.apellido = 'Parker'
persona2.edad = 25




console.log( persona )
console.log(persona2)