import React from "react";
import style from './Card.module.css';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
    return (
        <div className={style.contenedor}>
            <button onClick={onClose} className={style.button}>X</button>
            <img src={image} alt={name} />
            <h2 className={style.h2}>{name}</h2>
            <h2 className={style.h2}>{status}</h2>
            <h2 className={style.h2}>{species}</h2>
            <h2 className={style.h2}>{gender}</h2>
            <h2 className={style.h2}>{origin.name}</h2>
        </div>
    )
}
