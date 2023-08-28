


const persona = {
 nombre: 'Tony',
 apellido: 'Stark',
 edad: 45,
 direccion: {
    ciudad: 'New York',
    zip: 245245425,
    lat: 14.2313,
    lng: 34.1341, 
 }

};
// console.table( persona);


const persona2 = {...persona };
persona2.nombre = 'Peter';


console.log ( persona );
console.log(persona2)