import React from 'react'
import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav({onSearch}) {
    return (
        <div className={style.Nav}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

