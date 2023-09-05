
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
    const newCharacters = characters.filter(character => character.id !== Number(id))
    setCharacters(newCharacters) 
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
