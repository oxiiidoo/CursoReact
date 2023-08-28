// import { heroes } from './data/heroes'
// import {heroes} from './data/heroes'
//  import  heroes, { owners }  from '../data/heroes';
 import  heroes from '../data/heroes';

// heroes = exporta generica y para poner una exportacion individual tengo que desestructurar 
// y tengo que colar { owner}. 
//  console.log ( owners );








// const getHeroesById = (id) => {
//     return heroes.find( ( heroes )  => {
//         if (heroes.id === id){
//             return true;
//             } else {
//                 return false;
//             }
//     })
    
// };


export const getHeroeById = (id) => heroes.find( (heroes)  => heroes.id == id );



// console.log( getHeroeById(2) );

//fin?, filter 


export const  getHeroesByOwner = ( owner ) =>heroes.filter( ( heroes )  => heroes.owner == owner );


// console.log (getHeroesByOwner('Marvel'));







