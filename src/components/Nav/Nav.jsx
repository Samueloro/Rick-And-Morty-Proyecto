import React from 'react'
import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav({ onSearch, randomCharacter }) {
    return (
        <div className={style.Nav}>
            <div className={style.flexNav}>
                <button className={style.random} onClick={randomCharacter}>Random</button>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}

