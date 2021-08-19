
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';


import {getAllPokemonDetails} from './selector'
import 'antd/dist/antd.css';
import './Content.css'
import { Input, Collapse, message, Tabs, Card, Alert, Button, Image} from 'antd';
import {getPokemons, getPokemonDetails} from './api/apipokemon'
import { setConstantValue } from 'typescript';
import SelectedPokemons from './SelectedPokemons'
const { TabPane } = Tabs;
const { Search } = Input;
const { Panel } = Collapse;




const Content=React.memo((props)=>{
  const [pokemonname, setpokemonname]=useState()
  const [pokemons, setpokemons]=useState([{name:'not selected', url:'selected'}])
  const [loader, setloader]=useState(12)
  const[visible, setVisible]=useState(false)
  const[pokemonsdata, setpokemonsdata]=useState([])
  const[showdetailed, setshowDetailed]=useState(false)
  const[pokemonsdetailed,setpokemonsdetailed]=useState({})
 
   useEffect(()=>{
    async function fetching(){
  
    
async function DataPokemons(){
    let PokemonsAll=[]
    
    for (var i = 0; i<loader; i++){
  let PokemonServer =  await  getPokemonDetails(i+1)


      let PokemonItem={
        id:i+1,
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
 
  setpokemonsdata(await DataPokemons())
  
    


   
    
  }
fetching()}, [loader])

    const gridStyle = {
      width: '20%',
      height:'250px',
      textAlign: 'center',
    };
    const info = () => {
      message.info('By default 12 pokemons, not lower');
    };

    const Pokemons=(props)=>{

    return props.pokemons.map(item=>{
          if(props.selectedtype.length===0){
      return(<Card.Grid value={item}  onClick={(e)=>{
        setpokemonsdetailed(item)
        setshowDetailed(true)
        
        }} style={gridStyle}>
        
        <b>{item.name}</b>
        <div>
      <Image
        //preview={{ visible: visible}}
        width={150}
        src={item.image}
      onClick={() => setVisible(true)}
      />
      </div>
      
      {item.type.length===1?<b className={item.type[0].type.name}>{item.type[0].type.name}</b>:<span><b className={item.type[0].type.name}>{item.type[0].type.name}</b><b className={item.type[1].type.name}>{item.type[1].type.name}</b></span>}
      </Card.Grid>)
}
else{
 console.log('includes is '+ item.type[0].type.name === props.selectedtype[0] + ' item type is ' + item.type[0].type.name + ' and selected type is ')
   
    if ( props.selectedtype.includes(item.type[0].type.name) || (item.type[1]? props.selectedtype.includes(item.type[1].type.name):false)){
  
 
  return(<Card.Grid value={item}  onClick={(e)=>{
    setpokemonsdetailed(item)
    setshowDetailed(true)
    
    }} style={gridStyle}>
    
    <b>{item.name}</b>
    <div>
  <Image
    //preview={{ visible: visible}}
    width={150}
    src={item.image}
  onClick={() => setVisible(true)}
  />
  </div>
  
  {item.type.length===1?<b className={item.type[0].type.name}>{item.type[0].type.name}</b>:<span><b className={item.type[0].type.name}>{item.type[0].type.name}</b><b className={item.type[1].type.name}>{item.type[1].type.name}</b></span>}
  </Card.Grid>)
}
}
    })
  
    }
   

    const PokemonsDetails=(props)=>{
   
      return(
        <Card title={<h2><b>Last selected Pokemon!!!</b></h2>}  className='detailed'>
        <Image
        className='imagedetailed'
        //preview={{ visible: visible}}
        width={300}
        src={props.pokemon.image}
      //onClick={() => setVisible(true)}
      />
      <h2 className='headerdetailed'><b>{props.pokemon.name} # {props.pokemon.id}</b></h2>
      <table className='tableDetailed'>
  <tr>
    <th>Type</th>
    <th>{props.pokemon.type[0].type.name}</th>
    
  </tr>
  <tr>
    <td>Attack</td>
    <td>{props.pokemon.attack}</td>
    
  </tr>
  <tr>
    <td>Defence</td>
    <td>{props.pokemon.defense}</td>
   
  </tr>
  <tr>
    <td>HP</td>
    <td>{props.pokemon.hp}</td>
   
  </tr>
  <tr>
    <td>SP Attack</td>
    <td>{props.pokemon.spAttack}</td>
   </tr>
   <tr>
    <td>SP Defense</td>
    <td>{props.pokemon.spDefense}</td>
   </tr>
   <tr>
    <td>Speed</td>
    <td>{props.pokemon.speed}</td>
   </tr>
   <tr>
   <td>Weight</td>
    <td>{props.pokemon.weight}</td>
   </tr>
   <tr>
   <td>Total moves</td>
    <td>{props.pokemon.total_moves}</td>
   </tr>

</table> 
      </Card>

      )
      }

if(props.searchpokemonname.length===0){
 
if(!showdetailed){
  return( <div className='wrapper'><Alert
    className='Information_Alert'
    message="Pokedex"
    description="Here you can find all information about your favorite pokemons!!!"
    type="info"
    showIcon
  />
  <Card >

    <Pokemons selectedtype={props.selectedtype} pokemons={pokemonsdata} />
  </Card>
  <span>
  <Button onClick={(()=>{setloader(loader+12)})}  block>Load More</Button>
  <Button onClick={(()=>{
    if(loader===12){
      console.log('loader value is ' + loader)
      info()
    } 
    setloader(loader===12?
    
    12:loader-12)})}  block>Hide</Button>
  </span>
  </div>
  )
}
else{

  return( <div className='wrapper'><Alert
  
  message="Pokedex"
  description="Here you can find all information about your favorite pokemons!!!"
  type="info"
  showIcon
/>
<Card  >

  <Pokemons selectedtype={props.selectedtype} pokemons={pokemonsdata} />
</Card>
<span>
<Button onClick={(()=>{setloader(loader+12)})}  block>Load More</Button>
<Button onClick={(()=>{
    if(loader===12){
      console.log('loader value is ' + loader)
      info()
    } 
    setloader(loader===12?
    
    12:loader-12)})}  block>Hide</Button>
</span>
<PokemonsDetails pokemon={pokemonsdetailed} />
</div>
)
}
}
else{

  
 
  return(
    <Card className='bigCard' >

    <SelectedPokemons  pokemons={props.searchpokemonname} />
  </Card>
  )
}

})
export default Content;