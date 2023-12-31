
import { Route, Routes, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import Detail from './components/Detail/Detail'
import About from './components/About/About'
import Error from './components/Error/Error'
import Start from './components/Start/Start'
import Favorites from './components/Favorites/Favorites'



function App() {
  //ESTADOS LOCALES
  const [characters, setCharacters] = useState([]);
  const location = useLocation();



  const navigate = useNavigate();
  const [access, setAccess] = useState(false);


  //FUNCION DE LOGEO
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      setAccess(data.access);
      data.access && navigate('/home');
    } catch (error) { };
  };

  useEffect(() => {
    access && navigate('/');  //ingreso al home//cambiar '/'
  }, [access]);

  /*   const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = '123456'; */
  /*   function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('Datos invalidos')
    }
  }*/


  //FUNCIÓN DE BUSCAR PERSONAJES
  async function onSearch(id, name) {
    try {
      const characterId = String(id);
      const characterInList = characters.some((character) => character.id === Number(id))//some es para validar si algún personaje tiene el mismo id buscado//? devuelve booleano
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${characterId}`)
      if (characterInList) {
        alert(`¡El personaje con el ID: ${id} ya está agregado!`)
      } else {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      }
    } catch (error) {
      message: error.message
    }
  }

  // FUNCIÓN PARA BUSCAR CON NAME
  //? Hacer una función que si se le pasa el nombre retorne el id del personaje y este id pasarlo a on Search 
  //? 


  //FUNCION DE PERSONAJES AL AZAR
  const randomCharacter = () => {
    const randomId = Math.floor(Math.random() * (826 - 1 + 1) + 1) // me devuelve un número aleatorrio entre 826 y 1
    return onSearch(randomId) // llamo a onSearch con el random 
  }

  //FUNCIÓN PARA CERRAR CARTAS
  const onClose = (id) => {
    const newCharacters = characters.filter(character => character.id !== Number(id))
    setCharacters(newCharacters)
  }
  //RENDER
  return (
    <>
      <div className='App'>
        {location.pathname !== '/' ? <Nav onSearch={onSearch} randomCharacter={randomCharacter} /> : null}
        <Routes>
          <Route path='/' element={<Start login={login} />} />
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} setAccess={setAccess} />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorites' element={<Favorites onClose={onClose} />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </div>
    </>
  )
}


export default App;
