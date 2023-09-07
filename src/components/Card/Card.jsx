import React from "react";
import style from './Card.module.css';
import { NavLink } from 'react-router-dom'

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {

    return (
        <div className={style.contenedor}>
            <NavLink className={style.Navname} to={`/detail/${id}`}>
            <h2 className={style.name}>{name}</h2>
            </NavLink>
            <button onClick={() => onClose(id)} className={style.button} id={id}>X</button>
            {/*             <h2 className={style.h2}>{id}</h2> */}
            <img src={image} alt={name} className={style.image} />
            <div className={style.h2}>
                <h2 className={style.property}>{species}</h2>
                <h2 className={style.property2}>{gender}</h2>
                {/*                 <h2 className={style.property}>{status}</h2> */}
                {/*                 <h2 className={style.property}>{origin.name}</h2> */}
            </div>
        </div>
    )
}
