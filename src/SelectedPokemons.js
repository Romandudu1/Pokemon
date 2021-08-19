import React, {useState, useEffect} from 'react';
import logo from './logo.svg';


import {getAllPokemonDetails} from './selector'
import 'antd/dist/antd.css';
import './Content.css'
import { Input, Collapse, Tabs, Card, Alert, Button, Image} from 'antd';
import {getPokemons, getPokemonDetails} from './api/apipokemon'
import { setConstantValue } from 'typescript';

const { TabPane } = Tabs;
const { Search } = Input;
const { Panel } = Collapse;




const SelectedPokemons=React.memo((props)=>{

    const PokemonsSelected=(props)=>{
        console.log('image is ' + props.pokemons.length)
        return(props.pokemons.map(pokemon=>{
            return(
          <Card.Grid className="selectedpokemon" >
          <Image
          
          //preview={{ visible: visible}}
          width={300}
          src={pokemon.image}
        //onClick={() => setVisible(true)}
        />
        <h2 className='HeaderSelected'><b>{pokemon.name} # {pokemon.id}</b></h2>
        <table className='SelectedTable' >
    <tr>
      <th>Type</th>
      <th>{pokemon.type[0].type.name}</th>
      
    </tr>
    <tr>
      <td>Attack</td>
      <td>{pokemon.attack}</td>
      
    </tr>
    <tr>
      <td>Defence</td>
      <td>{pokemon.defense}</td>
     
    </tr>
    <tr>
      <td>HP</td>
      <td>{pokemon.hp}</td>
     
    </tr>
    <tr>
      <td>SP Attack</td>
      <td>{pokemon.spAttack}</td>
     </tr>
     <tr>
      <td>SP Defense</td>
      <td>{pokemon.spDefense}</td>
     </tr>
     <tr>
      <td>Speed</td>
      <td>{pokemon.speed}</td>
     </tr>
     <tr>
     <td>Weight</td>
      <td>{pokemon.weight}</td>
     </tr>
     <tr>
     <td>Total moves</td>
      <td>{pokemon.total_moves}</td>
     </tr>
  
  </table> 
        </Card.Grid>
 )} )
        )
        }



return(

<Card title={<h2>Here your selected Pokemons!!!</h2>} className='SelectedPokemons'>

<PokemonsSelected pokemons={props.pokemons} />
    </Card>



)


})
  
  export default SelectedPokemons;