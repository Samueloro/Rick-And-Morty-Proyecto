import { useState } from 'react'
import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
//ESTADO LOCAL
    const [id, setId] = useState([])
//FUNCIÓN PARA  ESCRIBIR ID Y BUSCAR
    const handleChange = (event) => {
        const newValue = event.target.value;
        setId(newValue)
    }

    return (
        <div className={style.searchBar}>
            <input type='search' placeholder="Buscar" className={style.barra} value={id} onChange={handleChange} />
            <button onClick={() => { onSearch(id); setId('') }} className={style.button}>Agregar</button>
        </div>
    )
}
