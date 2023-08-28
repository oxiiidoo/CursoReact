//Desestructuracion
//Asiganacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};




// console.log (nombre );
// console.log( edad );
// console.log( clave );

const retornaPersona = ({ clave, nombre, edad, rango = 'Capitan'}) => {

    
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1231231,
            lng: -12.3342
        }

    }

}

const { nombreClave, anios, latlng:{lat, lng} } = retornaPersona( persona );
console.log(nombreClave, anios);
console.log(lat, lng);