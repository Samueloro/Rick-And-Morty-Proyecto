import style from './SearchBar.module.css'

export default function SearchBar({onSearch}){
    return(
        <div>
            <input type = 'search' placeholder="Buscar" className={style.barra}/>
            <button onClick={onSearch} className={style.button}>🔍</button>
        </div>
    )
}