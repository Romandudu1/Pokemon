
import {getPokemonDetails} from './api/apipokemon'

export const getAllPokemonDetails= async(pokemons)=>{
    for(var i=0; pokemons.length; i++){
        getPokemonDetails(i+1).then(res=>
        console.log(res.data.base_experience))
        }

} 
