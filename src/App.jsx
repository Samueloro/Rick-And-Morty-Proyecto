
import axios from 'axios'
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'



function App() {

  const [characters, setCharacters] = useState([]);

  
  const onSearch =(id) =>{
    const characterId = String(id);
    axios(`https://rickandmortyapi.com/api/character/${characterId}`).then(({ data }) => {
      if (data.name)  {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert('¡No hay personajes con este ID!');
      }
/*       console.log(characterId) */
    }).catch((error)=>{console.log(error)})
  }
  
  const onClose = (id)=>{
    console.log(characters);
    const parsedId = parseInt(id)
    const newCharacters = characters.map((character)=>{
      if(character.id !== parsedId){
        return character;
      } //crear variable para setearla}
      console.log(character.id);
    })
    console.log(id);
    console.log(parsedId);
    setCharacters(newCharacters)
    console.log('ola zi', characters); 
  }
  return (
    <>
      <div className='App'>
        <Nav onSearch={onSearch}/> 
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </>
  )
}

export default App;
