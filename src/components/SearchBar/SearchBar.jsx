import { useState } from 'react'
import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {

    const [id, setId] = useState([])

    const handleChange = (event) =>{
        const newValue = event.target.value;
        setId(newValue)
    }

    return (
        <div className={style.searchBar}>
            <input type='search' placeholder="Buscar ID" className={style.barra} value={id} onChange={handleChange}/>
            <button onClick={() => onSearch(id)} className={style.button}>Agregar</button>
        </div>
    )
}
