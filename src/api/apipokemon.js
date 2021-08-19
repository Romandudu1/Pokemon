import  axios from 'axios';
import unsplash from 'unsplash-js'



const  instancePokemon = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon/'
    
})

const  instancePokemonType = axios.create({
    baseURL:'https://pokeapi.co/api/v2/type/'
    
})



export  const getPokemons =()=>{
   

    return  instancePokemon.get('/', { params: { limit:12  } })

}

export  const getPokemonAllDetails=(quantity)=>{
   

    return  instancePokemon.get('/', { params: { limit:quantity  } })

}
    
export  const getPokemonDetails =(id)=>{
   
return  instancePokemon.get('/' + id)

}

export  const getPokemonTypes =(limit)=>{
   
    return  instancePokemonType.get('/',  { params: { limit:limit  } })
    
    }





