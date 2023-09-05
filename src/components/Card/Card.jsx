import React from "react";
import style from './Card.module.css';

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {

    return (
        <div className={style.contenedor}>
            <button onClick={() => onClose(id)} className={style.button} id={id}>X</button>
            {/*             <h2 className={style.h2}>{id}</h2> */}
            <img src={image} alt={name} className={style.image} />
            {/*             //poner div posición absolute */}
            <div className={style.h2}>
                <h2 className={style.name}>{name}</h2>
                <h2 className={style.property}>{status}</h2>
                <h2 className={style.property}>{species}</h2>
                <h2 className={style.property}>{gender}</h2>
                <h2 className={style.property}>{origin.name}</h2>
            </div>
        </div>
    )
}
