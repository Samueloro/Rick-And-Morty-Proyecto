import React from 'react'
import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'

export default function Nav({ onSearch, randomCharacter }) {
    return (
        <div className={style.Nav}>
            <div className={style.buttons}>
                <NavLink to={'/home'}>
                    <button className={style.link1}>Inicio</button>
                </NavLink>
                <NavLink to={'/about'}>
                    <button className={style.link2}>About</button>
                </NavLink>
                <NavLink to={'/favorites'}>
                    <button className={style.link3}>Favoritos</button>
                </NavLink>
            </div>
            <div className={style.flexNav}>
                <button className={style.random} onClick={randomCharacter}>Random</button>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    )
}

