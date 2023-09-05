
import axios from 'axios'
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'



function App() {

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const characterId = String(id);
    const characterInList = characters.some((character) => character.id === Number(id))//some es para validar si algún personaje tiene el mismo id buscado//? devuelve booleano
    
    if (characterInList) {
      alert(`¡El personaje con el ID: ${id} ya está agregado!`)
      
    } else {
      axios(`https://rickandmortyapi.com/api/character/${characterId}`).then(({ data }) => {
        
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          
        } else {
          alert('¡No hay personajes con este ID!');
        }
        /*       console.log(characterId) */
      })
    }
  }
  
  const randomCharacter = ()=>{
    const randomId = Math.floor(Math.random() * (826 - 1 + 1)+1) // me devuelve un número aleatorrio entre 826 y 1
    return onSearch(randomId) // llamo a onSearch con el random 
  }
  

  const onClose = (id) => {
    const newCharacters = characters.filter(character => character.id !== Number(id))
    setCharacters(newCharacters)
  }

  return (
    <>
      <div className='App'>
        <Nav onSearch={onSearch} randomCharacter={randomCharacter}/>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </>
  )
}

export default App;
