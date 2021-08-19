import React, {useState, useEffect} from 'react';

import s from  './App.module.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Content from "./Content";

import NavigationTest from "./Components/Navigation/NavigationTest";
import 'antd/dist/antd.css';
import {message, Select } from 'antd';
import {getPokemonAllDetails, getPokemonDetails, getPokemonTypes} from './api/apipokemon'

const { Option } = Select;
function App(props) {
 
  const[searchpokemonname, setsearchpokemonname]=useState([])
  const[childrenPokemon, setchildrenPokemon]=useState([''])
  const[childrenPokemonType, setchildrenPokemonType]=useState([''])
  const[searching, setsearching]=useState(0);
  const[allpokemons, setAllpokemons]=useState([])
  const [pokemonselecteddata, setpokemonselecteddata]=useState([])
  const [pokemonselectedtype, setpokemonselectedtype]=useState([])
  const [pokemontypes, setpokemontypes]=useState([])
  
useEffect(()=>{
  async function fetching(){
    const AllPokemonsTypes  = await getPokemonTypes(999)
    var childrenPokemonArrayTypes =[] 
    setpokemontypes(AllPokemonsTypes)
    for(var i = 0; i<AllPokemonsTypes.data.results.length; i++){
      childrenPokemonArrayTypes.push(<Option  key={AllPokemonsTypes.data.results[i].name}>{AllPokemonsTypes.data.results[i].name}</Option>)
    
     }
    setchildrenPokemonType(childrenPokemonArrayTypes)

    setpokemonselectedtype([]);
 var childrenPokemonArray =[] 
const AllPokemons  = await getPokemonAllDetails(1117)


setAllpokemons(AllPokemons)

 for(var i = 0; i<AllPokemons.data.results.length; i++){
  childrenPokemonArray.push(<Option  key={AllPokemons.data.results[i].name}>{AllPokemons.data.results[i].name}</Option>)

 }
setchildrenPokemon(childrenPokemonArray)
setpokemonselecteddata([]);


}
if (parseInt(searchpokemonname.length)===0){
 
fetching()
}

else{
  async function fetchingSearch(){
  
    
    async function DataPokemons(){
        let PokemonsAll=[]
        
        for (var i = 0; i<searchpokemonname.length; i++){
      let PokemonServer =  await  getPokemonDetails(searchpokemonname[i])
     
    
          let PokemonItem={
            id:searchpokemonname[i],
            name:  PokemonServer.data.forms[0].name,  
            image: PokemonServer.data.sprites.other['official-artwork'].front_default,
            type:  PokemonServer.data.types,
            weight:PokemonServer.data.weight,
            attack:PokemonServer.data.stats[1].base_stat,
            defense:PokemonServer.data.stats[2].base_stat,
            hp:PokemonServer.data.stats[0].base_stat,
            spAttack:PokemonServer.data.stats[3].base_stat,
            spDefense:PokemonServer.data.stats[4].base_stat,
         
            speed:PokemonServer.data.stats[5].base_stat,
            total_moves:PokemonServer.data.moves.length,
          }
          
            PokemonsAll.push(PokemonItem)
           
                
        
        }
        
        return PokemonsAll
        
      }
     
      setpokemonselecteddata(await DataPokemons())
    
     setsearching(0)
        
    
    
       
        
      }
    fetchingSearch()
}

}, [ searchpokemonname])
  

async function handleChange(value) {

  
  var selectedPokemonsIDs=[]
  for(var i =0;i<value.length; i++){
 let index = await (allpokemons.data.results.findIndex(item => item.name === value[i])) + 1
  
  
  selectedPokemonsIDs.push(index)

}
await setsearchpokemonname(selectedPokemonsIDs)

setsearching(1)

}

async function handleChangeType(value) {

  
  
 
 setpokemonselectedtype(value)

setsearching(1)

}


  return (
    <BrowserRouter>
    <div className={s.wrapper}>
    <div className ={s.caption}>
          
          Pokemon World
          <span className={s.auth}>
          <Select
    className='item'
      mode="multiple"
      name='Pokemon'
      allowClear = {true}
      style={{ width: '20%' }}
      placeholder="Insert Pokemon Name!"
  
     onChange={handleChange}
    >
      {childrenPokemon}
    </Select>
    <Select
    className='item'
      mode="multiple"
      name='Pokemon Type'
      allowClear = {true}
      style={{ width: '20%' }}
      placeholder="Insert Pokemon Type!"
  
     onChange={handleChangeType}
    >
      {childrenPokemonType}
    </Select>
    </span>
    </div>
 
 
 
 <Content selectedtype={pokemonselectedtype} searchpokemonname={pokemonselecteddata} className='content' />
      
     
      <NavigationTest  className="navigation" />


    </div>
    </BrowserRouter>
  );
}

export default App;
